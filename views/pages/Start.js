
// TODO: General UI issue/bug =  When navigating to another screen, page position in the viewport is not reset to the top of the content

let Start = {
    info_entries: async () => {
        let a = [];
        a.push(
            {
                id: `info-xss`,
                title: `Cross-Site Scripting (XSS)`,
                body: /*html*/`
                    <section>
                    Cross-Site Scripting, or "XSS" for short, is a type of attack where if an application is vulnerable, would allow an attacker to supply JavaScript code 
                    of their choice that would then be run by the victims browser.
                    </section>
                    <section>&nbsp;</section>
                    <section>
                    You can read more about here: <a target="_blank" href="https://owasp.org/www-community/attacks/xss/">XSS on OWASP</a>
                    </section>
                `
            }
        );
        a.push(
            {
                id: `info-auth`,
                title: `Authorization Bypass`,
                body: /*html*/`
                    <section>
                    Authorization Bypass...
                    </section>
                `
            }
        );
        a.push(
            {
                id: `info-logic`,
                title: `Logic Bypass`,
                body: /*html*/`
                    <section>
                    Logic Bypass...
                    </section>
                `
            }
        );
        a.push(
            {
                id: `info-dirs`,
                title: `Directory Traversal`,
                body: /*html*/`
                    <section>
                    Directory Traversal...
                    </section>
                `
            }
        );
        a.push(
            {
                id: `info-config`,
                title: `Application Mis-Configuration`,
                body: /*html*/`
                    <section>
                    Application Mis-Configuration...
                    </section>
                `
            }
        );
        a.push(
            {
                id: `info-sqli`,
                title: `SQL Injection (SQLi)`,
                body: /*html*/`
                    <section>
                    SQL Injection (SQLi)...
                    </section>
                `
            }
        );
        a.push(
            {
                id: `info-xxe`,
                title: `XML External Entity Injection (XXE)`,
                body: /*html*/`
                    <section>
                    XML External Entity Injection (XXE)...
                    </section>
                `
            }
        );
        a.push(
            {
                id: `info-lfi`,
                title: `Local File Inclusion (LFI)`,
                body: /*html*/`
                    <section>
                    Local File Inclusion (LFI)...
                    </section>
                `
            }
        );
        a.push(
            {
                id: `info-rce`,
                title: `Remote Command Injection (RCE)`,
                body: /*html*/`
                    <section>
                    Remote Command Injection (RCE)...
                    </section>
                `
            }
        );
        return a;
    },
    render: async () => {
        let c_list = await Start.info_entries();
        let h_list = ``;
        for (let i=0; i<c_list.length; i++ ) {
            h_list = h_list + '<li><a data-micromodal-trigger="modal" id="' + c_list[i].id + '">' + c_list[i].title + '</a></li>\n'
        }
        let view =  /*html*/`
        <section class="section-lite">
        <h2>Welcome, `+ctf.state.API.handle+`</h2><img src="/assets/images/flag_trasnsparent_378x487.png" width="100">
        </section>
        <div>
            <div><section>
            Over the next 15 minutes or so, you will guided through a series of challenges. These challenges are broken down by <i>attack type</i>. 
            In web application security, there several common attack types (<i>listed below</i>) that will be presented. You can read up on these ahead of time, 
            or simply start  click the <b>Start Playing</b> button below.
            </section>
            </div><div class="center-content">
            <ul class="ctf-ul">
            `+ h_list +`
            </ul>
            </div><div>
            <hr width="70%" class="ctf-hr" />
            <section>
            <button class="ctf-button-dark" id="start-advance-button"><b>Start Playing!</b></button>
            </section></div>
        `
        return view
    },
    after_render: async (cb) => {
        document.getElementById('start-advance-button').addEventListener('focus', function(){
            cb({action:"nav",to:"ctf/1"},null);
        });
        // Set up the Info Modals
        let c_list = await Start.info_entries();
        for (let i=0; i<c_list.length; i++ ) {
            document.getElementById(c_list[i].id).addEventListener('click', function(){
                ctf.modal.set(c_list[i].title,c_list[i].body,"").then(function(){
                    // override modals layout
                    // TODO: Setting style attributes is sloppy - Make this modal use a defined CSS class
                    document.getElementById('modal-content').setAttribute('style','display:block');
                })
            })
        }
    }
}

export default Start;