"use strict";

// GLOBALS
let DEVMODE = true;

// "Loading..." page while we get things setup
const Loading = {
    render : async () => {
        let view =  /*html*/`
            <section class="section"> 
            <h1 id="loading">Loading<span id="loading-item"></span><span class="loading one">.</span><span class="loading two">.</span><span class="loading three">.</span></h1>
            </section>
            <section class="section">
                <img src="/assets/images/flag_trasnsparent_378x487.png"></img>
            </section>
        `
        return view
    },
    after_render: async () => {}
}
if(DEVMODE) {
    console.log('%c DEVMODE: App Starting...', 'background: #222; color: #bada55');
}
// Display Loading page until we app becomes ready
const main = null || document.getElementById('main');
(async () => {
    main.innerHTML = await Loading.render();
    await Loading.after_render();
})();

// a few things we need ahead of time
import * as Utils from '/services/utils.js'
import Error404 from '/views/pages/Error404.js'
import API from '/services/api.js'

// Our state object.
class state {
    // APPSTATE = {progress: "NEW",
    // APPSTATE = {progress: "STARTING",
    // APPSTATE = {progress: "PLAYING",
    #API = null;
    #COOKIE = null;
    #APPSTATE = null;
    #CTF = null;
    constructor() {
        this.#API = {isConnected:false, handle:"", guid:""}
        this.#COOKIE = {isValid:false, object:null}
        this.#APPSTATE = {progress:"", page:"", state:""}
        this.#CTF = {current:0, flags:0, points:0, max_flags:-1, max_points:-1}
    }
    // getters and setters
    get API(){
        return this.#API;
    }
    set API(v) {
        this.#API = v;
    }
    get COOKIE(){
        return this.#COOKIE;
    }
    set COOKIE(v) {
        this.#COOKIE = v;
    }
    get APPSTATE(){
        return this.#APPSTATE;
    }
    set APPSTATE(v) {
        this.#APPSTATE = v;
    }
    get CTF(){
        return this.#CTF;
    }
    set CTF(v) {
        this.#CTF = v;
    }
};
let STATE = new state();
let DeveloperInfo = new Promise(new Function);

// Our View/Page Imports
import Blank from '/views/pages/Blank.js'
import Intro from '/views/pages/Intro.js'
import Start from '/views/pages/Start.js'
import Leaders from '/views/pages/Leaders.js'
import MicroModal from '/vendor/js/micromodal.js'
// Modals
import Bottombar from '/views/modals/status.js'
// TODO: write more modals...

// Challenges
import CTF_1 from '/views/pages/ctf/xss.js'
import CTF_2 from '/views/pages/ctf/auth.js'
import CTF_3 from '/views/pages/ctf/logic.js'
import CTF_4 from '/views/pages/ctf/data.js'
import CTF_5 from '/views/pages/ctf/dirs.js'
import CTF_6 from '/views/pages/ctf/config.js'
import CTF_7 from '/views/pages/ctf/sqli.js'
import CTF_8 from '/views/pages/ctf/xxe.js'
import CTF_9 from '/views/pages/ctf/lfi.js'
import CTF_10 from '/views/pages/ctf/rce.js'

// Define our Routes
const routes = {
    '/'              : Loading
    , '/blank'       : Blank
    , '/intro'       : Intro
    , '/start'       : Start
    , '/leaderboard' : Leaders
    , '/ctf/1'        : CTF_1
    , '/ctf/2'        : CTF_2
    , '/ctf/3'        : CTF_3
    , '/ctf/4'        : CTF_4
    , '/ctf/5'        : CTF_5
    , '/ctf/6'        : CTF_6
    , '/ctf/7'        : CTF_7
    , '/ctf/8'        : CTF_8
    , '/ctf/9'        : CTF_9
    , '/ctf/10'       : CTF_10
};

let t= 0;
for (const [k, v] of Object.entries(routes)) {
    if(k.match('/ctf/[0-9]')) {
        t++;
    }
}
STATE.CTF.max_flags = t;
STATE.CTF.max_points = t*100;

