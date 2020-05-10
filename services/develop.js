export let Container = {
    render: async () => {
        let view =  /*html*/`
        <div id="dropmenu-arrow"><h6><i class="dropmenu-link" id="d-drop-arrow">&#9660;</i></h6></div>
        <div id="dev-menu">
        <div><h4>Developer Console</h4></div><h5><span id="developer" class="developer"> <span id="loading-item"></span><span class="loading one">.</span><span class="loading two">.</span><span class="loading three">.</span></span></h5>
        </div>
        `
        return view
    },
    after_render: async () => { 
        document.getElementById('dropmenu-arrow').addEventListener('click', function(){Utils.toggleMenu("dev-menu","d-drop-arrow")});
    }
}

export let Details = {
    render: async (State_obj) => {
        let view =  /*html*/`
            <h5>
            <div>
            <span>User:</span> <span id="d_user">`+State_obj.API.handle+`</span>
            </div>
            <div>
            <span>API Connected:</span> <span id="d_api_state">`+String(State_obj.API.isConnected)+`</span>
            </div>
            <div>
            <span>Cookie:</span> <span>[`+`<a data-micromodal-trigger="modal" id="d_cookie_link">CTF</a>`+`]</span>
            </div>
            <div>
            <span>App State:</span> <span id="d_player_state">`+State_obj.APPSTATE.progress+`</span>
            </div>
            <div>
            <span>Current Challenge:</span> <span id="d_cur_cookie">`+String(State_obj.CTF.current)+`</span>
            </div>
            <div>
            <span>Flags Captured:</span> <span id="d_flags">`+String(State_obj.CTF.flags)+`</span>
            </div>
            <div>
            <span>Points Earned:</span> <span id="d_points">`+String(State_obj.CTF.points)+`</span>
            </div>
            <div>
            <span>Routes:</span> <span>`+`[<a data-micromodal-trigger="modal" id="d_routes_link">table</a>]`+`</span>
            </div>
            </h5>
        `
        return view;
    },
    after_render: async (target,body) => {
        if(target == "routes") {
            document.getElementById('d_routes_link').addEventListener('click', function(){Utils.Modal.set("Routes",body,"")});
        }
        if(target == "cookie") { 
            document.getElementById('d_cookie_link').addEventListener('click', function(){
                Utils.Modal.set("Cookie",body,'<button id="dev-reset-session" class="ctf-button-red">Reset Session</button></h5>').then(function(){
                    document.getElementById('dev-reset-session').addEventListener('click', function(){
                        document.cookie="CTF="; window.location.href = "/";
                    });
                })
            });
        }
    }
}

export let Routes = {
    render: async (routes) => {
        let r = ``;
        for (const [k, v] of Object.entries(routes)) {
            if(v != null) {
                r = r + `<li><a href="/#` + `${k}` + `" data-micromodal-close>` + `${k}` + `</a></li>
            `;
            }
        }
        let view = /*html*/`
        <ul><h5>
            `+r+`
        </h5></ul>
        `
    return view;
    },
    after_render: async () => {}
}

export let Cookie = {
    render: async (State_obj) => {
        let cs = ""
        try {
            cs = JSON.stringify(State_obj.COOKIE.object, null, 2);
        } catch {
            cs = "null"
        }
        let view = /*html*/`
        <h5><div>CTF = `+cs+`</div>
        `
    return view;
    },
    after_render: async () => {}
}

//export default Developerbar;