// TODO: Code this up!

let lock_icon = `
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lock-fill" fill="green" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
    <path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
  </svg>
    `;

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
            case "config":
                document.getElementById('url').selectedIndex = 1;
                document.getElementById('ctf-urlwindow').innerHTML = CTF_6.urlWindow();
                h = h+flag_bad+`Almost! <section>You recieved a 403 response, which means the resource exists, but you are not authorized to access it. It could potentially be something concerning but
                403 responses in general are not a bad thing.</section>`
                CTF_6.points = CTF_6.points-15;
                break;
            case "home":
                document.getElementById('url').selectedIndex = 0;
                document.getElementById('ctf-urlwindow').innerHTML = CTF_6.urlWindow();
                h = h+flag_bad+`Nope - There is nothing concerning about this page.`
                CTF_6.points = CTF_6.points-25;
                break;
            case "users":
                document.getElementById('url').selectedIndex = 2;
                document.getElementById('ctf-urlwindow').innerHTML = CTF_6.urlWindow();
                h = h+flag_bad+`Nope - You recieved a 404 response, which means the page does not exist.`
                CTF_6.points = CTF_6.points-25;
                break;
            case "server-status":
                document.getElementById('url').selectedIndex = 3;
                document.getElementById('ctf-urlwindow').innerHTML = CTF_6.urlWindow();
                CTF_6.answered = true;
                if(CTF_6.points < 1) {
                    CTF_6.points = 0;
                }
                h = h+flag_good+`Correct! <section>This is a "Server Status Page" for a very popular Web Server, <i>Apache</i>. If it's not disabled, 
                sesnsitive information about the web application could be revealed to an attacker such as, exact version of software used, IP addresses of 
                clients currently connected to the web site, and any request details that other clients might send, such as search query strings, usernames and more. It's never
                a good idea to leave the Server Status module enabled on a production site.
                </section><section class="ctf-html-inner-text-center">Points Earned: `+String(CTF_6.points)+`</section>`
                // nav outta here
                b = `<button class="ctf-button-red" id="nav-ctf6-next"><b>Next Challenge</b></button>`
                // this is a flag
                let f = new ctf.flag(CTF_6.points,6,7)
                ctf.capture(f);
                break;
            default:
                h = h+flag_bad+`Nope, that's not quite right`
        }
        h=h+`</div>`
        ctf.modal.set("Results",h,b);
    },
    // random objects
    urlWindow : function() {
        let v = document.getElementById('url').value
        switch(v) {
            case "users":
                return `
                <h1>HTTP/404 Not Found</h1>
                &nbsp;
                <dl><dt>The page you requested cannot be located on the server.</dt></dl>
                `
            case "config":
                return `
                <h1>HTTP/403 Foridden</h1>
                &nbsp;
                <dl><dt>You do not have authorization to view this resource.</dt></dl>
                `
            case "server-status":
                return `
                <h1>Apache Server Status for www.example.com</h1>

                <dl><dt>Server Version: Apache/2.4.10 (Debian) mod_fastcgi/mod_fastcgi-SNAP-0910052141 mod_fcgid/2.3.9 OpenSSL/1.0.1t</dt>
                <dt>Server MPM: prefork</dt>
                <dt>Server Built: Sep 30 2019 19:32:08
                </dt></dl><hr /><dl>
                <dt>Restart Time: Wednesday, 20-May-2020 01:26:17 EDT</dt>
                <dt>Parent Server Config. Generation: 46</dt>
                <dt>Parent Server MPM Generation: 45</dt>
                <dt>Server uptime:  42 days 15 hours 54 minutes 26 seconds</dt>
                <dt>Server load: 0.79 0.69 0.36</dt>
                <dt>Total accesses: 16474047 - Total Traffic: 135.8 GB</dt>
                <dt>CPU Usage: u164.72 s29.29 cu0 cs0 - .00526% CPU load</dt>
                <dt>4.47 requests/sec - 38.6 kB/second - 8.6 kB/request</dt>
                <dt>8 requests currently being processed, 6 idle workers</dt>
                </dl><pre>W_KK__CRK_R__..R................................................
                ................................................................
                ......................</pre>
                <p>Scoreboard Key:<br />
                "<b><code>_</code></b>" Waiting for Connection, 
                "<b><code>S</code></b>" Starting up, 
                "<b><code>R</code></b>" Reading Request,<br />
                "<b><code>W</code></b>" Sending Reply, 
                "<b><code>K</code></b>" Keepalive (read), 
                "<b><code>D</code></b>" DNS Lookup,<br />
                "<b><code>C</code></b>" Closing connection, 
                "<b><code>L</code></b>" Logging, 
                "<b><code>G</code></b>" Gracefully finishing,<br /> 
                "<b><code>I</code></b>" Idle cleanup of worker, 
                "<b><code>.</code></b>" Open slot with no current process<br />
                <p/>
                
                
                <table border="0"><tr><th>Srv</th><th>PID</th><th>Acc</th><th>M</th><th>CPU
                </th><th>SS</th><th>Req</th><th>Conn</th><th>Child</th><th>Slot</th><th>Client</th><th>VHost</th><th>Request</th></tr>
                
                <tr><td><b>0-45</b></td><td>23207</td><td>15/192/1228516</td><td><b>W</b>
                </td><td>17.49</td><td>0</td><td>0</td><td>328.2</td><td>1.21</td><td>10724.90
                </td><td>127.0.0.1</td><td nowrap>example.com</td><td nowrap>GET /server-status HTTP/1.1</td></tr>
                
                <tr><td><b>1-45</b></td><td>23741</td><td>0/1/1233767</td><td>_
                </td><td>0.06</td><td>1</td><td>68</td><td>0.0</td><td>0.00</td><td>10339.11
                </td><td>2607:e580::1b</td><td nowrap>example.com</td><td nowrap>POST /home/login.html?user=joep HTTP/1.1</td></tr>
                
                <tr><td><b>3-45</b></td><td>23299</td><td>2/211/1188010</td><td><b>K</b>
                </td><td>17.18</td><td>3</td><td>0</td><td>5.7</td><td>0.66</td><td>9260.81
                </td><td>66.249.65.106</td><td nowrap>www.example.com</td><td nowrap>GET /users?redir=%2Fhome%2Fgregl H</td></tr>
                
                <tr><td><b>4-45</b></td><td>23742</td><td>0/1/1176879</td><td>_
                </td><td>0.06</td><td>0</td><td>67</td><td>0.0</td><td>0.00</td><td>8661.81
                </td><td>2607:e580::1b</td><td nowrap>example.com</td><td nowrap>POST /search?q=my+account+balance HTTP/1.1</td></tr>
                
                <tr><td><b>5-45</b></td><td>23510</td><td>0/124/1141194</td><td>_
                </td><td>10.49</td><td>1</td><td>3</td><td>0.0</td><td>0.46</td><td>10283.42
                </td><td>2607:e580::1b</td><td nowrap>example.com</td><td nowrap>POST /search?q=checking+account HTTP/1.1</td></tr>
                
                <tr><td><b>6-45</b></td><td>23209</td><td>1/208/1129212</td><td><b>C</b>
                </td><td>11.54</td><td>0</td><td>3</td><td>0.8</td><td>0.60</td><td>8858.33
                </td><td>2607:e580::1b</td><td nowrap>example.com</td><td nowrap>GET /users/nataliep HTTP/1.1</td></tr>
                
                <tr><td><b>7-45</b></td><td>22693</td><td>0/288/1075112</td><td><b>R</b>
                </td><td>15.30</td><td>20</td><td>4</td><td>0.0</td><td>1.10</td><td>9400.06
                </td><td>50.24.13.96</td><td nowrap></td><td nowrap></td></tr>
                </table>
                
                `
            default:
                return `
                <h1>Welcome to our website!</h1>
                &nbsp;
                <dl><dt>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cone-striped" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M7.879 11.015a.5.5 0 0 1 .242 0l6 1.5a.5.5 0 0 1 .037.96l-6 2a.499.499 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l6-1.5z"/>
  <path d="M9.97 4.88l.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.159-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm2.005 8.015l-.565-2.257c-.862.212-1.964.339-3.165.339s-2.303-.127-3.165-.339l-.565 2.257 3.609-.902a.5.5 0 0 1 .242 0l3.609.902z"/>
</svg>
                We apologize, but our website is still under construction!
                </dt>
                <dt>Please check back with us soon!</dt>
                </dl>
                ` 
        }
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
  <option value="home">https://example.com/home</option>
  <option value="config">https://example.com/config/security</option>
  <option value="users">https://example.com/users</option>
  <option value="server-status">https://example.com/server-status</option>
</select>

    `,
    render : async () => {
        // TODO: Need to fix the UI mobile view. Text in mobile view is paginated weirdly
        let view =  /*html*/`
        <section class="section-lite">
        <h2>Application / Security Misconfiguration</h2><img src="/assets/images/flag_trasnsparent_378x487.png" width="100">
        </section>
        <div><section>
        An Application Misconfiguration is not nessesarily a vulnerability in and of itself. A web application may have no vulnerabilities in its 
        software, but if it's <i>configured</i> improperly, it could cause the web application to behave in unexpected ways and lead to other vulnerabilities. A common 
        example of this is leaving http (port 80) access open. Most web sites these days enforce http<b>s</b>, which means it's secure and encrypted. If the non-encrypted 
        version of the web app is left available, attackers could leverage several techniques that would expose any visiters to the site to information theft and manipulation.
        </section>&nbsp;<section>
        Another common mistake when it comes to misconfiguration is when a new web application is developed and hosted on a web server that has <b>default settings</b>. 
        Default settings are generally bad because certain features may be enabled that the application developers did not intend on. Also, default settings and pages are 
        sure to draw the attention of hackers since they are well documented. 
        </section>&nbsp;<section>
        Below is an <i>over-simplified</i> example of where an application misconfiguration resulting from default settings might cause trouble - Use the drop-down address bar to examine
        the various pages and then determine which one is problematic.</div>
        </section>&nbsp;<section>
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left ctf-url-scroll">
        <section><div class="ctf-urlbar">`+CTF_6.urlbar+`</div></section>
        <section>
        <div class="ctf-urlwindow ctf-url-scroll" id="ctf-urlwindow">Loading...</div></section>

        </div></div>
        <section><b>Which</b> of the above pages is the result of a server misconfiguration?</section>
        <form id="ctf6-flag">
        <div class="ctf-code-left">
        <span class="ctf-block"><input type="radio" name="answer" value="users"><label for="submit">&nbsp;/users</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="config"><label for="submit">&nbsp;/config/security</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="home"><label for="submit">&nbsp;/home</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="server-status"><label for="submit">&nbsp;/server-status</label></span>
        
        <section>&nbsp;</section>
        <div class="ctf-html-inner-text-center"><span class="ctf-block"><input type="submit" id="ctf6_flag_submit" name="ctf6_flag_submit" data-micromodal-trigger="modal" class="ctf-button-red" value="Try it!"></span></div>
        </form>
        </div></div>
        <section>&nbsp;</section><section>&nbsp;</section>
        `
        return view
    },
    after_render: async (cb) => {
        //document.getElementById('ctf6-form').onsubmit = function(e){e.preventDefault(); return false;}
        document.getElementById('ctf-urlwindow').innerHTML = CTF_6.urlWindow();
        document.getElementById('url').addEventListener('change', function(){
            document.getElementById('ctf-urlwindow').innerHTML = CTF_6.urlWindow();
        });
        document.getElementById('ctf6-flag').onsubmit = function(e){e.preventDefault(); return false;}
        document.getElementById('ctf6-flag').addEventListener('submit', function(){
            CTF_6.answer()
            .then(function(){
                if(CTF_6.answered) {
                    document.getElementById('nav-ctf6-next').addEventListener('click', function(){
                        ctf.modal.hideAll();
                        cb({action:"nav",to:"ctf/7"},null);
                    })
                }
            })
        });
    }
        
}

export default CTF_6;