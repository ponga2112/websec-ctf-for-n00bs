// TODO: Code this up!
let lock_icon = `
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lock-fill" fill="green" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
    <path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
    </svg>
    `
let acctList = `<select name="acctnum" id="acctnum">
    <option value="default">12345678</option>
    <option value="alldblchar">&#x22;&nbsp;or&nbsp;&#x22;a&#x22;=&#x22;a&#x22;</option>
    <option value="alldblnum">&#x22;&nbsp;or&nbsp;&#x22;1&#x22;=&#x22;1&#x22;</option>
    <option value="noquote">&#39;&nbsp;or&nbsp;1=1;</option>
    <option value="allsinglenum">&#39;&nbsp;or&nbsp;&#39;1&#39;=&#39;1&#39;</option>
    </select>`

let CTF_7 = {
    points: 100,
    answered: false,
    answer : async () => {
        let a = null
        try {
            a = document.getElementById('ctf7-flag').querySelectorAll('input[type="radio"]:checked')[0].value
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

        if(ctf.answerstatus.seven == 'true') {
            h = h+`<section>This question has already been answered correctly.</section>`
            b = `<button class="ctf-button-red" id="nav-ctf7-next"><b>Next Challenge</b></button>`
        } else {
            switch(a){
                case "alldblchar":
                    h = h+flag_bad+`Incorrect! <section>Account number are numerical not alpha.  The data types need to match: integer for numbers, varchar for alpha characters.</section>`
                    CTF_7.points = CTF_7.points-10;
                    break;
                case "alldblnum":
                    h = h+flag_bad+`Incorrect! <section>Account numbers are numerical (<i>integers</i>), not characters (<i>strings</i>).  They do not need double quotes surrounding them for the integer data type</section>`
                    CTF_7.points = CTF_7.points-10;
                    break;
                case "noquote":
                    CTF_7.answered = true;
                    if(CTF_7.points < 1) {
                        CTF_7.points = 0;
                    }
                    ctf.answerstatus.seven = 'true'
                    h = h+flag_good+`
                    Correct!<section>Since the website is asking for an account number, it would be stored in the database as an integer.  
                    This input string would be a good start for a SQL Injection attack because integers do not require single or double quotes to be placed around them.</section>
                    <section class="ctf-html-inner-text-center">Points Earned: `+String(CTF_7.points)+`</section>`
                    // nav outta here
                    b = `<button class="ctf-button-red" id="nav-ctf7-next"><b>Next Challenge</b></button>`
                    // this is a flag
                    let f = new ctf.flag(CTF_7.points,7,8)
                    ctf.capture(f);
                    break;
                case "allsinglenum":
                    h = h+flag_bad+`Incorrect! <section>Account number are numerical not strings.  They do not need single quotes surrounding them for the integer data type</section>`
                    CTF_7.points = CTF_7.points-10;
                    break;
                default:
                    h = h+flag_bad+`Incorrect`
            }
        }
        h=h+`</div>`
        ctf.modal.set("Results",h,b);
    },

    acctWindow : function() {
        let v = document.getElementById('acctnum').value
        let ctf7_acct = 'default'
        let submitBtn = document.createElement('button')
        submitBtn.setAttribute('id','btnSubmit')
        submitBtn.setAttribute('type','button')
        submitBtn.setAttribute('class',"faux-browser-button")
        submitBtn.innerHTML = "Submit"
        submitBtn.addEventListener('click', function(){
            CTF_7.acctWindow()
        });
        
        let html = ``
        switch(v) {
            case "alldblchar":
                ctf7_acct = 'alldblchar';
                document.getElementById('lblURL').innerHTML = `http://vulnserver.org/error.php`;
                html = `Page Error<br><br>We're sorry, the website has experienced an error.<br><br>`
                break;
            case "alldblnum":
                ctf7_acct = 'alldblnum';
                document.getElementById('lblURL').innerHTML = `http://vulnserver.org/error.php`;
                html = `Page Error<br><br>We're sorry, the website has experienced an error.<br><br>`
                break;
            case "noquote":
                ctf7_acct = 'noquote';
                document.getElementById('lblURL').innerHTML = `http://vulnserver.org/account.php`;
                html = `<b>Account Details</b><br><br>
                    ID,lname,fname,acctnum,bal<br>
                    1,smith,bob,111111,$10.00<br>
                    2,jones,amy,222222,$500.00<br>
                    3,hanson,tim,333333,$10,000.00<br>
                    4,baker,van,123456,$5.00<br>
                    5,allgood,pip,444444,$700,000.00<br>
                    6,winters,dick,555555,$777.00<br><br>
                `
                break;
            case "allsinglenum":
                ctf7_acct = 'allsinglenum';
                document.getElementById('lblURL').innerHTML = `http://vulnserver.org/error.php`;
                html = `Page Error<br><br>We're sorry, We're sorry, the website has experienced an error.<br><br>`
                break;
            default:
                ctf7_acct = 'default';
                document.getElementById('lblURL').innerHTML = `http://vulnserver.org/signin.php`;
                html = `Welcome to BankCorp ` +ctf.state.API.handle+ `,<br><br>We are your #1 source for all banking needs.<br><br>
                    In order to access your account information, please enter your account number and press the Submit button.<br>
                    Remember, please do not share your account number with anyone.<br>  We will never ask you for your full account number.<br><br>`+acctList+`
                    
                `
        }
        CTF_7.ctf7_acct = ctf7_acct;
        document.getElementById('ctf-acctwindow').innerHTML = html;
        if(ctf7_acct == 'default') {
            document.getElementById('ctf-acctwindow').appendChild(submitBtn);
        }
    },

    acctReset : async () => {
        let ctf7_acct = 'default';
        let html = ``
        document.getElementById('lblURL').innerHTML = `http://vulnserver.org/signin.php`;
        html = `Welcome to BankCorp ` +ctf.state.API.handle+ `,<br><br>We are your #1 source for all banking needs.<br><br>
            In order to access your account information, please enter your account number and press the Submit button.<br>
            Remember, please do not share your account number with anyone.<br>  We will never ask you for your full account number.<br><br>`+acctList+`
            <button id=btnSubmit class="faux-browser-button" type=button>Submit</button>
        `
        CTF_7.ctf7_acct = ctf7_acct;
        //document.getElementById('acctnum').value = ctf7_acct;
        document.getElementById('ctf-acctwindow').innerHTML = html;
    },

    navBar: /*html*/`
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
        <label>&nbsp;&nbsp;</label>
        `+lock_icon+`
        <label id=lblURL>http://vulnserver.org/login.php</label>  
        <label>&nbsp;&nbsp;</label>      
    `,

    render : async () => {
        
        let view =  /*html*/`
            <section class="section">
            <h2>Capture the Flag</h2>
            <hr width="50%" />
            <h3>SQL Injection Challenge</h3>
            </section>
            <section>
                <h3>In this section, we will explore SQL Injection vulnerabilities.</h3><br>
                SQL or Structured Query Language is a programming language that is used for managing data within a relational database.  
                SQL Injection vulnerabilities occur when information supplied by a user of the website is not properly checked and sanitized.  
                Allowing unsanitized input could have negative effects such as leaked database stucture, stolen passwords, or even important data being deleted from the system.  
                In this challenge we will be using MicroSoft SQL syntax.  Here are a few special characters and their purpose:<br><br>
                <div class="ctf-code-left"><table style="margin-left:auto;margin-right:auto;"><tr><td>Character</td><td width=20px></td><td>Purpose</td></tr><tr><td>\'</td><td></td><td>Identifies the start and end of a string</td></tr><tr><td>"</td><td></td><td>Identifies the start and end of a string</td></tr><tr><td>--</td><td></td><td>Used for comments</td></tr></table></div><br><br>
                A poorly coded SQL example may look like this:<br><br><div class="ctf-code-left">userName = getRequestString("user");<br>userPassword = getRequestString("password");<br><br>sql = \'SELECT * FROM Users WHERE Name =\' + userName + \' " AND Pass=" \' + userPassword + \' " \';</div><br><br>
                If the user entered <i>jsmith</i> and <i>1l0veT@cos</i> then the full SQL statement would be:<br><br><div class="ctf-code-left">SELECT * FROM Users WHERE Name ="jsmith" AND Pass="1l0veT@cos"</div><br><br>
                If malformed data is sent to the server, it could react in inappropriate ways.  In this example, if a user was to enter <i>" or "a"="a</i> into the password field, it would change the SQL statement to the following:<br><br><div class="ctf-code-left">SELECT * FROM Users WHERE Name ="jsmith" AND Pass="1l0veT@cos" or "a"="a"</div><br><br>
                The first double quote before the "<i>or</i>" will close the quotation marks around "<i>1l0veT@cos</i>" and move it to the very end of the statement after the second "<i>a</i>". Since <i>"a"="a"</i> will always evaluate to <b><i>true</i></b>, the user would be able to log in without needing to know the correct password.<br><br><br>
                <b>The following website has a SQL Injection vulnerabliity.  Can you find it?</b><br><br>
            </section>
            <section>
                <section>&nbsp;</section>
                <div class="ctf-html-outter">
                <div class="ctf-html-inner-left ctf-url-scroll ">
                <section><div class="ctf-urlbar">`+CTF_7.navBar+`</div></section>
                <section>
                <div class="ctf-urlwindow ctf-url-scroll" id="ctf-acctwindow">Welcome to BankCorp ` +ctf.state.API.handle+ `,<br><br>We are your #1 source for all banking needs.<br><br>
                In order to access your account information, please enter your account number and press the Submit button.
                Remember, please do not share your account number with anyone.  We will never ask you for your full account number.<br><br>`+acctList+`
                <button type="submit" id="btnSubmit" class="faux-browser-button" name="btnSubmit">Submit</button></div></div></div>
                <button type="submit" id="btnReset" class="faux-browser-button" name="btnReset">Reset</button>
            </section>
            <br><br>
            Why did the correct injection string work when the others wouldn't?

            <div class="ctf-html-outter">
            <div class="ctf-html-inner-left">
        
            <form id="ctf7-flag">
            <div class="ctf-code-left">
            <span class="ctf-block"><input type="radio" name="answer" value="alldblchar"><label for="submit">&nbsp;The injection used alpha characters.</label></span>
            <span class="ctf-block"><input type="radio" name="answer" value="alldblnum"><label for="submit">&nbsp;The injection used double quotes around the numerals.</label></span>
            <span class="ctf-block"><input type="radio" name="answer" value="noquote"><label for="submit">&nbsp;The injection used numerals, but did not place any quotes around them.</label></span>
            <span class="ctf-block"><input type="radio" name="answer" value="allsinglenum"><label for="submit">&nbsp;The injection used single quotes around the numerals.</label></span>
        
            <section>&nbsp;</section>
            <div class="ctf-html-inner-text-center"><span class="ctf-block"><input type="submit" id="ctf7_flag_submit" name="ctf7_flag_submit" data-micromodal-trigger="modal" class="ctf-button-red" value="Try it!"></span></div>
            </form>
            </div></div>
        `   
        return view
        
    },
    after_render: async (cb) => {
        CTF_7.ctf7_acct = "default"
        CTF_7.acctWindow();

        document.getElementById('btnReset').addEventListener('click', function(){
            CTF_7.acctReset().then(function() {
                document.getElementById('btnSubmit').addEventListener('click', function(){
                    CTF_7.acctWindow()
                });
            })
        });

        document.getElementById('ctf7-flag').onsubmit = function(e){e.preventDefault(); return false;}
        document.getElementById('ctf7-flag').addEventListener('submit', function(){
            CTF_7.answer()
            .then(function(){
                if(CTF_7.answered) {
                    document.getElementById('nav-ctf7-next').addEventListener('click', function(){
                        ctf.modal.hideAll();
                        cb({action:"nav",to:"ctf/8"},null);
                    })
                }
            })
        });
    }
        
}

export default CTF_7;