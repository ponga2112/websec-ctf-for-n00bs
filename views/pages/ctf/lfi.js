let lock_icon = `
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lock-fill" fill="green" xmlns="http://www.w3.org/2000/svg" id="lock-icon">
    <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
    <path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
  </svg>
    `;

let CTF_9 = {
    points: 100,
    answered: false,
    
    answer : async () => {
        let a = null
        try {
            a = document.getElementById('ctf9-flag').querySelectorAll('input[type="radio"]:checked')[0].value
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
        switch(a){
            case "3":
                CTF_9.answered = true;
                if(CTF_9.points < 1) {
                    CTF_9.points = 0;
                }
                h = h+flag_good+`Correct! <section>Answer Summary</section><section>
                &nbsp;
                </section><section class="ctf-html-inner-text-center">Points Earned: `+String(CTF_9.points)+`</section>`
                // nav outta here
                b = `<button class="ctf-button-red" id="nav-ctf9-next"><b>Next Challenge</b></button>`
                // this is a flag
                let f = new ctf.flag(CTF_9.points,9,10)
                ctf.capture(f);
                break;
            default:
                CTF_9.points = CTF_9.points-20;
                h = h+flag_bad+`Nope, that's not quite right`
        }
        h=h+`</div>`
        ctf.modal.set("Results",h,b);
    },
    urlWindow : async () => {
        let v = document.getElementById('url').value
        let ctf9_url = '1'
        let html = ``
        switch(v) {
            case "1":
                ctf9_url = '1';
                html = `
                <h1>Welcome to ACME ASCII Art!</h1>
                </br>Click below to view our avialable artwork:</br></br>
                <input type="submit" id="ctf9_nav_url2" name="ctf9_nav_url2" value="View"/>&nbsp;sw33t_g04t</br></br>
                <input type="submit" id="ctf9_nav_url3" name="ctf9_nav_url3" value="View"/>&nbsp;aardv4rk</br></br>
                <input type="submit" id="ctf9_nav_url4" name="ctf9_nav_url4" value="View"/>&nbsp;el3ph4nt</br></br>
                <input type="submit" id="ctf9_nav_url5" name="ctf9_nav_url5" value="View"/>&nbsp;d0lph1n</br></br>
                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            case "2":
                ctf9_url = '2';
                html = `
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___.<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;\\\\<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((&nbsp;&nbsp;&nbsp;''<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\\\__,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/6&nbsp;(%)\\,<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__/:";,;\\--____----_<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;;&nbsp;:';,:';\`;,';,;';\`,\`_<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;:,;;';';,;':,';';,-Y\\<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;,;,;';';,;':;';';&nbsp;Z/<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;;,';';,;';,;';;'<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;|';/~~~~~\\';;'<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;K&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;|<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\_\\&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;|<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\Z&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;|<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L_|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LL_|<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LW/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LLW/<br>
                    <input type="submit" id="ctf9_nav_url1" name="ctf9_nav_url1" value="Go back"/>
                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            case "3":
                ctf9_url = '3';
                html = `
                &nbsp;&nbsp;&nbsp;&nbsp;,__&nbsp;&nbsp;&nbsp;&nbsp;_,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'.\`\\&nbsp;/\`|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_.-"\`\`\`&nbsp;&nbsp;&nbsp;\`'.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;&nbsp;|&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;.'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\`}&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_\\|\\/_.-'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
                &nbsp;&nbsp;&nbsp;_.-"a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
                .-\`&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;/._&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}\\<br>
                '--"\`&nbsp;&nbsp;\`""\`&nbsp;&nbsp;&nbsp;\`\\&nbsp;&nbsp;&nbsp;;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;\\<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;}&nbsp;__&nbsp;_\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}\\&nbsp;&nbsp;\\<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;/;\`&nbsp;&nbsp;&nbsp;/&nbsp;:.&nbsp;&nbsp;&nbsp;}\`&nbsp;&nbsp;\\&nbsp;&nbsp;\\<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;|&nbsp;.-'&nbsp;/&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'.&nbsp;'._<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.'__/-'&nbsp;\`\`\`\`.-'.'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'-._'-._<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\`\`\`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\`\`\`\`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\`"""\`<br>
                <input type="submit" id="ctf9_nav_url1" name="ctf9_nav_url1" value="Go back"/>
                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            case "4":
                ctf9_url = '4';
                html = `
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.---'-&nbsp;&nbsp;&nbsp;&nbsp;\\</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.-----------/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;__</br>
                &&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;/&nbsp;&nbsp;/&nbsp;.'</br>
                '._/(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'-'&nbsp;&nbsp;(.&nbsp;&nbsp;&nbsp;(_.'&nbsp;/</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;./</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|/&nbsp;'._.'</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;&nbsp;&nbsp;@).____\\|&nbsp;&nbsp;@&nbsp;|</br>
                &nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;|</br>
                &nbsp;&nbsp;\\|,&nbsp;'_:::\\&nbsp;&nbsp;.&nbsp;..&nbsp;&nbsp;'_:::\\&nbsp;..\\).</br></br>
                <input type="submit" id="ctf9_nav_url1" name="ctf9_nav_url1" value="Go back"/>
                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            case "5":
                ctf9_url = '5';
                html = `
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,-.</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;(&nbsp;&nbsp;'</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;_.--'!&nbsp;&nbsp;&nbsp;'--._</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;''.</br>
                '&nbsp;&nbsp;&nbsp;&nbsp;|!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\</br>
                &nbsp;&nbsp;&nbsp;_.'&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;!&nbsp;\\</br>
                &nbsp;&nbsp;(_.-^,&nbsp;__..-'&nbsp;&nbsp;''''--.&nbsp;&nbsp;&nbsp;)</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/,'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'&nbsp;&nbsp;&nbsp;&nbsp;_.'&nbsp;/</br>
                &nbsp;&nbsp;&nbsp;'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;.-''&nbsp;&nbsp;&nbsp;&nbsp;|</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(..--^.&nbsp;&nbsp;'&nbsp;</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;/</br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'</br>
                <input type="submit" id="ctf9_nav_url1" name="ctf9_nav_url1" value="Go back"/>
                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            default:
                ctf9_url = '6';
                html = `
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
        CTF_9.ctf9_url = ctf9_url;
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
  <option value="1">https://acme-ascii-art.com/resources?name=dashboard</option>
  <option value="2">https://acme-ascii-art.com/resources?name=sw33t_g04t</option>
  <option value="3">https://acme-ascii-art.com/resources?name=aardv4rk</option>
  <option value="4">https://acme-ascii-art.com/resources?name=el3ph4nt</option>
  <option value="5">https://acme-ascii-art.com/resources?name=d0lph1n</option>
  <option value="6">https://acme-ascii-art.com/resources?name=../../etc/passwd%00</option>
</select>

    `,
    ctf9_url : '',
    update_ctf_events : async () => {
        switch(CTF_9.ctf9_url) {
            case "1":
                document.getElementById('ctf9_nav_url2').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 1;
                    CTF_9.urlWindow()
                    .then(function() {
                        CTF_9.update_ctf_events();
                    })
                })
                document.getElementById('ctf9_nav_url3').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 2;
                    CTF_9.urlWindow()
                    .then(function() {
                        CTF_9.update_ctf_events();
                    })
                })
                document.getElementById('ctf9_nav_url4').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 3;
                    CTF_9.urlWindow()
                    .then(function() {
                        CTF_9.update_ctf_events();
                    })
                })
                document.getElementById('ctf9_nav_url5').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 4;
                    CTF_9.urlWindow()
                    .then(function() {
                        CTF_9.update_ctf_events();
                    })
                })
                break;
            case "2":
                document.getElementById('ctf9_nav_url1').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 0;
                    CTF_9.urlWindow()
                    .then(function() {
                        CTF_9.update_ctf_events();
                    })
                })
                break;
            case "3":
                document.getElementById('ctf9_nav_url1').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 0;
                    CTF_9.urlWindow()
                    .then(function() {
                        CTF_9.update_ctf_events();
                    })
                })
                break;
            case "4":
                document.getElementById('ctf9_nav_url1').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 0;
                    CTF_9.urlWindow()
                    .then(function() {
                        CTF_9.update_ctf_events();
                    })
                })
                break;
            case "5":
                document.getElementById('ctf9_nav_url1').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 0;
                    CTF_9.urlWindow()
                    .then(function() {
                        CTF_9.update_ctf_events();
                    })
                })
                break;
            default:
                
        }
    },
    render : async () => {
         let view =  /*html*/`
        <section class="section-lite">
        <h2>Local File Inclusion</h2><img src="/assets/images/flag_trasnsparent_378x487.png" width="100">
        </section>
        <div><section>
        Local File Inclusion (LFI) is an attack type where an attacker may be able to include arbitrary files located on the file system by tampering with a web request. Examples of local files may be sensitive data files like password files, registry data, etc. By design, the web application should only serve files which the developers choose. An LFI vulnerability makes it such that any files on the local file system may be accessed by the attacker.
        </section>&nbsp;
        <section>
        More Info:
        <a target="_blank" href="https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/11.1-Testing_for_Local_File_Inclusion">OWASP -- Local File Inclusion</a>.
        </section><section>
        <section>&nbsp;</section></div>
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left">
        <section><div class="ctf-urlbar">`+CTF_9.urlbar+`</div></section>
        <section>
        <div class="ctf-urlwindow" id="ctf-urlwindow">Loading...</div></section>

        </div></div>
        <section><h3>The above web application has a Local File Inclusion vulnerabilty due to the following code:</h3></br>
        &#x3c;&#x3f;&#x70;&#x68;&#x70;&#x20;&#x69;&#x6e;&#x63;&#x6c;&#x75;&#x64;&#x65;&#x28;&#x24;&#x5f;&#x47;&#x45;&#x54;&#x5b;&#x27;&#x6e;&#x61;&#x6d;&#x65;&#x27;&#x5d;&#x2e;&#x22;&#x2e;&#x70;&#x68;&#x70;&#x22;&#x29;&#x3b;&#x20;&#x3f;&#x3e;
        </br></br>
        <h3><u>What is required to exploit this vulnerable code?</u></h3></section>
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left">
        
        <form id="ctf9-flag">
        <div class="ctf-code-left">
        A) Replace the 'name=' URL parameter value to desired file name located on webapp host<br>
        B) Make sure and add appropriate file path to desired file name, including backing out of web root directory<br>
        C) Append a Null Byte to bypass the ".php" file extension<br>
        D) Ensure web browser is set to "private browsing"<br><br>
        <span class="ctf-block"><input type="radio" name="answer" value="1"><label for="submit">&nbsp;Both A and C only</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="2"><label for="submit">&nbsp;Both A and D only</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="3"><label for="submit">&nbsp;A, B, and C only</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="4"><label for="submit">&nbsp;All steps must be performed</label></span>
        
        <section>&nbsp;</section>
        <div class="ctf-html-inner-text-center">
        <span class="ctf-block"><input type="submit" id="ctf9_flag_submit" name="ctf9_flag_submit" data-micromodal-trigger="modal" class="ctf-button-red" value="Try it!">
        </span></div>
        </form>
        </div></div>
        `
        return view
    },
    after_render: async (cb) => {
        CTF_9.ctf9_url = "1"
        CTF_9.urlWindow().then(function() {
            CTF_9.update_ctf_events();
        })
        document.getElementById('url').addEventListener('change', function(){
            CTF_9.urlWindow()
            .then(function() {
                CTF_9.update_ctf_events();
            })
        });
        document.getElementById('ctf9-flag').onsubmit = function(e){e.preventDefault(); return false;}
        document.getElementById('ctf9-flag').addEventListener('submit', function(){
            CTF_9.answer()
            .then(function(){
                if(CTF_9.answered) {
                    document.getElementById('nav-ctf9-next').addEventListener('click', function(){
                        ctf.modal.hideAll();
                        cb({action:"nav",to:"ctf/10"},null);
                    })
                }
            })
        });
    }
        
}

export default CTF_9;