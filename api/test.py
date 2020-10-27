import json, sys, uuid, random
from flask import Flask, request, jsonify
import sqlite3 as sql
from flask_cors import CORS, cross_origin

mydb = '/tmp/ctf.db'

def prog_quit(reason, e):
	print(reason)
	sys.exit(" * Quitting: " + repr(e))

try:
    conn = sql.connect(mydb)
    print(" * Database opened successfully")
except Exception as e:
    prog_quit(" * Unable to open database",e)

try:
    cur = conn.cursor()
    cur.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='users'")
    row = cur.fetchone()
    if row is None:
        conn.execute("CREATE TABLE users (name TEXT, handle TEXT, token TEXT, flags INTEGER, points INTEGER)")
        conn.commit()
        print(" * users table created")
    else:
        print(" * users table already exists, no need to create")
except Exception as e:
    prog_quit(" * Unable to create users table", e)

conn.close()

app = Flask(__name__)
CORS(app)


@app.route('/api/ping', methods=['GET'])
def ping():
	return jsonify({})

@app.route('/api/create', methods=['POST'])
def create_user():
    try:
        name = request.get_json()
        name = str(name['name'])
        if((len(name) < 4) or (len(name) > 20)):
            raise Exception('Handle does not conform to API spec')
        token = str(uuid.uuid4())
        handle_db = ""
        while True:
            handle = name + "#" + str(random.randint(1000,9999))
            handle_db = (handle,)
            conn = sql.connect(mydb)
            cur = conn.cursor()
            cur.execute("SELECT handle FROM users WHERE handle = ?", handle_db)
            row = cur.fetchone()
            if row is None:
                break
        parameters = (name, handle, token, 0, 0,)
        cur.execute('INSERT INTO users (name, handle, token, flags, points) VALUES (?, ?, ?, ?, ?)', parameters)
        conn.commit()
        results = {}
        results = {"token": token,"handle": handle}
        return jsonify(results)
    except Exception as e:
        return (jsonify({"error": "Player could not be created"}),400)
        #prog_quit(" * Unable to add user to db", e)
    finally:
        try:
            conn.close()
        except:
            pass


@app.route('/api/capture', methods=['POST'])
def capture_flags():
    try:
        tfp = request.get_json()
        token = str(tfp['token'])
        token_db = (token,)
        flags = str(tfp['flags'])
        points = str(tfp['points'])
        conn = sql.connect(mydb)
        cur = conn.cursor()
        cur.execute("SELECT token FROM users WHERE token = ?", token_db)
        row = cur.fetchone()
        if row is None:
            return (jsonify({"error": "The flag could not be captured as requested (token not found)"}),400)
        else:
            parameters = (flags, points, token,)
            cur.execute('UPDATE users SET flags = ?, points = ? WHERE token = ?', parameters)
            conn.commit()
            return jsonify({})
    except Exception as e:
        return (jsonify({"error": "The flag could not be captured as requested"}),400)
    finally:
        try:
            conn.close()
        except:
            pass

@app.route('/api/leaders', methods=['POST'])
def get_leaders():
    try:
        token = request.get_json()
        token = (str(token['token']),)
        conn = sql.connect(mydb)
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
        try:
            conn.close()
        except:
            pass

if __name__ =='__main__':
	app.run(debug = True)