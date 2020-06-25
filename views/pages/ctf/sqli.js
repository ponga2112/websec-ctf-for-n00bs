// TODO: Code this up!
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
        switch(a){
            case "alldblchar":
                h = h+flag_bad+`Incorrect! <section>Account number are numerical not alpha.  The data types need to match: integer for numbers, varchar for alpha characters.</section>`
                CTF_7.points = CTF_7.points-10;
                break;
            case "alldblnum":
                h = h+flag_bad+`Incorrect! <section>Account number are numerical not strings.  They do not need double quotes surrounding them for the integer data type</section>`
                CTF_7.points = CTF_7.points-25;
                break;
            case "noquote":
                CTF_7.answered = true;
                if(CTF_7.points < 1) {
                    CTF_7.points = 0;
                }
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
                CTF_7.points = CTF_7.points-25;
                break;
            default:
                h = h+flag_bad+`Incorrect`
        }
        h=h+`</div>`
        ctf.modal.set("Results",h,b);
    },
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
                Allowing unsanitized input could have negative effects such as learning database stucture, stealing passwords or even deleting important data from the system.  
                In this challenge we will be using MicroSoft SQL syntax.  Here are a few special characters and their purpose:<br><br>
                <div class="ctf-code-left"><table style="margin-left:auto;margin-right:auto;"><tr><td>Character</td><td width=20px></td><td>Purpose</td></tr><tr><td>\'</td><td></td><td>Identifies the start and end of a string</td></tr><tr><td>"</td><td></td><td>Identifies the start and end of a string</td></tr><tr><td>--</td><td></td><td>Used for comments</td></tr></table></div><br><br>
                A poorly coded SQL example may look like this:<br><br><div class="ctf-code-left">userName = getRequestString("user");<br>userPassword = getRequestString("password");<br><br>sql = \'SELECT * FROM Users WHERE Name =\' + userName + \' " AND Pass=" \' + userPassword + \' " \';</div><br><br>
                If the user entered jsmith and 1l0veT@cos then the full sql statement would be:<br><br><div class="ctf-code-left">SELECT * FROM Users WHERE Name ="jsmith" AND Pass="1l0veT@cos"</div><br><br>
                If malformed data is sent to the server, it could react in inappropriate ways.  In this example, if a user was to enter " or "a"="a into the password field, it would change the sql statement to the following:<br><br><div class="ctf-code-left">SELECT * FROM Users WHERE Name ="jsmith" AND Pass="1l0veT@cos" or "a"="a"</div><br><br>
                The first double quote before the "or" will close the quotation marks around "1l0veT@cos" and move it to the very end of the statement after the second "a". Since "a"="a" will always evaluate to true, the user would be able to log in without needing to know the correct password.<br><br><br>
                <b>If you saw the following log in screen, what might your first attempt be to try to log in and/or steal account numbers?</b><br><br><img src="/assets/images/login.png"></img><br><br>
            </section>
            <div class="ctf-html-outter">
            <div class="ctf-html-inner-left">
        
            <form id="ctf7-flag">
            <div class="ctf-code-left">
            <span class="ctf-block"><input type="radio" name="answer" value="alldblchar"><label for="submit">&nbsp;&#x22;&nbsp;or&nbsp;&#x22;a&#x22;=&#x22;a&#x22;</label></span>
            <span class="ctf-block"><input type="radio" name="answer" value="alldblnum"><label for="submit">&nbsp;&#x22;&nbsp;or&nbsp;&#x22;1&#x22;=&#x22;1&#x22;</label></span>
            <span class="ctf-block"><input type="radio" name="answer" value="noquote"><label for="submit">&nbsp;&#39;&nbsp;or&nbsp;1=1;</label></span>
            <span class="ctf-block"><input type="radio" name="answer" value="allsinglenum"><label for="submit">&nbsp;&#39;&nbsp;or&nbsp;&#39;1&#39;=&#39;1&#39;</label></span>
        
            <section>&nbsp;</section>
            <div class="ctf-html-inner-text-center"><span class="ctf-block"><input type="submit" id="ctf7_flag_submit" name="ctf7_flag_submit" data-micromodal-trigger="modal" class="ctf-button-red" value="Try it!"></span></div>
            </form>
            </div></div>
        `   
        return view
        
    },
    after_render: async (btnEvents) => {
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