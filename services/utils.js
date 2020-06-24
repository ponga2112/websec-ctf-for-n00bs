// Main file where  application-wide JS snippets, Helpers and other Utilities live

export const Parse = {
    // --------------------------------
    //  Parse a url and break it into resource, id and verb
    // --------------------------------
    parseRequestURL : () => {

        let url = location.hash.slice(1).toLowerCase() || '/';
        let r = url.split("/")
        let request = {
            resource    : null,
            subresource : null,
            //verb        : null
        }
        request.resource    = r[1]
        request.subresource = r[2]
        //request.verb        = r[3]

        return request
    }

    // --------------------------------
    //  Simple sleep implementation
    // --------------------------------
    , sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export function guid() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export const Cookie = {
    get : () => {
        let nameEQ = "CTF" + "=";
        let cs = "";
        let ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) {
                try {
                    return JSON.parse(atob(c.substring(nameEQ.length, c.length)));
                } catch {
                    return null;
                }
            }
        }
        return null;
    },
    toString : () => {
        let nameEQ = "CTF" + "=";
        let cs = "";
        let ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) {
                try {
                    return (c.substring(nameEQ.length, c.length));
                } catch {
                    return null;
                }
            }
        }
        return null;
    },
    set : (cookie_obj) => {
        let date = new Date();
        date.setTime(date.getTime() + (300 * 24 * 60 * 60 * 1000));
        let expires = "; expires=" + date.toUTCString();
        document.cookie = "CTF" + "=" + btoa(JSON.stringify(cookie_obj)) + expires + "; path=/";
    },
    isValid : (cookie_str,state) => {
        // console.log(cookie_str);
        try {
            if((cookie_str == null) || (cookie_str.length < 1)) {
                return false;
            }
        } catch {
            return false;
        }
        try {
            let c_obj = JSON.parse(atob(cookie_str))
            if(state.API.isConnected) {
                // TODO: write this to check with the API if our cookie is Valid
                console.log("API not yet fully implemented")
                return false;
            }
            // guid: "87b48764-79ce-4059-ada0-2959bc74a5cc"
            let re_guid = new RegExp('[a-f0-9]{8}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{12}')
            let re_handle = new RegExp('[a-zA-Z0-9]{3,20}#[0-9]{4}')
            let states = ["NEW","STARTING","PLAYING"]
            if((re_guid.exec(c_obj.guid) != null) && (re_handle.exec(c_obj.handle) != null) && (states.includes(c_obj.progress))) {
                if(((c_obj.current_flag > -1) && (c_obj.current_flag <= state.CTF.max_flags)) && ((c_obj.flags_capped > -1) && (c_obj.flags_capped <= state.CTF.max_flags)) && ((c_obj.points > -1) && (c_obj.points <= state.CTF.max_points))) {
                    return true;
                }
            }
        } catch {
            return false;
        }
        return false;
    },
    generate : (state) => {
        let h = "";
        if(state.API.handle.length < 3) {
            h = "anonymous#"+String(Math.floor(Math.random() * (+9999 - +1000) + +1000));
        } else {
            h = state.API.handle;
        }
        let cookie_obj = {
            "guid": guid(),
            "handle": h,
            "progress": "NEW",
            "current_flag": 0,
            "flags_capped": 0,
            "flags": [],
            "points": 0,
            "api": state.API.isConnected,
        }
        return cookie_obj;
    }
}
export function htmlEncode(str) {
    let t = str.replace(/[\u0000-\u9999<>\&"'`]/gim, function(i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
    return t;
}

export function createHandle(name) {
    let h = sanitizePlayername(name)
    let a = ""
    if(h.length > 2) {
        a = h+"#"+String(Math.floor(Math.random() * (+9999 - +1000) + +1000));
    } else {
        a = "anonymous#"+String(Math.floor(Math.random() * (+9999 - +1000) + +1000));
    }
    return a;
}

export function validatePlayername(name) {
    if(name == null) {
        return false;
    }
    if (name.length < 3) {
        return false;
    }
    return true;
}

export function sanitizePlayername(name) {
    let s = name.substring(0,19);
    s = name.replace(/[ ]/g, '_');
    return(s.replace(/[^0-9a-zA-Z_]/g, ''))
}

export let Redirect = async(page) => {
    window.location.hash = "/"+page;
}

export function toggleMenu(el_menu,el_arrow) {
    if(document.getElementById(el_menu).getAttribute('aria-hidden') == "true") {
        document.getElementById(el_menu).setAttribute('aria-hidden','false')
        document.getElementById(el_menu).setAttribute('style','display: block')
        document.getElementById(el_arrow).innerHTML = "&#9660"
    } else {
        document.getElementById(el_menu).setAttribute('aria-hidden','true')
        document.getElementById(el_menu).setAttribute('style','display: none')
        document.getElementById(el_arrow).innerHTML = "&#9650"
    }
}

export const Modal = {
    init_1: async () => {
        let view = /*html*/`
        <div class="modal__overlay" tabindex="-1" data-micromodal-close>
          <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal--title">
            <header class="modal__header">
              <h2 class="modal__title" id="modal-title">
                TITLE
              </h2>
              <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
            </header>
            <main class="modal__content" id="modal-content">
            MAIN CONTENT
            </main>
            <footer class="modal__footer"  id="modal-footer">
              <!-- <button class="modal__btn modal__btn-primary">BUTTON</button> 
              <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">BUTTON</button> -->
            </footer>
          </div>
        </div>
        `
    return view;
    },
    set: async (header, body, footer) => {
        document.getElementById("modal-title").innerHTML = header;
        document.getElementById("modal-content").innerHTML = body;
        if(footer != null) {
            document.getElementById("modal-footer").innerHTML = footer;
        }
    },
    hideAll: async() => {
        let cl = document.getElementsByClassName("modal__close");
        for (var i = 0; i < cl.length; i++) {
            cl[i].click();
        }
    }
}

