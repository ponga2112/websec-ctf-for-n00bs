"use strict";

// GLOBALS
let DEVMODE = false;

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
    // APPSTATE = {progress: "COMPLETED",
    // _API = null;
    // _COOKIE = null;
    // _APPSTATE = null;
    // _CTF = null;
    constructor() {
        this._API = {isConnected:false, handle:"", guid:""}
        this._COOKIE = {isValid:false, object:null}
        this._APPSTATE = {progress:"", page:"", state:""}
        this._CTF = {current:0, flags:[], flag_count: 0, points:0, max_flags:-1, max_points:-1}
    }
    // getters and setters
    get API(){
        return this._API;
    }
    set API(v) {
        this._API = v;
    }
    get COOKIE(){
        return this._COOKIE;
    }
    set COOKIE(v) {
        this._COOKIE = v;
    }
    get APPSTATE(){
        return this._APPSTATE;
    }
    set APPSTATE(v) {
        this._APPSTATE = v;
    }
    get CTF(){
        return this._CTF;
    }
    set CTF(v) {
        this._CTF = v;
    }
};
let STATE = new state();

class flag {
    constructor(points, cur, next) {
        this.points = points
        this.cur = cur
        this.next = next
    }
}

class answerstatus {
    constructor(){
        this._STATUS = {
            one: "false",
            two:"false",
            three:"false",
            four:"false",
            five:"false",
            six:"false",
            seven:"false",
            eight:"false",
            nine:"false",
            ten:"false"
        }
    }
    get STATUS(){
        return this._STATUS;
    }
    set STATUS(V){
        this._STATUS = v;
    }
}
let answerStatus = new answerstatus();
//let DeveloperInfo = new Promise(new Function);

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
STATE.CTF.flags = [];
//
// This is our main code block that runs when the page is ready and all modules have been loaded
//
const init = async () => {
    STATE.APPSTATE.state = "init"
    STATE.API.isConnected = await API.isConnected();
    if(STATE.API.isConnected) {
        if(!DEVMODE) {
            document.getElementById('api_status').innerHTML = "(connected)";
        }
    } else {
        if(!DEVMODE) {
            document.getElementById('api_status').innerHTML = "(offline)";
        }
    }
    if(DEVMODE) {
        console.log('%c DEVMODE: init() called', 'background: #222; color: #bada55');
    }
    // Setup client side session
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
        STATE.APPSTATE.progress = "NEW";
        STATE.APPSTATE.page = "intro";
    } else {
        // If this is a returning offline user..
        STATE.API.handle = c.handle;
        STATE.API.guid = c.guid;
        STATE.COOKIE.isValid = true;
        STATE.COOKIE.object = c;
        STATE.APPSTATE.progress = c.progress;
        STATE.CTF.current = c.current_flag;
        STATE.CTF.flag_count = c.flags_capped;
        STATE.CTF.flags = c.flags;
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
        if(c.progress == "COMPLETED") {
            STATE.APPSTATE.page = "leaderboard";
        }
        // there SHOULD be no need to call router()
        //await router();
    }
    // Devmode override - allow for direct navigation to the page, reguardless of cookie state
    if(DEVMODE) {
        let r = Utils.Parse.parseRequestURL()
        if(r.resource.length > 1) {
            if(r.resource == "ctf") {
                STATE.APPSTATE.page = r.resource+'/'+r.subresource
            } else {
                STATE.APPSTATE.page = r.resource
            }
        }
    }
    document.getElementById('modal').innerHTML = await Utils.Modal.init_1()
    if(DEVMODE) {
        //DeveloperInfo.render(STATE);
        let r_html = await DevModules.Routes.render(routes)
        let c_html = await DevModules.Cookie.render(STATE)
        let a_html = await DevModules.Answers.render(null)
        document.getElementById('developer').innerHTML  = await DevModules.Details.render(STATE);
        await DevModules.Details.after_render("routes",r_html)
        await DevModules.Details.after_render("cookie",c_html)
        await DevModules.Details.after_render("answers",a_html)
        .then(console.log('%c DEVMODE: modules loaded.', 'background: #222; color: #bada55'))
    } else {
        document.getElementById('current_user').innerHTML = STATE.API.handle;
        await Bottombar.after_render();
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
    let new_player = await Utils.createHandle(handle)
    if(new_player) {
        STATE.API.handle = new_player;
        STATE.COOKIE.object.handle = new_player;
        STATE.COOKIE.object.guid = ctf.state.API.guid;
        Utils.Cookie.set(STATE.COOKIE.object)
        Utils.Modal.hideAll();
        if(DEVMODE) {
            DevModules.Details.render(STATE).then(function(s){
                document.getElementById('developer').innerHTML  = s;
            })
        }
        update({action:"nav",to:"start"},null)
    }
}


