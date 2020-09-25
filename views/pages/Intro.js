let Intro = {
    render: async () => {
        //console.log("render() called in Into");
        let view =  /*html*/`
            <section class="section-lite">
            <h2>Capture the Flag</h2><img src="/assets/images/flag_trasnsparent_378x487.png" width="100">
            </section>
            <div><section>
            <i>So, what is this?</i> A Capture the Flag or <b>CTF</b> is a game where you earn points by <i>finding</i> flags. 
            In this particular CTF, you will be finding common <b>web application vulnerabilities</b>.
            </section><section>
            <i>So, what is a web application vulnerability?</i> In general, a "<b>vulnerability</b>" in software is a design flaw that if exploited, can cause the software to perform 
            in such a way that the <i>security</i> of the application is compromised. 
            </section><section>
            <i>How about an example?</i> Let's say that you are a bank and that you have a way for your customers to login to check their account balances and make transactions. 
            This would be an example of an online banking web application. We say it's an <i>application</i> because that's the term used for a piece of software that when run, performs some function.
            We say <i>web</i>, because that's how the application is accessed - Online with a web browser, in this exmaple. Now what if this online banking web application had a 
            vulnerability, <i>(a design flaw in the software)</i> that allowed a malicious person, a <i>hacker</i>; to access any of your customers accounts? 
            That would be bad, right? 
            </section><section>
            <i>So, how do you know if such a vulnerability exists in the software or not?</i> There are many ways to check for this. One way is, to check for it just like an attacker would - 
            that is to say, just like a <i>hacker</i> would. This is called <b>Dynamic Application Security Testing</b>.
            </section><section>
            And so in this <b>CTF</b>, you will learn about a few of the most common web application vulnerabilities.
            </section><section>&nbsp;</section>
            </div><div>
            <hr width="70%" class="ctf-hr" />
            <section>
            <button class="ctf-button-dark" id="intro-advance-button" data-micromodal-trigger="modal"><b>Let's get started!</b></button>
            </section><section>&nbsp;</section><section>&nbsp;</section>
            </div>
        `
        return view
    },
    after_render: async (cb) => {
        let this_register = function() {
            let h = document.getElementById('register-handle').value
            if(ctf.validatePlayername(h)) {
                // setup handle name
                ctf.register(h);
            } else {
                document.getElementById('register-tooltip').classList.remove('hidden');
                document.getElementById('register-handle').classList.add('text-field-alert');
                document.getElementById('register-handle').addEventListener('focus', function(){
                    document.getElementById('register-handle').classList.remove('text-field-alert');
                });
            }
        }
        let reg = function() {
            document.getElementById('register-handle').addEventListener('keypress', function(e){ 
                if (e.key === 'Enter') {
                    this_register(); 
                }
            });
            document.getElementById('submit-handle').addEventListener('click', function(){
                this_register();
            });
        }
        // TODO: add eventlistener ENTER for registering
        // TODO: UI issue on mobile, modal does not recenter in viewport
        let body = /*html*/`
        <div class="register-box">
            <section class="text-field-container">Whats your name?</section>
            <section class="text-field-container"><input class="text-field-modal" type="text" name="handle" value="" min="3" maxlength="20" id="register-handle" /></section>
            <div class="line-break"></div>
            <div id="register-tooltip" class="register-tooltip hidden"><h5>
            <div>&nbsp;</div>
            <div>Minumum 3 characters</div>
            <div>No disallowed words</h5></div>
            </div></div>
        `
        let footer = /*html*/`
            <button id="submit-handle" class="ctf-button-red">Submit</button></h5>
        `
        document.getElementById('intro-advance-button').addEventListener('click', function(){
            ctf.modal.set("Getting Started",body,footer).then(function(){
                reg();
            })
        })
        //console.log(document.getElementById('submit-handle'))
    },
}

export default Intro;