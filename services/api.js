// API Code
//
// TODO: write this
//
const API_URL = "https://chandlersecurityday.org/api";
const REQ = {action:'', guid:'', body:''}
const RESP = {result:'', body:''}

const API = {
    url : () => {
        return API_URL;
    },
    // Call send() like:
    // send(REQ)
    //   .then(data => {
    //     console.log(data); // JSON data parsed by `response.json()` call
    //   });
    send : async(payload) => {
        // Default options are marked with *
        const response = await fetch(API_URL, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    },
    test : () => {
        return false;
    },
    validate : () => {
        // TODO: write this!

        return false;
    },
    isConnected : () => {
        // TODO: write this!
        return false;
    }
}
export default API;