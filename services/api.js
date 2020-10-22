// API Code

const API_URL = "https://chandlersecurityday.org/api";

const send = async (action,message) => {
    // send(): send the api request
    // send(): returns a tuple (bool,message) where bool indicated if request was successful or not and message contains the response body json, or error message
    let response = {};
    let result = {
        status: false,
        body: {}
    };
    try {
        if (action == "ping") {
            response = await fetch(API_URL+'/'+action, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                redirect: 'error',
                referrerPolicy: 'origin'
            }).then(function(response){
                if(response.status == 200) {
                    result.status = true;
                } else {
                    result.status = false;
                }
                response.json().then(function(body){
                    result.body = body;
                })
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
            }).then(function(response){
                if(response.status == 200) {
                    result.status = true;
                } else {
                    result.status = false;
                }
                response.json().then(function(body){
                    result.body = body;
                })
            });
        }
    } catch(e) {
        result.body = {e};
    }
    // send() returns a promise for the API call results object
    return result;
}

const API = {
    isConnected: false, 
    // Example usage for API:
    //
    // ctf.api.ping().then(function(response){
    //    if(response.status) {
    //        API.isConnected = true;
    //    }
    // });
    // 
    // ctf.api.create(name).then(function(response){
    //    if(response.status) {
    //        STATE.API.isConnected = true;
    //        STATE.API.handle = response.body.handle;
    //        STATE.API.guid = response.body.token;
    //    }
    // });
    //
    ping : async () => {
        return send("ping",{});
    },
    create : async (name) => {
        return send("create",{token:ctf.state.API.guid, name:name});
    },
    capture : async (flag,points) => {
        return send("capture",{token:ctf.state.API.guid, flag:flag, points:points});
    },
    leaders : async () => {
        return send("leaders",{token:ctf.state.API.guid});
    }
}

export default API;