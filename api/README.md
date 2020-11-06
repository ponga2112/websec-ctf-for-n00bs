# websec-ctf-for-n00bs API Server

The API server is used as a centralized scoring server for the Capture the Flag application.  It allows multiple external clients to play the game and keep track of their progress with other players.

## Usage

A python 3 installation is required to run the API server.  A list of required external modules can be found in the requirements.txt file.  To automatically install the required modules in your python instance, make sure pip is installed and run the following command:

    pip install -r requirements.txt

For local testing or single player local use, the CTF application and the API server can both be started by running the run.py start up script.

In order to use the API in a production environment, you will need to run a web server.  A good choice for hosting python is uWSGI - https://github.com/unbit/uwsgi. uWSGI will allow you to serve the API and allow external connections.

Documentation for uWSGI can be found at https://uwsgi-docs.readthedocs.io/en/latest/

A QuickStart for using uWSGI is located here https://uwsgi-docs.readthedocs.io/en/latest/WSGIquickstart.html

* Install uWSGI: pip install uwsgi
* Run the API: uwsgi --http :8002 --wsgi-file api.py --callable app
* In order to run multiple processes and threads, those options need to be added on the command line:  --processes 4 --threads 2
* an ini file can be create and then loaded when starting the uWSGI server: uwsgi --ini uwsgi.ini
* ini file example:

    [uwsgi]
    http = :8002
    wsgi-file = api.py
    callable = app
    processes = 4
    threads = 2
    master = true