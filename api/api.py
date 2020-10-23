import json, sys, uuid, random
from flask import Flask, request, jsonify
import sqlite3 as sql

def prog_quit(reason, e):
	print(reason)
	sys.exit(" * Quitting: " + repr(e))

try:
    conn = sql.connect('ctf.db')
    print(" * Database opened successfully")
except Exception as e:
    prog_quit(" * Unable to open database",e)

try:
    cur = conn.cursor()
    cur.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='users'")
    row = cur.fetchone()
    if row is None:

        conn.execute("CREATE TABLE users (name TEXT, handle TEXT, token TEXT, flags INTEGER, points INTEGER)")
        print(" * users table created")
    else:
        print(" * users table already exists, no need to create")
except Exception as e:
	prog_quit(" * Unable to create users table", e)

conn.close()

app = Flask(__name__)

@app.route('/api/ping', methods=['GET'])
def ping():
	return jsonify({'status': 'up'})

@app.route('/api/create', methods=['POST'])
def create_user():
    try:
        name = request.get_json()
        name = str(name['name'])
        token = str(uuid.uuid4())
        handle_db = ""
        while True:
            handle = name + "#" + str(random.randint(1000,9999))
            handle_db = (handle,)
            conn = sql.connect('ctf.db')
            cur = conn.cursor()
            cur.execute("SELECT handle FROM users WHERE token = ?", handle_db)
            row = cur.fetchone()
            if row is None:
                break
        parameters = (name, handle, token, 0, 0,)
        cur.execute('INSERT INTO users (name, handle, token, flags, points) VALUES (?, ?, ?, ?, ?)', parameters)
        return jsonify({'user added': 'OK'})
    except Exception as e:
        prog_quit(" * Unable to add user to db", e)
    finally:
        conn.close

@app.route('/api/capture', methods=['POST'])
def capture_flags():
	return jsonify({'flags captured': 'OK'})

@app.route('/api/leaders', methods=['POST'])
def get_leaders():
    try:
        token = request.get_json()
        token = (str(token['token']),)
        conn = sql.connect('ctf.db')
        cur = conn.cursor()
        cur.execute("SELECT handle FROM users WHERE token = ?", token)
        row = cur.fetchone()
        if row is not None:
            row = None
            sqltxt = "SELECT name, handle, flags, points FROM users"
            cur.execute(sqltxt)
            rows = cur.fetchall()
            results = ""
            if rows is not None:
                for row in rows:
                	results = results + "{'name' : '" + row[0] + "', 'handle' : '" + row[1] + "', 'flags' : '" + str(row[2]) + "' 'points' : '" + str(row[3]) + "'},"
                results = results[:-1]
                return jsonify(results)
            else:
                return jsonify({'Error': 'No leaders were found'})
        else:
            return jsonify({'Error': 'Not a valid token'})
    except Exception as e:
        prog_quit(" * Unable to get a list of leaders", e)
    finally:
        conn.close

if __name__ =='__main__':
	app.run(debug = True)