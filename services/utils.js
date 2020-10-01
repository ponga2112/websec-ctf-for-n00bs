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
        document.cookie = "CTF" + "=" + btoa(JSON.stringify(cookie_obj)) + expires + "; path=/; SameSite=Strict";
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
            let states = ["NEW","STARTING","PLAYING","COMPLETED"]
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
    let t = str.replace(/[\u0000-\u001f<>"'`\\\u007f-\uffff]/gim, function(i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
    return t;
}

export function toCodeBlock(str) {
    let i = 0; let line = 1;
    let d = '<div class="ctf-code-left">\n';
    let a = str.split('\n')
    for(let j=0; j<a.length; j++) {
        let space = ''
        if(j+1<10){
            space = '&nbsp;'
        }
        d = d + '<span class="ctf-code-block-'+String(i%2)+'">'+space+String(line)+'&nbsp;&nbsp;'+htmlEncode(a[j])+'</span>';
        i = i + 1; line = line + 1;
    }
    d = d + '\n</div>';
    return d;
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
    if (naughty.includes(name.replace(/[ ]/g, '_').replace(/[^0-9a-zA-Z_]/g, '').replace(/[0-9_]/g, '').toLowerCase())) {
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
    // Bug fix to reposition Scroll to top of window for Mobile UI's
    document.getElementById('main').scroll(0,0);
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

let naughty = [
    "anal",
    "anus",
    "are",
    "arrse",
    "arse",
    "ass",
    "trump",
    "maga",
    "trmp",
    "makeamericagreat",
    "keepamericagreat",
    "makeamericagreatagain",
    "assfucker",
    "asses",
    "assfucker",
    "assfukka",
    "asshole",
    "assholes",
    "asswhole",
    "ass",
    "btch",
    "bbs",
    "bch",
    "btch",
    "ballbag",
    "balls",
    "ballsack",
    "bastard",
    "beastial",
    "beastiality",
    "bellend",
    "bestial",
    "bestiality",
    "bich",
    "biatch",
    "bitch",
    "bitcher",
    "bitchers",
    "bitches",
    "bitchin",
    "bitching",
    "bloody",
    "blow",
    "job",
    "blowjob",
    "blowjobs",
    "boiolas",
    "bollock",
    "bollok",
    "boner",
    "boob",
    "boobs",
    "booobs",
    "boooobs",
    "booooobs",
    "booooooobs",
    "breasts",
    "buceta",
    "bugger",
    "bum",
    "bunny",
    "fucker",
    "butt",
    "butthole",
    "buttmunch",
    "buttplug",
    "cck",
    "ccksucker",
    "carpet",
    "muncher",
    "cawk",
    "chink",
    "cipa",
    "cl1t",
    "clit",
    "clitoris",
    "clits",
    "cnut",
    "cock",
    "cocksucker",
    "cockface",
    "cockhead",
    "cockmunch",
    "cockmuncher",
    "cocks",
    "cocksuck",
    "cocksucked",
    "cocksucker",
    "cocksucking",
    "cocksucks",
    "cocksuka",
    "cocksukka",
    "cok",
    "cokmuncher",
    "coksucka",
    "coon",
    "cox",
    "crap",
    "cum",
    "cummer",
    "cumming",
    "cums",
    "cumshot",
    "cunilingus",
    "cunillingus",
    "cunnilingus",
    "cunt",
    "cuntlick",
    "cuntlicker",
    "cuntlicking",
    "cunts",
    "cyalis",
    "cyberfuc",
    "cyberfuck",
    "cyberfucked",
    "cyberfucker",
    "cyberfuckers",
    "cyberfucking",
    "dck",
    "damn",
    "dick",
    "dickhead",
    "dildo",
    "dildos",
    "dink",
    "dinks",
    "dirsa",
    "dlck",
    "dogfucker",
    "doggin",
    "dogging",
    "donkeyribber",
    "doosh",
    "duche",
    "dyke",
    "ejaculate",
    "ejaculated",
    "ejaculates",
    "ejaculating",
    "ejaculatings",
    "ejaculation",
    "ejakulate",
    "fnny",
    "fag",
    "fagging",
    "faggitt",
    "faggot",
    "faggs",
    "fagot",
    "fagots",
    "fags",
    "fanny",
    "fannyflaps",
    "fannyfucker",
    "fanyy",
    "fatass",
    "fcuk",
    "fcuker",
    "fcuking",
    "feck",
    "fecker",
    "felching",
    "fellate",
    "fellatio",
    "fingerfuck",
    "fingerfucked",
    "fingerfucker",
    "fingerfuckers",
    "fingerfucking",
    "fingerfucks",
    "fistfuck",
    "fistfucked",
    "fistfucker",
    "fistfuckers",
    "fistfucking",
    "fistfuckings",
    "fistfucks",
    "flange",
    "fook",
    "fooker",
    "fuck",
    "fucka",
    "fucked",
    "fucker",
    "fuckers",
    "fuckhead",
    "fuckheads",
    "fuckin",
    "fucking",
    "fuckings",
    "fuckingshitmotherfucker",
    "fuckme",
    "fucks",
    "fuckwhit",
    "fuckwit",
    "fudge",
    "packer",
    "fudgepacker",
    "fuk",
    "fuker",
    "fukker",
    "fukkin",
    "fuks",
    "fukwhit",
    "fukwit",
    "fux",
    "fuxr",
    "gangbang",
    "gangbanged",
    "gangbangs",
    "gaylord",
    "gaysex",
    "goatse",
    "God",
    "goddam",
    "goddamned",
    "goddamn",
    "goddamned",
    "hardcoresex",
    "hell",
    "heshe",
    "hoar",
    "hoare",
    "hoer",
    "homo",
    "hore",
    "horniest",
    "horny",
    "hotsex",
    "jackoff",
    "jackoff",
    "jap",
    "jerkoff",
    "jism",
    "jiz",
    "jizm",
    "jizz",
    "kawk",
    "knob",
    "knobead",
    "knobed",
    "knobend",
    "knobhead",
    "knobjocky",
    "knobjokey",
    "kock",
    "kondum",
    "kondums",
    "kum",
    "kummer",
    "kumming",
    "kums",
    "kunilingus",
    "labia",
    "lmfao",
    "lust",
    "lusting",
    "mterbate",
    "materb",
    "materbate",
    "masochist",
    "master-bate",
    "masterb8",
    "masterbat*",
    "masterbat3",
    "masterbate",
    "masterbation",
    "masterbations",
    "masturbate",
    "mofo",
    "mothafuck",
    "mothafucka",
    "mothafuckas",
    "mothafuckaz",
    "mothafucked",
    "mothafucker",
    "mothafuckers",
    "mothafuckin",
    "mothafucking",
    "mothafuckings",
    "mothafucks",
    "mother",
    "fucker",
    "motherfuck",
    "trumppence",
    "motherfucked",
    "motherfucker",
    "motherfuckers",
    "motherfuckin",
    "motherfucking",
    "motherfuckings",
    "motherfuckka",
    "motherfucks",
    "muff",
    "mutha",
    "muthafecker",
    "muthafuckker",
    "muther",
    "mutherfucker",
    "ngga",
    "ngger",
    "nazi",
    "naz",
    "niggr",
    "niggh",
    "nigga",
    "niggah",
    "niggas",
    "niggaz",
    "nigger",
    "niggers",
    "nob",
    "nob",
    "jokey",
    "nobhead",
    "nobjocky",
    "nobjokey",
    "numbnuts",
    "nutsack",
    "orgasim",
    "orgasims",
    "orgasm",
    "orgasms",
    "prn",
    "pawn",
    "pecker",
    "penis",
    "penisfucker",
    "phonesex",
    "phuck",
    "phuk",
    "phuked",
    "phuking",
    "phukked",
    "phukking",
    "phuks",
    "phuq",
    "pigfucker",
    "pimpis",
    "piss",
    "pissed",
    "pisser",
    "pissers",
    "pisses",
    "pissflaps",
    "pissin",
    "pissing",
    "pissoff",
    "poop",
    "porn",
    "porno",
    "pornography",
    "pornos",
    "prick",
    "pricks",
    "pron",
    "pube",
    "pusse",
    "pussi",
    "pussies",
    "pussy",
    "pussys",
    "rectum",
    "retard",
    "rimjaw",
    "rimming",
    "hit",
    "sob",
    "sadist",
    "schlong",
    "screwing",
    "scroat",
    "scrote",
    "scrotum",
    "semen",
    "sex",
    "sx",
    "sh1t",
    "shag",
    "shagger",
    "shaggin",
    "shagging",
    "shemale",
    "shitt",
    "shit",
    "shitdick",
    "shite",
    "shited",
    "shitey",
    "shitfuck",
    "shitfull",
    "shithead",
    "shiting",
    "shitings",
    "shits",
    "shitted",
    "shitter",
    "shitters",
    "shitting",
    "shittings",
    "shitty",
    "skank",
    "slut",
    "sluts",
    "smegma",
    "smut",
    "snatch",
    "sonofabitch",
    "spac",
    "spunk",
    "ttties",
    "teets",
    "teez",
    "testical",
    "testicle",
    "tit",
    "titfuck",
    "tits",
    "titt",
    "tittie5",
    "tittiefucker",
    "titties",
    "tittyfuck",
    "tittywank",
    "titwank",
    "tosser",
    "turd",
    "twt",
    "twat",
    "twathead",
    "twatty",
    "twunt",
    "twunter",
    "vgra",
    "v1gra",
    "vagina",
    "viagra",
    "vulva",
    "wse",
    "wang",
    "wank",
    "wanker",
    "wanky",
    "whoar",
    "whore",
    "willies",
    "willy",
    "xrated",
    "xxx"
]