// Takes a URL, checks against the list of supported routes and then renders the corresponding content page, else serves a "404" page
const router = async () => {
    const main = null || document.getElementById('main');
    let request = Utils.Parse.parseRequestURL()
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.subresource ? '/' + request.subresource : '')
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    //let pf = parsedURL.split("/#")[1];
    // UPDATE: all kinds of changes here to force navigation based on Player State
    let isValid = true;
    if(DEVMODE) {
        console.log('%c DEVMODE: router() called for page /#'+parsedURL, 'background: #222; color: #bada55');
        STATE.APPSTATE.page = parsedURL;
        isValid = true;
    } else {
        isValid = true;
        // PLAYING, NEW, STARTING
        if((STATE.APPSTATE.progress == "NEW") && (parsedURL != "/intro")) {
            isValid = false;
            Utils.Redirect("intro");
        }
        if((STATE.APPSTATE.progress == "STARTING") && (parsedURL != "/start")) {
            isValid = false;
            Utils.Redirect("start");
        }
        if(STATE.APPSTATE.progress == "PLAYING") {
            // if playing, checking this is a bit more complicated
            let t_pf = -1
            try {
                let tt = parsedURL.split('/')
                t_pf = parseInt(tt[tt.length-1])
            } catch {
                t_pf = 1
            }
            if(t_pf != STATE.CTF.current) {
                isValid = false;
                let r = "ctf/"+String(STATE.CTF.current);
                Utils.Redirect(r);
            }
        }
    }
    if (isValid) {
        main.innerHTML = await page.render();
        await page.after_render(update);
        await MicroModal.init();
    }
}

// Our Main function that gets called with App State Change, Nav, Flag Capped... or any change really.
// This keeps the state up-to-date and in sync
const update = async (item,obj) => {
    if(item.action == "nav") {
        if(item.to == "start") {
            STATE.APPSTATE.page = "start";
            STATE.APPSTATE.progress = "STARTING";
            STATE.COOKIE.object.progress = "STARTING";
            Utils.Cookie.set(STATE.COOKIE.object);
            Utils.Redirect("start");
        }
        if(item.to == "leaderboard") {
            STATE.APPSTATE.page = "leaderboard";
            STATE.APPSTATE.progress = "COMPLETED";
            STATE.COOKIE.object.progress = "COMPLETED";
            STATE.COOKIE.object.current_flag = 0;
            Utils.Cookie.set(STATE.COOKIE.object);
            Utils.Redirect("leaderboard");
        }
        if(item.to == "ctf/1") {
            STATE.APPSTATE.page = "ctf/1";
            STATE.APPSTATE.progress = "PLAYING";
            STATE.CTF.current = 1;
            STATE.COOKIE.object.current_flag = 1;
            STATE.COOKIE.object.progress = "PLAYING";
            Utils.Cookie.set(STATE.COOKIE.object);
            Utils.Redirect("ctf/1");
        }
        // TODO: Add way to toggle direct URI navigation prevention
        // 
        let res = item.to.match('ctf/[0-9]{1,2}');
        let fv = false;
        let fi = 0;
        if(res) {
            if((res[0].split('/')[1] > 1) && (res[0].split('/')[1] < STATE.CTF.max_flags+1)) {
                fi = res[0].split('/')[1];
                fv = true;
            }
        }
        if(fv) {
            STATE.APPSTATE.page = item.to;
            STATE.COOKIE.object.current_flag = fi;
            Utils.Cookie.set(STATE.COOKIE.object);
            Utils.Redirect(item.to);
        }
    }

    if(DEVMODE) {
        document.getElementById('developer').innerHTML  = await DevModules.Details.render(STATE);
        let r_html = await DevModules.Routes.render(routes)
        let c_html = await DevModules.Cookie.render(STATE)
        let a_html = await DevModules.Answers.render(null)
        await DevModules.Details.after_render("routes",r_html)
        await DevModules.Details.after_render("cookie",c_html)
        await DevModules.Details.after_render("answers",a_html)
    } else {
        document.getElementById('current_user').innerHTML = STATE.API.handle;
        document.getElementById('status_points').innerHTML = String(STATE.CTF.points);
        if(STATE.API.isConnected) {
            document.getElementById('api_status').innerHTML = "(connected)";
        } else {
            document.getElementById('api_status').innerHTML = "(offline)";
        }
    }
}

