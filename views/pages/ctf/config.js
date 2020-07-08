// TODO: Code this up!
let CTF_6 = {
    points: 100,
    answered: false,
    formpost : function() {
        if((document.getElementById('ctf6-authorized').value == "false") && (document.getElementById('auth_to_list').value == "External")) {
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
            a = document.getElementById('ctf6-flag').querySelectorAll('input[type="radio"]:checked')[0].value
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
                h = h+flag_good+`Correct! <section>This is what we would call a "client-side" control. Relying solely on client-side controls is a terrible idea 
                because what we mean by "client-side" is that the control is 100% modifiable (<i>and therefore bypassable</i>) by anyone viewing the web page. 
                </section><section class="ctf-code-left">
                &#x3C;input type=&#x22;hidden&#x22; id=&#x22;isAuthorized&#x22; value=&#x22;false&#x22;&#x3E;
                </section><section>Simply change the hidden value of <i>isAuthorized</i> to <b>true</b> and you just bypassed the control! </section><section>
                It's fine to have something like the above, but you should really rely on a "<i>server-side</i>" control as well. So for our example, we would submit 
                our request to tranfer money to an external account and then the server should <b>validate</b> that we have the authorization to do so. 
                </section><section class="ctf-html-inner-text-center">Points Earned: `+String(CTF_2.points)+`</section>`
                // nav outta here
                b = `<button class="ctf-button-red" id="nav-ctf6-next"><b>Next Challenge</b></button>`
                // this is a flag
                let f = new ctf.flag(CTF_2.points,2,3)
                ctf.capture(f);
                break;
            default:
                h = h+flag_bad+`Nope, that's not quite right`
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
        <h2>Application / Security Misconfiguration</h2><img src="/assets/images/flag_trasnsparent_378x487.png" width="100">
        </section>
        <div><section>
        An Application Misconfiguration is not nessesarily a vulnerability in and of itself. A web application may have no vulnerabilites in its 
        software, but if it's <i>configured</i> improperly, it could cause the web application to behave in unexpected ways and lead to other vulnerabilities. A common 
        example of this is leaving http (port 80) access open. Most web sites these days enforce http<b>s</b>, which means it's secure and encrypted. If the non-encrypted 
        version of the web app is left available, attackers could leverage several techniques that would expose any visiters to the site to information theft and manipulation.
        </section><section>
        Another common mistake when it comes to misconfiguration is when a new web application is developed, and the web server that it's hosted on has <b>default settings</b>. 
        Default settings are generally bad because certain things may be enabled that the application developers did not intend on. Also, default settings and pages are 
        sure to draw the attention of hackers since they are well known. 
        </section><section>
        <section>&nbsp;</section>
        Below is an <i>over-simplified</i> example of where an application misconfiguration resulting from default settings might cause trouble - Use the drop-down to examine</div>
        the various pages and then determine which one is problematic.  
        
        
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left">
        <section>TODO: Here is a form with dropdown that will display various default server pages, one of which should be an obvious source of concern</section>
        </div></div>
        
        <form id="ctf6-flag">
        <div class="ctf-code-left">
        <span class="ctf-block"><input type="radio" name="answer" value="1"><label for="submit">&nbsp;/users</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="2"><label for="submit">&nbsp;/config/security</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="3"><label for="submit">&nbsp;/home</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="4"><label for="submit">&nbsp;/server-status</label></span>
        
        <section>&nbsp;</section>
        <div class="ctf-html-inner-text-center"><span class="ctf-block"><input type="submit" id="ctf6_flag_submit" name="ctf6_flag_submit" data-micromodal-trigger="modal" class="ctf-button-red" value="Try it!"></span></div>
        </form>
        </div></div>
        
        `
        return view
    },
    after_render: async (cb) => {
        document.getElementById('ctf6-form').onsubmit = function(e){e.preventDefault(); return false;}
        document.getElementById('ctf6-form').addEventListener('submit', function(){
            CTF_2.formpost();
        });
        document.getElementById('ctf6-flag').onsubmit = function(e){e.preventDefault(); return false;}
        document.getElementById('ctf6-flag').addEventListener('submit', function(){
            CTF_2.answer()
            .then(function(){
                if(CTF_2.answered) {
                    document.getElementById('nav-ctf6-next').addEventListener('click', function(){
                        ctf.modal.hideAll();
                        cb({action:"nav",to:"ctf/3"},null);
                    })
                }
            })
        });
    }
        
}

export default CTF_6;