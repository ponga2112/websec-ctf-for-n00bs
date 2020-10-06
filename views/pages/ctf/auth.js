// TODO: Code this up!
let CTF_2 = {
    points: 100,
    answered: false,
    formpost : function() {
        if((document.getElementById('ctf2-authorized').value == "false") && (document.getElementById('auth_to_list').value == "External")) {
            let h = /*html*/`
            <div class="ctf-block ctf-modal-middle">
            <svg class="ctf-icon-error ctf-modal-middle" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
           Sorry, you are not authorized to make this transfer!<div>
            `;
            ctf.modal.set("Error",h,"");
        } else {
            let h = /*html*/`
            <div class="ctf-block ctf-modal-middle">
            <svg class="ctf-icon-success ctf-modal-middle" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
           Transfer complete!</div>
            `;
            ctf.modal.set("Success",h,"");
        }
    },
    answer : async () => {
        let a = null
        try {
            a = document.getElementById('ctf2-flag').querySelectorAll('input[type="radio"]:checked')[0].value
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

        if(ctf.answerstatus.two == 'true') {
            h = h+`<section>This question has already been answered correctly.</section>`
            b = `<button class="ctf-button-red" id="nav-ctf2-next"><b>Next Challenge</b></button>`
        } else {
            switch(a){
                case "to":
                    h = h+flag_bad+`Almost! <section>While it's true that if a customer is not authorized to transfer to an external account you probably 
                    should not show that option in the first place.. but this not where <i>this</i> particular vulnerability exists.</section>`
                    CTF_2.points = CTF_2.points-10;
                    break;
                case "from":
                    h = h+flag_bad+`Nope, that's not quite right`
                    CTF_2.points = CTF_2.points-25;
                    break;
                case "submit":
                    h = h+flag_bad+`Nope, that's not quite right`
                    CTF_2.points = CTF_2.points-25;
                    break;
                case "auth":
                    CTF_2.answered = true;
                    if(CTF_2.points < 1) {
                        CTF_2.points = 0;
                    }
                    ctf.answerstatus.two = 'true'
                    h = h+flag_good+`Correct! <section>This is what we would call a "client-side" control. Relying solely on client-side controls is a terrible idea 
                    because what we mean by "client-side" is that the control is 100% modifiable (<i>and therefore bypassable</i>) by anyone viewing the web page. 
                    </section><section class="ctf-code-left">
                    &#x3C;input type=&#x22;hidden&#x22; id=&#x22;isAuthorized&#x22; value=&#x22;false&#x22;&#x3E;
                    </section><section>Simply change the hidden value of <i>isAuthorized</i> to <b>true</b> and you just bypassed the control! </section><section>
                    It's fine to have something like the above, but you should really rely on a "<i>server-side</i>" control as well. So for our example, we would submit 
                    our request to tranfer money to an external account and then the server should <b>validate</b> that we have the authorization to do so. 
                    </section><section class="ctf-html-inner-text-center">Points Earned: `+String(CTF_2.points)+`</section>`
                    // nav outta here
                    b = `<button class="ctf-button-red" id="nav-ctf2-next"><b>Next Challenge</b></button>`
                    // this is a flag
                    let f = new ctf.flag(CTF_2.points,2,3)
                    ctf.capture(f);
                    break;
                default:
                    h = h+flag_bad+`Nope, that's not quite right`
            }
        }
        h=h+`</div>`
        ctf.modal.set("Results",h,b);
    },
    render : async () => {
        // TODO: Need to fix the UI mobile view. Text in mobile view is paginated weirdly
        // TODO: make HTML code by line numbers! Then, make selection what line is vuln at!
        let code_raw = `<!-- HTML FORM -->
<form>
From: 
<select name="From">
<option value="Checking">Checking Account</option>
</select>
To: 
<select name="To">
<option value="Savings">Savings Account</option>
<option value="External">External Account</option>
</select>
Amount: $<input type="text" name="amount">
<input type="hidden" id="isAuthorized" value="false">
<input type="submit">
</form>`
        let code_formated = ctf.toCodeBlock(code_raw)
        let view =  /*html*/`
        <section class="section-lite">
        <h2>Authorization Bypass</h2><img src="/assets/images/flag_trasnsparent_378x487.png" width="100">
        </section>
        <div><section>
        An Authorization, or "AuthZ" Bypass is a vulnerability usually due to   
        <a target="_blank" href="https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A5-Broken_Access_Control">Broken Access Controls</a>. 
        What we mean by "Authorization" is that a user is permitted (<i>authorized</i>) to do something. 
        Example: On an online banking application, 
        a customer might be <i>authorized</i> to view their account balance and transfer money from one account to another. However, the customer is 
        not permitted to transfer money to an external account - this is an example of a customer <b>not</b> being authorized to perform some function. 
        </section>&nbsp;<section>
        If a customer is not authorized to transfer money to an external account, what is preventing the transfer from happening? 
        It's the online banking web application that enforces access to functionality. Let's say that there is a vulnerability in the online banking web application, 
        such that a attacker could effectively "Bypass" the authorization check and tranfer money to an external account. That would be bad, right?
        This is an example of improper <i>Access Controls</i> being implemented that would otherwise prevent an Authorization Bypass vulnerability.
        </section><section>
        <section>&nbsp;</section>
        Below is an <i>over-simplified</i> example where an authorization bypass might exist. 
        A simple HTML form is used to transfer funds between accounts and it's cooresponding HTML code. 
        See if you can spot <i><b>where</b></i> the control preventing an unauthorized transfer might be bypassed and answer the question below:
        <section>&nbsp;</section></div>
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left">
        <div class="ctf-html-inner-text-center">Transfer Funds</div>
        <form id="ctf2-form">
        <span class="ctf-block">From: <select id="auth_from_list" name="From">
        <option value="Checking">Checking Account</option>
        </select></span>
        <span class="ctf-block">To: <select id="auth_to_list" name="To">
        <option value="Savings">Savings Account</option>
        <option value="External">External Account</option>
        </select></span>
        <span class="ctf-block">Amount: $<input type="text" id="auth_amount" name="amount" size="8" value="13.37"></span>
        <input type="hidden" id="ctf2-authorized" value="false">
        <section>&nbsp;</section>
        <div class="ctf-html-inner-text-center"><span class="ctf-block"><input type="submit" id="auth_submit" name="ctf2_submit" data-micromodal-trigger="modal" class="ctf-button-red"></span></div>
        </form>
        </div>`+code_formated+`
        </div>
        <section><h3>The above form and cooresponding HTML has an authorization bypass vulnerabilty; <u>Where is it?</u></h3></section>
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left">
        
        <form id="ctf2-flag">
        <div class="ctf-code-left">
        <span class="ctf-block"><input type="radio" name="answer" value="submit"><label for="submit">&nbsp;Line 14</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="from"><label for="submit">&nbsp;Line 5</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="auth"><label for="submit">&nbsp;Line 13</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="to"><label for="submit">&nbsp;Line 10</label></span>
        
        <section>&nbsp;</section>
        <div class="ctf-html-inner-text-center"><span class="ctf-block"><input type="submit" id="ctf2_flag_submit" name="ctf2_flag_submit" data-micromodal-trigger="modal" class="ctf-button-red" value="Try it!"></span></div>
        </form>
        </div></div>
        `
        return view
    },
    after_render: async (cb) => {
        document.getElementById('ctf2-form').onsubmit = function(e){e.preventDefault(); return false;}
        document.getElementById('ctf2-form').addEventListener('submit', function(){
            CTF_2.formpost();
        });
        document.getElementById('ctf2-flag').onsubmit = function(e){e.preventDefault(); return false;}
        document.getElementById('ctf2-flag').addEventListener('submit', function(){
            CTF_2.answer()
            .then(function(){
                if(CTF_2.answered) {
                    document.getElementById('nav-ctf2-next').addEventListener('click', function(){
                        ctf.modal.hideAll();
                        cb({action:"nav",to:"ctf/3"},null);
                    })
                }
            })
        });
    }
        
}

export default CTF_2;