import json, sys, uuid, random, re, time, math, os
from flask import Flask, request, jsonify
import sqlite3 as sql
from flask_cors import CORS, cross_origin

class Player:
    def __init__(self,handle,token):
        handle = re.sub(r"[^a-zA-Z0-9_]", "", handle)[:20]
        if(len(handle) < 3):
            handle = ''.join(random.choice('abcdefghijklmnopqrstuvwxyz') for _ in range(4))
        if(not isValidHandle(handle)):
            handle = ''.join(random.choice('abcdefghijklmnopqrstuvwxyz') for _ in range(4))
        self.handle = handle+"#" +str(random.randint(1000,9999))
        if(not isValidToken(token)):
            self.token = str(uuid.uuid4())
        else:
            self.token = token
        self.epoch = math.floor(time.time())
        self.flags = 0
        self.points = 0

def isValidToken(token):
    conn = sql.connect(mydb)
    cur = conn.cursor()
    if(re.search('^[a-f0-9]{8}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{12}$',token)):
        cur.execute("SELECT token FROM users WHERE token=?", (token,))
        row = cur.fetchone()
        if(row is None):
            conn.close()
            return True
    conn.close()
    return False

def isValidHandle(handle):
    if(handle.lower() in naughty):
        return False
    for word in naughty:
        if word in handle.lower():
            return False
    return True

def isValidCapture(cur_flags,cur_points,asserted_flag,asserted_points):
    if((cur_flags < MAX_FLAGS+1) or (cur_points < (MAX_POINTS*MAX_FLAGS)+1)):
        if((asserted_flag > 0) and (asserted_flag < MAX_FLAGS+1)):
            if((asserted_points > -1) and (asserted_points < MAX_POINTS+1)):
                return True
    return False

# db setup
myos = sys.platform.lower()
if "linux" in myos:
    mydb = '/tmp/ctf.db'
elif "darwin" in myos:
    mydb = '/tmp/ctf.db'
elif "win" in myos:
    mydb = 'C:\\Temp\\ctf.db'
else:
    mydb = '/tmp/ctf.db'

def initDB():
    conn = sql.connect(mydb)
    cur = conn.cursor()
    cur.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='users'")
    row = cur.fetchone()
    if row is None:
        conn.execute("CREATE TABLE users (epoch INTEGER, handle TEXT, token TEXT, flags INTEGER, points INTEGER)")
    conn.commit()
    conn.close()

MAX_FLAGS = 10
MAX_POINTS = 100
app = Flask(__name__)
CORS(app)

@app.route('/api/ping', methods=['GET'])
def ping():
    try:
        conn = sql.connect(mydb)
        cur = conn.cursor()
        conn.close()
    except:
        return jsonify({'error':'API is not available'},400)
    return jsonify({})

@app.route('/api/create', methods=['POST'])
def create_user():
    handle = ""
    token = ""
    conn = sql.connect(mydb)
    cur = conn.cursor()
    try:
        handle = request.get_json()['name']
        token = request.get_json()['token']
    except:
        return (jsonify({"error": "Player could not be created"}),400)
    player = Player(handle,token)
    new_handle = player.handle
    x = 0
    h_found = True
    while (x < 6):
        cur.execute("SELECT handle FROM users WHERE handle = ?", [new_handle])
        row = cur.fetchone()
        if row is None:
            h_found = False
            break
        new_handle = re.sub(r"[^a-zA-Z0-9_]", "", handle)[:20]
        if(len(new_handle) < 3):
            new_handle = ''.join(random.choice('abcdefghijklmnopqrstuvwxyz') for _ in range(4))
        if(not isValidHandle(new_handle)):
            new_handle = ''.join(random.choice('abcdefghijklmnopqrstuvwxyz') for _ in range(4))
        new_handle = new_handle+"#" +str(random.randint(1000,9999))
        param = (new_handle)
        print(param)
        x = x + 1
    if (h_found is True):
        return (jsonify({"error": "Player could not be created"}),400)
    parameters = (player.epoch, new_handle, player.token, player.flags, player.points)
    cur.execute('INSERT INTO users (epoch, handle, token, flags, points) VALUES (?, ?, ?, ?, ?)', parameters)
    conn.commit()
    results = {"token": player.token,"handle": player.handle}
    conn.close()
    return jsonify(results)

@app.route('/api/capture', methods=['POST'])
def capture_flags():
    token = ""
    flag = 0
    points = 0
    player_row = None
    conn = sql.connect(mydb)
    cur = conn.cursor()
    try:
        token = request.get_json()['token']
        flag = request.get_json()['flag']
        points = request.get_json()['points']
        cur.execute("SELECT * FROM users WHERE token = ?", (token,))
        player_row = cur.fetchone()
    except:
        return (jsonify({"error": "The flag could not be captured as requested"}),400)
    if player_row is None:
        return (jsonify({"error": "The flag could not be captured as requested"}),400)
    # check that the capture appears valid
    if(points < 0):
        points = 0
    if(not isValidCapture(player_row[3],player_row[4],flag,points)):
        return (jsonify({"error": "The flag could not be captured as requested"}),400)
    parameters = (player_row[3]+1, points+player_row[4], token)
    cur.execute('UPDATE users SET flags = ?, points = ? WHERE token = ?', parameters)
    conn.commit()
    conn.close()
    return jsonify({})

@app.route('/api/leaders', methods=['POST'])
def get_leaders():
    token = ""
    player_row = None
    conn = sql.connect(mydb)
    cur = conn.cursor()
    try:
        token = request.get_json()['token']
        cur.execute("SELECT token FROM users WHERE token = ?", (token,))
        player_row = cur.fetchone()
    except:
        return (jsonify({"error": "Leaderboard not available"}),400)
    if player_row is None:
        return (jsonify({"error": "Leaderboard not available"}),400)
    cur.execute("SELECT handle,flags,points FROM (SELECT * from users ORDER BY epoch DESC LIMIT 25) ORDER BY points DESC LIMIT 25")
    rows = cur.fetchall()
    results = []
    for i in rows:
        results.append({'handle':i[0],'flags':i[1],'points':i[2]})
    conn.close()
    return jsonify(results)

# todo: implement naughty word checking for user submitted handles
fileName = "naughty.txt"
if os.path.isfile("naughty.txt"):
    fileName = "naughty.txt"
if os.path.isfile("api/naughty.txt"):
    fileName = "api/naughty.txt"
if os.path.isfile("api\\ctf.db"):
    fileName = "api\\ctf.db"

try:
    f = open(fileName, "r")
    naughty = f.readlines()
    for i,s in enumerate(naughty):
        naughty[i] = s.strip()
except:
    print(" * file 'naughty.txt' does not exist")

if __name__ =='__main__':
    initDB()
    app.run(debug=True,host='0.0.0.0',port=8002)