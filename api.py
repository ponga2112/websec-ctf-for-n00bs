import json, sys
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
	return jsonify({'user added': 'OK'})

@app.route('/api/capture', methods=['POST'])
def capture_flags():
	return jsonify({'flags captured': 'OK'})

@app.route('/api/leaders', methods=['POST'])
def get_leaders():
	try:
        results = "{"
        conn = sql.connect('ctf.db')
	    cur = conn.cursor()
	    cur.execute("SELECT name, handle, flags, points FROM users")
	    rows = cur.fetchall()
	    for row in rows:
	    	results = results + "'name' : '" + row[0] + "', 'handle' : '" + row[1] + "', 'flags' : '" + row[2] + "', 'points' : '" + row[3] + "'"
	    resutls = results + "}"
	    return jsonify(results)
	except Exception as e:
		prog_quit(" * Unable to get a list of leaders", e)

if __name__ =='__main__':
	app.run(debug = True)