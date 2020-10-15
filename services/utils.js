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

export const Flag = `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`

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