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
                Test 1
                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            case "2":
                ctf9_url = '2';
                html = `
                Test 2
                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            case "3":
                ctf9_url = '3';
                html = `
                Test 3
                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            default:
                ctf9_url = '4';
                html = `
                Test 4
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
  <option value="1">https://lfi-example-website.com/1</option>
  <option value="2">https://lfi-example-website.com/2</option>
  <option value="3">https://lfi-example-website.com/3</option>
  <option value="4">https://lfi-example-website.com/4</option>

</select>

    `,
    ctf9_url : '',
    update_ctf_events : async () => {
        switch(CTF_9.ctf9_url) {
            case "1":
                document.getElementById('ctf9_asset_nav').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 1;
                    CTF_9.urlWindow()
                    .then(function() {
                        CTF_9.update_ctf_events();
                    })
                })
                break;
            case "2":
                //console.log("DEBUG: why are we getting here?? :: "+CTF_9.ctf9_url)
                document.getElementById('ctf9_nav_login').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 2;
                    CTF_9.urlWindow()
                    .then(function() {
                        CTF_9.update_ctf_events();
                    })
                })
                break;
            case "3":
                return null
            default:
                document.getElementById('ctf9_cookie_accept').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 3;
                    CTF_9.urlWindow()
                    .then(function() {
                        CTF_9.update_ctf_events();
                    })
                })
        }
    },
    render : async () => {
        // TODO: Need to fix the UI mobile view. Text in mobile view is paginated weirdly
        // TODO: make HTML code by line numbers! Then, make selection what line is vuln at!
        //let code_formated = ctf.toCodeBlock(code_raw)
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
        <section><h3>The above web application has a Local File Inclusion vulnerabilty - <u>Which page is vulnerable?</u></h3></section>
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left">
        
        <form id="ctf9-flag">
        <div class="ctf-code-left">
        <span class="ctf-block"><input type="radio" name="answer" value="1"><label for="submit">&nbsp;Answer 1</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="2"><label for="submit">&nbsp;Answer 2</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="3"><label for="submit">&nbsp;Answer 3</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="4"><label for="submit">&nbsp;Answer 4</label></span>
        
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