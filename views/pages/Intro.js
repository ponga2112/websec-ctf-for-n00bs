let Intro = {
    render: async () => {
        //console.log("render() called in Into");
        let view =  /*html*/`
            <section class="section-lite">
            <h2>Capture the Flag</h2><img src="data:image/png;base64,`+ctf.flagImg+`" width="100">
            </section><br><div><section>
            <b><i>What is this?</i></b>
            </section><section>
            A Capture the Flag, or <b>CTF</b>, is a game where you earn points by <i>finding flags</i>.
            In this particular CTF, flags will be found through answering questions and solving puzzles regarding common <b>web application vulnerabilities</b>.
            </section>&nbsp;<section>
            <b><i>So, what is a web application vulnerability?</i></b>
            </section><section>
            In general, a "<b>vulnerability</b>" in software is a design flaw that, if <i>exploited</i>, can cause the software to perform 
            in such a way that the <b>security</b> of the application is compromised. 
            </section>&nbsp;<section>
            <b><i>How about an example?</i></b>
            </section><section>
            Let's say that you are a <b>bank</b>. You want to provide your customers a way to login to their account through a computer or mobile device in order to check balances and make transactions. 
            This functionality would be an example of an <b>online banking web application</b>. We say it's an <i>application</i> because that's the term used for a piece of software that performs tasks when run.
            We say <i>web</i>, because that's how the application is accessed - online with a web browser. Now, what if this online banking web application had a 
            vulnerability that could potentially allow a malicious attacker, a <i>hacker</i>, to access any of your customer's accounts? 
            That would be bad, right? 
            </section>&nbsp;<section>
            <b><i>So, how do you know if such a vulnerability exists in your software?</i></b>
            </section><section>
            There are actually many ways to check and each approach has its own advantages. One method is to take on the perspective of a would-be attacker and scour the application with a keen eye for defects that might be taken advantage of - 
            that is to say, just like a <b><i>hacker</i></b> would.
            </section>&nbsp;<section>
            This is called <b>Dynamic Application Security Testing</b>, or <b>DAST</b>.
            </section>&nbsp;<section>
            And so in this <b>CTF</b>, you will learn about a few of the most common web application vulnerabilities by taking on the perspective of a hacker and performing DAST!
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