//
// This is our main code block that runs when the page is ready and all modules have been loaded
//
const init = async () => {
    STATE.APPSTATE.state = "init"
    STATE.API.isConnected = API.isConnected();
    if(DEVMODE) {
        console.log('%c DEVMODE: init() called', 'background: #222; color: #bada55');
    }
    // 0. is API connected
    // If so, then let the server validate or issue session objects
    if(STATE.API.isConnected) {
        console.log("Error: API not implemented");
    } else {
        // No API, so let's validate if its a returning using on the client-side
        let returning = false;
        let c = Utils.Cookie.get()
        let cs = btoa(JSON.stringify(c))
        if(c != null) {
            if(Utils.Cookie.isValid(cs,STATE)) {
                returning = true;
            }
        }
        if (!returning) {
            c = Utils.Cookie.generate(STATE);
            Utils.Cookie.set(c);
            STATE.COOKIE.isValid = Utils.Cookie.isValid(btoa(JSON.stringify(Utils.Cookie.get())), STATE);
            STATE.COOKIE.object = c;
            STATE.API.handle = c.handle;
            STATE.API.guid = c.guid;
            // APPSTATE = {progress:"NEW", page:"loading", state:"init"}
            STATE.APPSTATE.progress = "NEW"
            STATE.APPSTATE.page = "intro"
        } else {
            // If this is a returning offline user..
            STATE.API.handle = c.handle;
            STATE.API.guid = c.guid;
            STATE.COOKIE.isValid = true;
            STATE.COOKIE.object = c;
            STATE.APPSTATE.progress = c.progress;
            STATE.CTF.current = c.current_flag;
            STATE.CTF.flags = c.flags_capped;
            STATE.CTF.points = c.points;
            if(c.progress == "NEW") {
                STATE.APPSTATE.page = "intro";
            }
            if(c.progress == "STARTING") {
                STATE.APPSTATE.page = "start";
            }
            if(c.progress == "PLAYING") {
                STATE.APPSTATE.page = "ctf/"+String(STATE.CTF.current);
            }
            // there SHOULD be no need to call router()
            //await router();
        }
    }
    document.getElementById('modal').innerHTML = await Utils.Modal.init_1()
    if(DEVMODE) {
        //DeveloperInfo.render(STATE);
        let r_html = await DevModules.Routes.render(routes)
        let c_html = await DevModules.Cookie.render(STATE)
        document.getElementById('developer').innerHTML  = await DevModules.Details.render(STATE);
        await DevModules.Details.after_render("routes",r_html)
        await DevModules.Details.after_render("cookie",c_html)
        .then(console.log('%c DEVMODE: modules loaded.', 'background: #222; color: #bada55'))
    } else {
        if(STATE.API.isConnected) {
            document.getElementById('api_status').innerHTML = "(connected)";
        } else {
            document.getElementById('api_status').innerHTML = "(offline)";
        }
        document.getElementById('current_user').innerHTML = STATE.API.handle;
    }
    // that *should* be all there is to it
    
    await Utils.Redirect(STATE.APPSTATE.page)
    await router()
    await MicroModal.init()
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router)
    STATE.APPSTATE.state = "ready"
}

const register = async (handle) => {
    let h = Utils.createHandle(handle)
    STATE.API.handle = h;
    STATE.COOKIE.object.handle = h;
    Utils.Cookie.set(STATE.COOKIE.object)
    Utils.Modal.hideAll();
    if(DEVMODE) {
        document.getElementById('developer').innerHTML  = await DevModules.Details.render(STATE);
    }
    update({action:"nav",to:"start"},null)
}


// Takes a URL, checks against the list of supported routes and then renders the corresponding content page, else serves a "404" page
const router = async () => {
    const main = null || document.getElementById('main');
    let request = Utils.Parse.parseRequestURL()
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.subresource ? '/' + request.subresource : '')
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    if(DEVMODE) {
        console.log('%c DEVMODE: router() called for page /#'+parsedURL, 'background: #222; color: #bada55');
    }
    let pf = parsedURL.split("/#");
    STATE.APPSTATE.page = pf[t.length-1]
    main.innerHTML = await page.render();
    await page.after_render(update);
    MicroModal.init();
}

// Our Main function that gets called with App State Change, Nav, Flag Capped... or any change really.
// This keeps the up state in up-to-date and in sync
const update = async (item,obj) => {
    if(item.action == "nav") {
        if(item.to == "start") {
            STATE.APPSTATE.page = "start"
            STATE.APPSTATE.progress = "STARTING"
            STATE.COOKIE.object.progress = "STARTING";
            Utils.Cookie.set(STATE.COOKIE.object)
            Utils.Redirect("start");
        }
    }

    if(DEVMODE) {
        document.getElementById('developer').innerHTML  = await DevModules.Details.render(STATE);
        let r_html = await DevModules.Routes.render(routes)
        let c_html = await DevModules.Cookie.render(STATE)
        await DevModules.Details.after_render("routes",r_html)
        await DevModules.Details.after_render("cookie",c_html)
    } else {
        document.getElementById('current_user').innerHTML = STATE.API.handle;
    }
    // TODO: Need something here to clear and re-register modals!
    // TODO: or.. a better way to orgnize and keep track of modals in general

}

// Some app features should be global, so lets attach those
const globals = {
    register: register,
    modal: Utils.Modal,
    validatePlayername: Utils.validatePlayername,
}
window.ctf = globals;

// Listen for when the page is ready and all assets have been loaded
document.addEventListener("DOMContentLoaded",function(){
    // TODO: once everything is implemented... remove this setTimeout (its only here to give the appearence that the App is "doing" something)
    setTimeout(function() {
        init().then(() => {
            console.log('%c App Ready!', 'background: #222; color: #bada55');
        });
    }, 3 * 1000);
});

const status = null || document.getElementById('status');
let DevModules = null;
if(DEVMODE) {
    console.log('%c DEVMODE: Loading modules...', 'background: #222; color: #bada55');
    DevModules = { Container: null, Details: null, Routes: null, Cookie: null, Update : null};
    (async () => {
        const { Container: Container, Details: Details, Routes: Routes, Cookie: Cookie, Update: Update } = await import('/services/develop.js')
        status.innerHTML = await Container.render();
        await Container.after_render()
        DevModules.Details = Details;
        DevModules.Routes = Routes;
        DevModules.Cookie = Cookie;
        DevModules.Update = Update;
    })()
} else {
    (async () => {
        status.innerHTML = await Bottombar.render();
        await Bottombar.after_render();
    })();
}

// Here, we expose certain variables and functions to the DOM *if* we are in DEVMODE
if(DEVMODE) {
    console.log('%c DEVMODE: Attaching objects to DOM: ', 'background: #222; color: #bada55');
    console.log(STATE);
    window.STATE = STATE;
    window.Utils = Utils;
    window.MicroModal = MicroModal;
    window.routes = routes;
    window.DevModules = DevModules;
}