const capture = async (flag) => {
    if(STATE.CTF.flags.includes(flag.cur)) {
        return false;
    }
    let r = await API.capture(flag.cur,flag.points)
    if(!r.status) {
        STATE.API.isConnected = false;
    }
    STATE.CTF.current = flag.next;
    STATE.CTF.flags.push(flag.cur)
    STATE.CTF.flag_count =  STATE.CTF.flag_count + 1;
    STATE.CTF.points = STATE.CTF.points + flag.points;
    STATE.COOKIE.object.current_flag = flag.next;
    STATE.COOKIE.object.flags_capped = STATE.CTF.flag_count;
    STATE.COOKIE.object.points = STATE.CTF.points;
    Utils.Cookie.set(STATE.COOKIE.object);
    return true;
}

// Some app features should be global, so lets attach those
const globals = {
    register: register,
    modal: Utils.Modal,
    validatePlayername: Utils.validatePlayername,
    state: STATE,
    capture: capture,
    flag: flag,
    htmlEncode: Utils.htmlEncode,
    toCodeBlock: Utils.toCodeBlock,
    answerstatus: answerStatus,
    flagImg: Utils.Flag,
    api: API
}
window.ctf = globals;

// Listen for when the page is ready and all assets have been loaded
document.addEventListener("DOMContentLoaded",function(){
    // TODO: once everything is implemented... remove this setTimeout (its only here to give the appearence that the App is "doing" something)
    setTimeout(function() {
        init().then(() => {
            console.log('%c App Ready!', 'background: #222; color: #bada55');
        });
    }, 1 * 1000);
});

const status = null || document.getElementById('status');
let DevModules = null;
if(DEVMODE) {
    console.log('%c DEVMODE: Loading modules...', 'background: #222; color: #bada55');
    // Dynamic module loading -- this is some tricky sh1t
    DevModules = { Container: null, Details: null, Routes: null, Cookie: null, Update : null, Answers: null};
    (async () => {
        const { Container: Container, Details: Details, Routes: Routes, Cookie: Cookie, Update: Update, Answers: Answers } = await import('/services/develop.js')
        status.innerHTML = await Container.render();
        await Container.after_render()
        DevModules.Details = Details;
        DevModules.Routes = Routes;
        DevModules.Cookie = Cookie;
        DevModules.Update = Update;
        DevModules.Answers = Answers;
    })()
} else {
    (async () => {
        status.innerHTML = await Bottombar.render();
    })();
}

// Here, we expose certain variables and functions to the DOM *if* we are in DEVMODE
if(DEVMODE) {
    console.log('%c DEVMODE: Attaching objects to DOM: ', 'background: #222; color: #bada55');
    console.log(STATE);
//    window.STATE = STATE;
    window.Utils = Utils;
    window.MicroModal = MicroModal;
    window.routes = routes;
    window.DevModules = DevModules;
}

