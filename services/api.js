// API Code

const API_URL = "https://chandlersecurityday.org/api";

const send = async (action,message) => {
    // send(): send the api request
    // send(): returns a tuple (bool,message) where bool indicated if request was successful or not and message contains the response body json, or error message
    let response = {};
    if (action == "ping") {
        response = await fetch(API_URL+'/'+action, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            redirect: 'error',
            referrerPolicy: 'origin'
        });
    } else {
        response = await fetch(API_URL+'/'+action, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {'Content-Type':'application/json'},
            redirect: 'error',
            referrerPolicy: 'origin',
            body: JSON.stringify(message)
        });
    }
    // TODO: this still needs work:
    // ctf.api.ping().then(response => response.json()).then(data => console.log(data));
    return response;
}

const API = {
    isConnected: false, 
    ping : async () => {
        return send("ping",{});
    },
    create : async () => {
        // TODO: write this!

        return false;
    },
    capture : async () => {
        // TODO: write this!
        return false;
    },
    leaders : async () => {
        // TODO: write this!
        return false;
    }
}

export default API;