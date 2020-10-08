let lock_icon = `
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lock-fill" fill="green" xmlns="http://www.w3.org/2000/svg" id="lock-icon">
    <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
    <path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
  </svg>
    `;

let CTF_10 = {
    points: 100,
    answered: false,
    
    answer : async () => {
        let a = null
        try {
            a = document.getElementById('ctf10-flag').querySelectorAll('input[type="radio"]:checked')[0].value
        } catch {
            a = "fail"
        }
        let flag_good = /*html*/ `
            <svg class="ctf-icon-success ctf-modal-middle" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
            <path fill-rule="evenodd" d="M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 0 0 .593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 0 1 3.5 9V3a.5.5 0 0 1 .223-.416l.04-.026z"/>
            </svg>
        `
        let flag_bad = /*html*/ `
            <svg class="ctf-icon-error ctf-modal-middle" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
            <path fill-rule="evenodd" d="M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 0 0 .593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 0 1 3.5 9V3a.5.5 0 0 1 .223-.416l.04-.026z"/>
            </svg>
        `
        let h = /*html*/ `
        <div class="ctf-block ctf-modal-middle">
        `
        let b = ``

        if(ctf.answerstatus.ten == 'true') {
            h = h+`<section>This question has already been answered correctly.</section>`
            b = `<button class="ctf-button-red" id="nav-ctf10-next"><b>View Results</b></button>`
        } else {
            switch(a){
                case "1":
                    CTF_10.answered = true;
                    if(CTF_10.points < 1) {
                        CTF_10.points = 0;
                    }
                    ctf.answerstatus.ten = 'true'
                    h = h+flag_good+`Correct! <section>Passing parameters from a web request <i>directly</i> to an operating system 
                    without first validating and sanitizing the input is very dangerous. RCE vulnerabilities like this one can allow for complete 
                    system takeover by the attacker.</section><section>
                    &nbsp;
                    </section><section class="ctf-html-inner-text-center">Points Earned: `+String(CTF_10.points)+`</section>`
                    // nav outta here
                    b = `<button class="ctf-button-red" id="nav-ctf10-next"><b>View Results</b></button>`
                    // this is a flag
                    let f = new ctf.flag(CTF_10.points,10,0)
                    ctf.capture(f);
                    break;
                default:
                    CTF_10.points = CTF_10.points-20;
                    h = h+flag_bad+`Nope, that's not quite right`
            }
        }
        h=h+`</div>`
        ctf.modal.set("Results",h,b);
    },
    urlWindow : async () => {
        let v = document.getElementById('url').value
        let ctf10_url = '1'
        let html = ``
        switch(v) {
            case "1":
                ctf10_url = '1';
                html = `
                <h1>Ping for FREE</h1><br>  
                Enter an IP address below:</br>
                <input type="text" value="203.0.113.100" size="30" disabled />&nbsp;
                <input type="submit" id="ctf10_nav_ping" name="ctf10_nav_ping" class="faux-browser-button" value="Submit"/>



                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            case "2":
                ctf10_url = '2';
                html = `
                <h1>Ping for FREE</h1><br>  
                Enter an IP address below:</br>
                <input type="text" value="198.51.100.63" size="30" disabled />&nbsp;
                <input type="submit" id="ctf10_nav_ping" name="ctf10_nav_ping" class="faux-browser-button" value="Submit"/>
                <br><br>

                ping&nbsp;203.0.113.100<br>
                <br>
                Pinging&nbsp;203.0.113.100&nbsp;with&nbsp;32&nbsp;bytes&nbsp;of&nbsp;data:<br>
                Reply&nbsp;from&nbsp;203.0.113.100:&nbsp;bytes=32&nbsp;time=13ms&nbsp;TTL=117<br>
                Reply&nbsp;from&nbsp;203.0.113.100:&nbsp;bytes=32&nbsp;time=15ms&nbsp;TTL=117<br>
                Reply&nbsp;from&nbsp;203.0.113.100:&nbsp;bytes=32&nbsp;time=13ms&nbsp;TTL=117<br>
                Reply&nbsp;from&nbsp;203.0.113.100:&nbsp;bytes=32&nbsp;time=15ms&nbsp;TTL=117<br>
                <br>
                Ping&nbsp;statistics&nbsp;for&nbsp;203.0.113.100:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Packets:&nbsp;Sent&nbsp;=&nbsp;4,&nbsp;Received&nbsp;=&nbsp;4,&nbsp;Lost&nbsp;=&nbsp;0&nbsp;(0%&nbsp;loss),<br>
                Approximate&nbsp;round&nbsp;trip&nbsp;times&nbsp;in&nbsp;milli-seconds:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Minimum&nbsp;=&nbsp;13ms,&nbsp;Maximum&nbsp;=&nbsp;15ms,&nbsp;Average&nbsp;=&nbsp;14ms<br>
                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            case "3":
                ctf10_url = '3';
                html = `
                <h1>Ping for FREE</h1><br>  
                Enter an IP address below:</br>
                <input type="text" value="192.0.2.199;echo whoami" size="30" disabled />&nbsp;
                <input type="submit" id="ctf10_nav_ping" name="ctf10_nav_ping" class="faux-browser-button" value="Submit"/>
                <br><br>

                ping&nbsp;198.51.100.63<br>
                <br>
                Pinging&nbsp;198.51.100.63&nbsp;with&nbsp;32&nbsp;bytes&nbsp;of&nbsp;data:<br>
                Reply&nbsp;from&nbsp;198.51.100.63:&nbsp;bytes=32&nbsp;time=53ms&nbsp;TTL=117<br>
                Reply&nbsp;from&nbsp;198.51.100.63:&nbsp;bytes=32&nbsp;time=55ms&nbsp;TTL=117<br>
                Reply&nbsp;from&nbsp;198.51.100.63:&nbsp;bytes=32&nbsp;time=53ms&nbsp;TTL=117<br>
                Reply&nbsp;from&nbsp;198.51.100.63:&nbsp;bytes=32&nbsp;time=55ms&nbsp;TTL=117<br>
                <br>
                Ping&nbsp;statistics&nbsp;for&nbsp;198.51.100.63:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Packets:&nbsp;Sent&nbsp;=&nbsp;4,&nbsp;Received&nbsp;=&nbsp;4,&nbsp;Lost&nbsp;=&nbsp;0&nbsp;(0%&nbsp;loss),<br>
                Approximate&nbsp;round&nbsp;trip&nbsp;times&nbsp;in&nbsp;milli-seconds:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Minimum&nbsp;=&nbsp;53ms,&nbsp;Maximum&nbsp;=&nbsp;55ms,&nbsp;Average&nbsp;=&nbsp;54ms<br>
                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            case "4":
                ctf10_url = '4';
                html = `
                <h1>Ping for FREE</h1><br>  
                Enter an IP address below:</br>
                <input type="text" value="192.0.2.199;cat etc\\passwd" size="30" disabled />&nbsp;
                <input type="submit" id="ctf10_nav_ping" name="ctf10_nav_ping" class="faux-browser-button" value="Submit"/>
                <br><br>

                ping&nbsp;192.0.2.199<br>
                <br>
                Pinging&nbsp;192.0.2.199&nbsp;with&nbsp;32&nbsp;bytes&nbsp;of&nbsp;data:<br>
                Reply&nbsp;from&nbsp;192.0.2.199:&nbsp;bytes=32&nbsp;time=28ms&nbsp;TTL=117<br>
                Reply&nbsp;from&nbsp;192.0.2.199:&nbsp;bytes=32&nbsp;time=29ms&nbsp;TTL=117<br>
                Reply&nbsp;from&nbsp;192.0.2.199:&nbsp;bytes=32&nbsp;time=29ms&nbsp;TTL=117<br>
                Reply&nbsp;from&nbsp;192.0.2.199:&nbsp;bytes=32&nbsp;time=28ms&nbsp;TTL=117<br>
                <br>
                Ping&nbsp;statistics&nbsp;for&nbsp;192.0.2.199:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Packets:&nbsp;Sent&nbsp;=&nbsp;4,&nbsp;Received&nbsp;=&nbsp;4,&nbsp;Lost&nbsp;=&nbsp;0&nbsp;(0%&nbsp;loss),<br>
                Approximate&nbsp;round&nbsp;trip&nbsp;times&nbsp;in&nbsp;milli-seconds:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Minimum&nbsp;=&nbsp;28ms,&nbsp;Maximum&nbsp;=&nbsp;29ms,&nbsp;Average&nbsp;=&nbsp;29ms<br>
                <br>
                <br>
                SERVER-OD845R45\\SYSTEM
                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            default:
                ctf10_url = '5';
                html = `
                <h1>Ping for FREE</h1><br>  
                Enter an IP address below:</br>
                <form id="ping-form">
                <select name="ping" id="ping" disabled>
                <option value="1" selected></option>
                <option value="2">203.0.113.100</option>
                <option value="3">198.51.100.63</option>
                <option value="4">192.0.2.199;echo whoami</option>
                <option value="5">192.0.2.199;cat /etc/passwd</option>
                </select>&nbsp;
                <input type="submit" id="ctf10_nav_ping" name="ctf10_nav_ping" class="faux-browser-button" value="Submit" disabled/>
                </form><br><br>

                Usage: ping [-aAbBdDfhLnOqrRUvV] [-c count] [-i interval] [-I interface]<br>
                    [-m mark] [-M pmtudisc_option] [-l preload] [-p pattern] [-Q tos]<br>
                    [-s packetsize] [-S sndbuf] [-t ttl] [-T timestamp_option]<br>
                    [-w deadline] [-W timeout] [hop1 ...] destination<br>
                <br>
                <br>
                root:x:0:0:root:/root:/bin/bash</br>
                bin:x:1:1:bin:/bin:/sbin/nologin</br>
                daemon:x:2:2:daemon:/sbin:/sbin/nologin</br>
                adm:x:3:4:adm:/var/adm:/sbin/nologin</br>
                lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin</br>
                sync:x:5:0:sync:/sbin:/bin/sync</br>
                shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown</br>
                halt:x:7:0:halt:/sbin:/sbin/halt</br>
                mail:x:8:12:mail:/var/spool/mail:/sbin/nologin</br>
                news:x:9:13:news:/etc/news:</br>
                uucp:x:10:14:uucp:/var/spool/uucp:/sbin/nologin</br>
                operator:x:11:0:operator:/root:/sbin/nologin</br>
                games:x:12:100:games:/usr/games:/sbin/nologin</br>
                gopher:x:13:30:gopher:/var/gopher:/sbin/nologin</br>
                ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin</br>
                nobody:x:99:99:Nobody:/:/sbin/nologin</br>
                nscd:x:28:28:NSCD Daemon:/:/sbin/nologin</br>
                vcsa:x:69:69:virtual console memory owner:/dev:/sbin/nologin</br>
                ntp:x:38:38::/etc/ntp:/sbin/nologin</br>
                pcap:x:77:77::/var/arpwatch:/sbin/nologin</br>
                dbus:x:81:81:System message bus:/:/sbin/nologin</br>
                avahi:x:70:70:Avahi daemon:/:/sbin/nologin</br>
                rpc:x:32:32:Portmapper RPC user:/:/sbin/nologin</br>
                mailnull:x:47:47::/var/spool/mqueue:/sbin/nologin</br>
                smmsp:x:51:51::/var/spool/mqueue:/sbin/nologin</br>
                apache:x:48:48:Apache:/var/www:/sbin/nologin</br>
                sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin</br>
                dovecot:x:97:97:dovecot:/usr/libexec/dovecot:/sbin/nologin</br>
                oprofile:x:16:16:Special user account to be used by OProfile:/home/oprofile:/sbin/nologin</br>
                rpcuser:x:29:29:RPC Service User:/var/lib/nfs:/sbin/nologin</br>
                nfsnobody:x:65534:65534:Anonymous NFS User:/var/lib/nfs:/sbin/nologin</br>
                xfs:x:43:43:X Font Server:/etc/X11/fs:/sbin/nologin</br>
                haldaemon:x:68:68:HAL daemon:/:/sbin/nologin</br>
                avahi-autoipd:x:100:156:avahi-autoipd:/var/lib/avahi-autoipd:/sbin/nologin</br>
                gdm:x:42:42::/var/gdm:/sbin/nologin</br>
                sabayon:x:86:86:Sabayon user:/home/sabayon:/sbin/nologin</br>
                ` 
                document.getElementById('lock-icon').classList.remove('hidden')
        }
        CTF_10.ctf10_url = ctf10_url;
        document.getElementById('ctf-urlwindow').innerHTML = html;
    },
    urlbar: /*html*/`
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
    <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
  </svg>
  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-clockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"/>
  <path fill-rule="evenodd" d="M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
  <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
</svg>
<label for="url">&nbsp;&nbsp;</label>
`+lock_icon+`
<select name="url" id="url">
  <option value="1">https://ping.me/</option>
  <option value="2">https://ping.me/?ip=203.0.113.100</option>
  <option value="3">https://ping.me/?ip=198.51.100.63</option>
  <option value="4">https://ping.me/?ip=38.1.77.2%3bwhoami</option>
  <option value="5">https://ping.me/?ip=%3bcat%20%2fetc...</option>
</select>

    `,
    ctf10_url : '',
    update_ctf_events : async () => {
        switch(CTF_10.ctf10_url) {
            case "1":
                document.getElementById('ctf10_nav_ping').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 1;
                    CTF_10.urlWindow()
                    .then(function() {
                        CTF_10.update_ctf_events();
                    })
                })
                break;
            case "2":
                document.getElementById('ctf10_nav_ping').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 2;
                    CTF_10.urlWindow()
                    .then(function() {
                        CTF_10.update_ctf_events();
                    })
                })
                break;
            case "3":
                document.getElementById('ctf10_nav_ping').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 3;
                    CTF_10.urlWindow()
                    .then(function() {
                        CTF_10.update_ctf_events();
                    })
                })
                break;
            case "4":
                document.getElementById('ctf10_nav_ping').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 4;
                    CTF_10.urlWindow()
                    .then(function() {
                        CTF_10.update_ctf_events();
                    })
                })
                break;
            case "5":
                document.getElementById('ctf10_nav_ping').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 0;
                    CTF_10.urlWindow()
                    .then(function() {
                        CTF_10.update_ctf_events();
                    })
                })
                break;  
            default:
                document.getElementById('ctf10_cookie_accept').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 3;
                    CTF_10.urlWindow()
                    .then(function() {
                        CTF_10.update_ctf_events();
                    })
                })
        }
    },
    render : async () => {
        let view =  /*html*/`
        <section class="section-lite">
        <h2>Remote Code Execution</h2><img src="/assets/images/flag_trasnsparent_378x487.png" width="100">
        </section>
        <div><section>
        Remote Code Execution (RCE), also generally called Code Injection or Remote Command Injection, is an attack type which consists of injecting data that is then interpreted/executed by the application as code. These types of attacks are usually made possible due to a lack of proper input validation and output encoding, both of which are components of safe data handling.
        </section>&nbsp;<section>
        More Info:
        <a target="_blank" href="https://owasp.org/www-community/attacks/Code_Injection">OWASP -- Code Injection</a>.
        </section><section>
        <section>&nbsp;</section></div>
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left ctf-url-scroll">
        <section><div class="ctf-urlbar">`+CTF_10.urlbar+`</div></section>
        <section>
        <div class="ctf-urlwindow ctf-url-scroll" id="ctf-urlwindow">Loading...</div></section>

        </div></div>
        <section><h3>The above web application has a Remote Code Execution vulnerabilty - <u>What about the functionality available here makes the site particularly vulnerable?</u></h3></section>
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left">
        
        <form id="ctf10-flag">
        <div class="ctf-code-left">
        A) The application is running a system command with user supplied input<br>
        B) The application is running with the SYSTEM user<br>
        C) There is no validation of special characters<br>
        D) System console output is being supplied to the user in a response<br><br>
        <span class="ctf-block"><input type="radio" name="answer" value="1"><label for="submit">&nbsp;All of the above</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="2"><label for="submit">&nbsp;A and B only</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="3"><label for="submit">&nbsp;A, B, and C only</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="4"><label for="submit">&nbsp;A, B, and D only</label></span>

        <section>&nbsp;</section>
        <div class="ctf-html-inner-text-center">
        <span class="ctf-block"><input type="submit" id="ctf10_flag_submit" name="ctf10_flag_submit" data-micromodal-trigger="modal" class="ctf-button-red" value="Try it!">
        </span></div>
        </form>
        </div></div>
        `
        return view
    },
    after_render: async (cb) => {
        CTF_10.ctf10_url = "1"
        CTF_10.urlWindow().then(function() {
            CTF_10.update_ctf_events();
        })
        document.getElementById('url').addEventListener('change', function(){
            CTF_10.urlWindow()
            .then(function() {
                CTF_10.update_ctf_events();
            })
        });
        document.getElementById('ctf10-flag').onsubmit = function(e){e.preventDefault(); return false;}
        document.getElementById('ctf10-flag').addEventListener('submit', function(){
            CTF_10.answer()
            .then(function(){
                if(CTF_10.answered) {
                    document.getElementById('nav-ctf10-next').addEventListener('click', function(){
                        ctf.modal.hideAll();
                        cb({action:"nav",to:"leaderboard"},null);
                    })
                }
            })
        });
    }
        
}

export default CTF_10;