let lock_icon = `
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lock-fill" fill="green" xmlns="http://www.w3.org/2000/svg" id="lock-icon">
    <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
    <path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
  </svg>
    `;

let CTF_4 = {
    points: 100,
    answered: false,
    
    answer : async () => {
        let a = null
        try {
            a = document.getElementById('ctf4-flag').querySelectorAll('input[type="radio"]:checked')[0].value
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

        if(ctf.answerstatus.four == 'true') {
            h = h+`<section>This question has already been answered correctly.</section>`
            b = `<button class="ctf-button-red" id="nav-ctf4-next"><b>Next Challenge</b></button>`
        } else {
            switch(a){
                case "3":
                    CTF_4.answered = true;
                    if(CTF_4.points < 1) {
                        CTF_4.points = 0;
                    }
                    ctf.answerstatus.four = 'true'
                    h = h+flag_good+`Correct! <section>The '<b>Login page</b>' can be accessed over <i>http</i> instead of <i>https</i>, which means that web traffic (your user id and password in this case!) is not encrypted. Unencrypted communications can be read by other devices on the victim's network or anywhere else along the internet's infrastructure that the communications travel, such as the hardware used by the victim's Internet Service Provider (ISP) or where the application itself is being hosted. 
                    </section><section>This type of Data Exposure is less common today than it was three years ago with the advent of new icons and visual alerts to inform a user of insecure sites, but it remains critical to ensure the site you're accessing is using <i>https</i> to send and receive sensitive information.</section><section>
                    &nbsp;
                    </section><section class="ctf-html-inner-text-center">Points Earned: `+String(CTF_4.points)+`</section>`
                    // nav outta here
                    b = `<button class="ctf-button-red" id="nav-ctf4-next"><b>Next Challenge</b></button>`
                    // this is a flag
                    let f = new ctf.flag(CTF_4.points,4,5)
                    ctf.capture(f);
                    break;
                default:
                    CTF_4.points = CTF_4.points-20;
                    h = h+flag_bad+`Nope, that's not quite right`
            }
        }
        h=h+`</div>`
        ctf.modal.set("Results",h,b);
    },
    urlWindow : async () => {
        let v = document.getElementById('url').value
        let ctf4_url = 'welcome'
        let html = ``
        switch(v) {
            case "assets":
                ctf4_url = 'assets';
                html = `
                <h1>Index of /assets</h1>
                &nbsp;
                <dl>
                <dt>
                <u>Type</u>&nbsp;&nbsp;<u>Name</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Size</u>
                </dt><span><dd>
                DIR&nbsp;&nbsp;&nbsp;private-records/
                </dd><dd>
                FILE&nbsp;&nbsp;Blood_Lab_Results_2020.pdf&nbsp;&nbsp;....................&nbsp;&nbsp;1.2MB
                </dd><dd>
                FILE&nbsp;&nbsp;Vaccinations_List_2019.docx&nbsp;&nbsp;...................&nbsp;&nbsp;3907.2KB
                </dd><dd>
                FILE&nbsp;&nbsp;Family_Medical_History.tar.gz&nbsp;&nbsp;.................&nbsp;&nbsp;2.9GB
                </dd>
                </dl>
                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            case "login":
                ctf4_url = 'login';
                html = `
                <h1>Health Services - Please Login</h1>
                &nbsp;
                <dl><dt>
                User:&nbsp;`+ctf.state.API.handle+`<br />
                Pass:&nbsp;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;
                </dt>
                <dt><input type="submit" id="ctf4_nav_login" name="ctf4_nav_login" class="faux-browser-button" value="Login"/></dt>
                </dl>
                `
                document.getElementById('lock-icon').classList.add('hidden')
                break;
            case "account":
                ctf4_url = 'account';
                html = `
                <h1><b>`+ctf.state.API.handle+`'s Account!<b></h1>
                &nbsp;
                <dl><dt><u>View all of your account information here.</u></dt><dd>
                Name:&nbsp;`+ctf.state.API.handle+`<br/>
                Email:&nbsp;cyb3rsn34k3rs@acme-email.com<br/>
                Address:&nbsp;1234 Acme St, Wireframe City, USA 81337<br/>
                Insurance:&nbsp;Acme Insurance Company, Policy Group #H3-4LS-4-U<br/>
                Doctors:&nbsp;Dr. Sputnik, Dr. Turing<br/>
                Medications:&nbsp;10mg Bulbasaur .... 2/daily<br/>
                </dd><br/>
                <dd>View your medical assets <input type="submit" id="ctf4_asset_nav" name="ctf4_asset_nav" class="faux-browser-button" value="here"/>!
                </dd></dl>
                `
                document.getElementById('lock-icon').classList.remove('hidden')
                break;
            default:
                ctf4_url = 'welcome';
                html = `
                <h1>Welcome to Health Services, `+ctf.state.API.handle+`!</h1>
                &nbsp;
                <dl><dt>
                </dt>
                <dt><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-diamond-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>&nbsp;You've logged in from the IP address 192.168.0.43.</dt>
                <dt><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-diamond-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>&nbsp;The last four digits of your SSN are 9873.</dt>
                <dt><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-diamond-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>&nbsp;This site requires cookies.</dt>
                <dt>Please click below to accept our Cookies Terms of Use.</dt>
                <dt><input type="submit" id="ctf4_cookie_accept" name="ctf4_cookie_accept" class="faux-browser-button" value="Accept and Continue"/></dt>
                </d1>
                ` 
                document.getElementById('lock-icon').classList.remove('hidden')
        }
        CTF_4.ctf4_url = ctf4_url;
        document.getElementById('ctf-urlwindow').innerHTML = html;
        //console.log("DEBUG: (url).value="+v+"; ctf4_url="+ctf4_url)
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
  <option value="login">http://acmehealth.co/login</option>
  <option value="welcome">https://acmehealth.co/welcome-cookies</option>
  <option value="account">https://acmehealth.co/my-account</option>
  <option value="assets">ftps://acmehealth.co/assets</option>

</select>

    `,
    ctf4_url : '',
    update_ctf_events : async () => {
        switch(CTF_4.ctf4_url) {
            case "account":
                document.getElementById('ctf4_asset_nav').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 3;
                    CTF_4.urlWindow()
                    .then(function() {
                        CTF_4.update_ctf_events();
                    })
                })
                break;
            case "login":
                //console.log("DEBUG: why are we getting here?? :: "+CTF_4.ctf4_url)
                document.getElementById('ctf4_nav_login').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 1;
                    CTF_4.urlWindow()
                    .then(function() {
                        CTF_4.update_ctf_events();
                    })
                })
                break;
            case "account":
                return null
            default:
                try {
                    document.getElementById('ctf4_cookie_accept').addEventListener('click', function(){
                        document.getElementById('url').selectedIndex = 2;
                        CTF_4.urlWindow()
                        .then(function() {
                            CTF_4.update_ctf_events();
                        })
                    })
                } catch {
                    return null
                }
                
        }
    },
    render : async () => {
        // TODO: Need to fix the UI mobile view. Text in mobile view is paginated weirdly
        // TODO: make HTML code by line numbers! Then, make selection what line is vuln at!
        //let code_formated = ctf.toCodeBlock(code_raw)
        let view =  /*html*/`
        <section class="section-lite">
        <h2>Sensitive Data Exposure</h2><img src="data:image/png;base64,`+ctf.flagImg+`" width="100">
        </section>
        <div><section>
        Sensitive Data Exposure is a term covering broad cases of important information--including but not limited to  passwords, credit card numbers, health records, and business secrets--not being adequately protected. Falling into the top third slot of the OWASP Top 10 indicates that this is among the most prevelant issues discovered in web applications around the world.
        </section>&nbsp;<section>
        While saying that a site has failed to appropriately protect sensitive information sounds simple enough, the vast array of controls and mechanisms involved in protecting data while <b>stored</b> (<i>such as sitting in a database</i>) or data <b>in-transit</b> are anything but simple. Examples of failed controls, and proactive methods to mitigate such failures, can be found here: 
        <a target="_blank" href="https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A3-Sensitive_Data_Exposure">OWASP -- Sensitive Data Exposure</a>. 
        </section>&nbsp;<section>
        An example of Sensitive Data Exposure while <i>in-transit</i> is Unencrypted Communication. Imagine walking into a bank and approaching the teller. When asking for account information, the teller loudly shouts out all your balances and recent transactions. Personal account information is considered sensitive, and in this case is not being protected from eavesdroppers. Web applications must likewise take precautions when sending and receiving data to your desktop or mobile device. Unencrypted Communication is the functional equivalent in the machine world to shouting out data for anyone listening to hear.
        </section><section>
        <section>&nbsp;</section></div>
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left ctf-url-scroll">
        <section><div class="ctf-urlbar">`+CTF_4.urlbar+`</div></section>
        <section>
        <div class="ctf-urlwindow ctf-url-scroll" id="ctf-urlwindow">Loading...</div></section>

        </div></div>
        <section><h3>The above web application has a Sensitive Data Exposure vulnerability due to Unencrypted Communication - <u>Which page is vulnerable?</u></h3></section>
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left">
        
        <form id="ctf4-flag">
        <div class="ctf-code-left">
        <span class="ctf-block"><input type="radio" name="answer" value="1"><label for="submit">&nbsp;/welcome-cookies</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="2"><label for="submit">&nbsp;/assets</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="3"><label for="submit">&nbsp;/login</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="4"><label for="submit">&nbsp;/my-account</label></span>
        
        <section>&nbsp;</section>
        <div class="ctf-html-inner-text-center">
        <span class="ctf-block"><input type="submit" id="ctf4_flag_submit" name="ctf4_flag_submit" data-micromodal-trigger="modal" class="ctf-button-red" value="Try it!">
        </span></div>
        </form>
        </div></div>
        `
        return view
    },
    after_render: async (cb) => {
        CTF_4.ctf4_url = "welcome"
        CTF_4.urlWindow().then(function() {
            CTF_4.update_ctf_events();
        })
        document.getElementById('url').addEventListener('change', function(){
            CTF_4.urlWindow()
            .then(function() {
                CTF_4.update_ctf_events();
            })
        });
        document.getElementById('ctf4-flag').onsubmit = function(e){e.preventDefault(); return false;}
        document.getElementById('ctf4-flag').addEventListener('submit', function(){
            CTF_4.answer()
            .then(function(){
                if(CTF_4.answered) {
                    document.getElementById('nav-ctf4-next').addEventListener('click', function(){
                        ctf.modal.hideAll();
                        cb({action:"nav",to:"ctf/5"},null);
                    })
                }
            })
        });
    }
        
}

export default CTF_4;