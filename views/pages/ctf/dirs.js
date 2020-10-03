// TODO: Code this up!
let lock_icon = `
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lock-fill" fill="green" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
    <path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
    </svg>
    `
let CTF_5 = {
    points: 100,
    answered: false,

    answer : async () => {
        let a = null
        try {
            a = document.getElementById('ctf5-flag').querySelectorAll('input[type="radio"]:checked')[0].value
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
            case "linux":
                h = h+flag_bad+`Incorrect! <section>"/var/html/www/admin/get.inc" is a Linux web server file.  We are looking for a Windows file.</section>`
                CTF_5.points = CTF_5.points-10;
                break;
            case "encode":
                CTF_5.answered = true;
                if(CTF_5.points < 1) {
                    CTF_5.points = 0;
                }
                h = h+flag_good+`
                Correct!<section>"%2e%2e%2f" is URL encoding of the characrters "../".  Windows will accept either the "..\\" or "../" character sequences.  The URL encoding is done to try get around validation that may be taking place by the web application or firewall.</section>
                <section class="ctf-html-inner-text-center">Points Earned: `+String(CTF_5.points)+`</section>`
                // nav outta here
                b = `<button class="ctf-button-red" id="nav-ctf5-next"><b>Next Challenge</b></button>`
                // this is a flag
                let f = new ctf.flag(CTF_5.points,5,6)
                ctf.capture(f);
                break;
            case "shadow":
                h = h+flag_bad+`Incorrect! <section>While "..\\" is a valid character sequence accepted by Windows, the shadow file is a linux specific file.</section>`
                CTF_5.points = CTF_5.points-10;
                break;
            case "noresource":
                h = h+flag_bad+`Incorrect! <section>In this example, the request for the vulnerable resource was removed from the URL and only the traversal attack was appended.</section>`
                CTF_5.points = CTF_5.points-10;
                break;
            default:
                h = h+flag_bad+`Incorrect`
        }
        h=h+`</div>`
        ctf.modal.set("Results",h,b);
    },

    urlWindow : async () => {
        let v = document.getElementById('url').value
        let ctf5_url = 'default'
        let html = ``
        switch(v) {
            case "linux":
                ctf5_url = 'linux';
                html = `404 Error<br><br>We're sorry, but We’re having trouble finding the page you’re looking for.<br><br>`
                break;
            case "encode":
                ctf5_url = 'encode';
                html = `Thank you ` +ctf.state.API.handle+ `,<br><br>Your style has now been switched to ; for 16-bit app support<br>
                    [386Enh]<br>
                    woafont=dosapp.fon<br>
                    EGA80WOA.FON=EGA80WOA.FON<br>
                    EGA40WOA.FON=EGA40WOA.FON<br>
                    CGA80WOA.FON=CGA80WOA.FON<br>
                    CGA40WOA.FON=CGA40WOA.FON<br>
                    <br><br>
                    [drivers]<br>
                    wave=mmdrv.dll<br>
                    timer=timer.drv<br>
                    <br><br>
                    [mci]<br><br>`
                break;
            case "shadow":
                ctf5_url = 'shadow';
                html = `404 Error<br><br>We're sorry, but We’re having trouble finding the page you’re looking for.<br><br>`
                break;
            case "noresource":
                ctf5_url = 'noresource';
                html = `404 Error<br><br>We're sorry, but We’re having trouble finding the page you’re looking for.<br><br>`
                break;
            default:
                ctf5_url = 'default';
                html = `Thank you ` +ctf.state.API.handle+ `,<br><br>Your style has now been switched to "plain".<br><br>`
        }
        CTF_5.ctf5_url = ctf5_url;
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
        <option value="default">http://vulnserver.org/index.asp?style=plain</option>
        <option value="linux">http://vulnserver.org/index.asp?style=/var/html/www/admin/get.inc</option>
        <option value="encode">http://vulnserver.org/index.asp?style=%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2fWindows%2fsystem.ini</option>
        <option value="shadow">http://vulnserver.org/index.asp?style=..\\..\\..\\..\\shadow</option>
        <option value="noresource">http://vulnserver.org/../../../../Windows/system.ini</option>
        </select>

    `,

    render : async () => {
        let view =  /*html*/`
        <section class="section-lite">
        <h2>Directory Traversal</h2><img src="/assets/images/flag_trasnsparent_378x487.png" width="100">
        </section>
            <section>&nbsp;</section>
            <section>
                <h3>In this section, we will explore Directory Traversal vulnerabilities.</h3><br>
                Directory traversal vulnerabilities go by many names such as: 
                path traversal, dot dot slash, directory climbing, and backtracking.
                In a directory traversal attack, a malicious user takes advantage of improper controls to run commands or access files and directories that are located outside of the web server root directory.
                By using sequences of characters known by the operating system to change directories, attackers can trick the web server into accessing content outside of the root web server directory.<br><br>
                For example, if a web server has a request parameter that is pointing to a file resource, such as:<br><br>
                <div class="ctf-code-left">http://somewhere.com/home.php?file=userContent</div><br><br>
                Insecure coding practices could lead to the following block of code:<br><br>
                <div class="ctf-code-left">include($_GET['file']);</div><br><br>
                An attacker could exploit this code by using dots and slashes to move up the directory tree then decend the tree into another folder path.  
                In the case of a Linux web server, an attacker could attempt to access the "/etc/password" file using the following syntax:<br><br>
                <div class="ctf-code-left">http://somewhere.com/home.php?file=../../../../../../etc/password</div><br><br>
                Every "../" would move up a directory.  Not knowing how far down a directory tree the root web directory lies, extra "../" are added to make sure the attack is taken up to the root operating system directory before decending again.
                After moving to the root operating system directory, the attack will then decend into the "/etc" folder and try to access the "password" file and return its contents in the web browser.<br><br>
                In the same way that resources in GET and POST request parameters are vulnerable, cookie values can also be attacked. If a cookie is trying to dynamically generate pages, that parameter value could also be exploited.
                In this example, a cookie is dynamically generating a template based on a value, "hostile", saved in the cookie:<br><br>
                <div class="ctf-code-left">Cookie: UID=1234567;caresgiven=0;template=hostile</div><br><br>
                A poorly coded application might contain the following vulnerable code block:<br><br>
                <div class="ctf-code-left">$template = 'hostile.php';<br>if ( is_set( $_COOKIE['TEMPLATE'] ) )<br>&nbsp;&nbsp;$template = $_COOKIE['TEMPLATE'];<br>include ( "/home/users/app/templates/" . $template );<br></div><br><br>
                An attacker can use the same traversal attack on the cookie parameter to attempt to access the "/etc/password" file:<br><br>
                <div class="ctf-code-left">Cookie: UID=1234567;caresgiven=0;template=../../../../../../etc/password</div><br><br><br>
                <b>The following website has a directory traversal vulnerabliity.  Can you find it?</b>
            </section>
            <section>
                <section>&nbsp;</section>
                <div class="ctf-html-outter">
                <div class="ctf-html-inner-left ctf-url-scroll ">
                <section><div class="ctf-urlbar">`+CTF_5.urlbar+`</div></section>
                <section>
                <div class="ctf-urlwindow ctf-url-scroll" id="ctf-urlwindow">Loading...</div></div></div>
            </section>
            <br><br>
            Why did the correct URL work when the others wouldn't?
            
            <div class="ctf-html-outter">
            <div class="ctf-html-inner-left">
        
            <form id="ctf5-flag">
            <div class="ctf-code-left">
            <span class="ctf-block"><input type="radio" name="answer" value="linux"><label falor="submit">&nbsp;/var/html/www/admin/get.inc is a Windows IIS file.</label></span>
            <span class="ctf-block"><input type="radio" name="answer" value="encode"><label for="submit">&nbsp;The requested URL is correct, it is just using URL encoding.</label></span>
            <span class="ctf-block"><input type="radio" name="answer" value="shadow"><label for="submit">&nbsp;The shadow file is available to remote users on both Windows and Linux.</label></span>
            <span class="ctf-block"><input type="radio" name="answer" value="noresource"><label for="submit">&nbsp;You must always first remove the resource from the URL in order to permform direcotry traversal attacks.</label></span>
        
            <section>&nbsp;</section>
            <div class="ctf-html-inner-text-center"><span class="ctf-block"><input type="submit" id="ctf5_flag_submit" name="ctf5_flag_submit" data-micromodal-trigger="modal" class="ctf-button-red" value="Try it!"></span></div>
            </form>
            </div></div>
            
        `
        return view
    },
    after_render: async (cb) => {
        CTF_5.ctf5_url = "default"
        CTF_5.urlWindow()
        document.getElementById('url').addEventListener('change', function(){
            CTF_5.urlWindow()
        });
        document.getElementById('ctf5-flag').onsubmit = function(e){e.preventDefault(); return false;}
        document.getElementById('ctf5-flag').addEventListener('submit', function(){
            CTF_5.answer()
            .then(function(){
                if(CTF_5.answered) {
                    document.getElementById('nav-ctf5-next').addEventListener('click', function(){
                        ctf.modal.hideAll();
                        cb({action:"nav",to:"ctf/6"},null);
                    })
                }
            })
        });
    }
        
}

export default CTF_5;