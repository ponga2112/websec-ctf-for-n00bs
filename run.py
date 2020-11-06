#!/usr/local/bin/python3

#
## bootstrap to serve local files and run the api server
#

import http.server, socketserver, threading
# TODO: this flask app is pointing to test, once API server is completed, change this line:
from api import api as apiServer

API_PORT = 8002
HTTP_PORT = 8001

def run():
    try:
        httpd = socketserver.TCPServer(('0.0.0.0', HTTP_PORT), http.server.SimpleHTTPRequestHandler)
        httpd_thread = threading.Thread(target=httpd.serve_forever)
        httpd_thread.daemon = True
        httpd_thread.start()
        print('[+] HTTP Server running on port '+str(HTTP_PORT)+"...")
        apiServer.initDB()
        apiServer.app.config['ENV'] = 'development'
        apiServer.app.run(host='0.0.0.0',port=API_PORT)
    except KeyboardInterrupt:
        print('[+] Shutting down')
        httpd_thread.stop()
        exit(0)

run()
exit(0)