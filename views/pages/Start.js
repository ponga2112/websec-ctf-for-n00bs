
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
                    Cross-Site Scripting, or "XSS" for short, is an attack type where a vulnerable application allows a user to supply arbitrary JavaScript code 
                    that would then be executed on the victims browser. XSS is a very common vulnerabilty in web apps and a favorite target for attackers. 
                    XSS can and has led to theft of a victims account data, unauthorized actions being performed, and other negative outcomes.
                    </section>
                    <section>&nbsp;</section>
                    <section>
                    You can read more here: <a target="_blank" href="https://owasp.org/www-community/attacks/xss/">XSS on OWASP</a>
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
                    An Authorization Bypass is a flaw in <i>access controls</i> set by the web application. Access controls are intended to restrict what actions any given user can perform. 
                    In order for a certain action to take place, a user must be authorized (<i>permitted</i>) to do so. 
                    If the control or mechanism responsible for checking that a user is authorized can be circumvented, that would then be an Authorization Bypass.
                    </section>
                    <section>&nbsp;</section>
                    <section>
                    You can read more here: <a target="_blank" href="https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A2-Broken_Authentication">AuthZ Bypass on OWASP</a>
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
                    A Logic Bypass is where the "flow" of the application can be circumvented. For example, let's say an online store front sells widgets. During the checkout process, 
                    the web application flow should be 1. <i>Add item to cart</i>, 2. <i>Specify Quantity</i>, 3. <i>Checkout/Payment</i>. Naturally, you would assume that the total cost presented to the 
                    user would be (Price <b>*</b> Quantity). However, if a logic bypass vulnerabilty were present in the application such that the total price did not take into account 
                    the quantity of items requested, an attacker could order many of the same item and only pay for it once. 
                    </section>
                    <section>&nbsp;</section>
                    <section>
                    You can read more here: <a target="_blank" href="https://owasp.org/www-community/vulnerabilities/Business_logic_vulnerability">Logic Bypass on OWASP</a>
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
                    Directory Traversal or Path Traversal is a vulnerability where the attacker can request and view arbitrary files on a web server by providing file paths that "escape" outside of the website's <i>web root directory</i>. 
                    </section>&nbsp;<section>
                    A "<i>web root directory</i>" is the location where web site files are being hosted by a web server - in turn, this web server is nothing more than software running on a computer. 
                    Typically, a web server "serves" files located on its local disk. However, we do not want to serve the entire disk (think "C: drive") but instead only a 
                    specific directory that contains our web site. If an attacker can "escape" that directory (<i>the web root</i>), they may be able to view any file on the computer. Definitely bad!
                    </section>
                    <section>&nbsp;</section>
                    <section>
                    You can read more here: <a target="_blank" href="https://owasp.org/www-community/attacks/Path_Traversal">DirTraversal on OWASP</a>
                    </section>
                `
            }
        );
        a.push(
            {
                id: `info-config`,
                title: `Application Misconfiguration`,
                body: /*html*/`
                    <section>
                    An Application Misconfiguration is not nessesarily a vulnerability in and of itself. A web application may have no vulnerabilities in its 
                    software, but if it's <i>configured</i> improperly, it could cause the web application to behave in unexpected ways and lead to a security compromise.
                    </section>&nbsp;<section>
                    A common example of this is leaving http (port 80) access open. Most web sites these days enforce http<b>s</b>, which means it's secure and encrypted.
                    If the non-encrypted channel to the web app is left open, attackers could leverage several techniques that would expose traffic of visiters to the site, leading to information theft and manipulation.
                    </section>
                    <section>&nbsp;</section>
                    <section>
                    You can read more here: <a target="_blank" href="https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A6-Security_Misconfiguration">Misconfiguration on OWASP</a>
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
                    SQL Injection (SQLi) is an attack where data sent to the web application is processed by a backend database server in an unintended manner. Many 
                    web applications store information in a database, typically a SQL database. The web application interacts with this database to retrieve and store data. If a SQLi 
                    vulnerability exists in the web application, an attacker may be able to supply SQL statements that are then processed by the database. For example, a 
                    database stores usernames and passwords for the web application. If a SQLi vulnerability is found, it may be possible for an attacker to dump the entire user 
                    table, thus exposing all users and passwords for the web application.
                    </section>
                    <section>&nbsp;</section>
                    <section>
                    You can read more here: <a target="_blank" href="https://owasp.org/www-community/attacks/SQL_Injection">SQLi on OWASP</a>
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
                    XML External Entity Injection (XXE) is an attack type that targets an XML parser in a web application to include XML of the attackers choosing. Many web 
                    applications use an API (Application Programming Interface) that "speaks" XML. If vulnerable to XXE, the attacker may be able to get the web application to 
                    perform arbitrary and risky actions supplied in the XML Entity.
                    </section>
                    <section>&nbsp;</section>
                    <section>
                    You can read more here: <a target="_blank" href="https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing">XXE on OWASP</a>
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
                    Local File Inclusion (LFI) is an attack type where a malicious user includes arbitrary files located on the file system by tampering with a web request.
                    </section>&nbsp;<section>
                    Examples of sensitive local files that an attacker may want to access are password files, registry data, certificates and encryption keys, etc.
                    By design, the web application should only serve files designated by the developers. An LFI vulnerability 
                    exposes any files on the local file system to be accessible by the attacker.
                    </section>
                    <section>&nbsp;</section>
                    <section>
                    You can read more here: <a target="_blank" href="https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/11.1-Testing_for_Local_File_Inclusion">LFI on OWASP</a>
                    </section>
                `
            }
        );
        // TODO: Missing Data Exposure !!
        // 
        a.push(
            {
                id: `info-rce`,
                title: `Remote Code Execution (RCE)`,
                body: /*html*/`
                    <section>
                    Remote Code Execution (RCE) is a vulnerability where an attacker supplies application code of their choice which the server then executes.
                    </section>&nbsp;<section>
                    A rather famous example of an RCE is the Apache Struts vulnerability in 2017 (CVE-2017-5638). Equifax was exploited by this RCE resulting in the theft of millions of consumers 
                    personal data.
                    </section>
                    <section>&nbsp;</section>
                    <section>There are several nuances within this category observed by parts of the infosec community. The term "Code Injection" may be used more generally, or "Remote Command Injection" in cases that specific limitations on code execution exist.</section>
                    <section>&nbsp;</section>
                    <section>
                    You can read more here: <a target="_blank" href="https://owasp.org/www-community/attacks/Code_Injection">RCE on OWASP</a>
                    </section>
                `
            }
        );
        a.push(
            {
                id: `info-data`,
                title: `Data Exposure`,
                body: /*html*/`
                    <section>
                    Sensitive Data Exposure is a broad class of vulnerability whereby a web application mistakenly reveals information that a regular user should ordinarily not have access to.
                    </section>&nbsp;<section>
                    Some examples might include a list of all users in the system, or precise software versions which may aid a hacker in targeting the application.
                    </section>
                    <section>&nbsp;</section>
                    <section>
                    You can read more here: <a target="_blank" href="https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A3-Sensitive_Data_Exposure">Data Exposure on OWASP</a>
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
        <h2>Welcome, `+ctf.state.API.handle+`</h2><img src="data:image/png;base64,`+ctf.flagImg+`" width="100">
        </section>
        <div>
            <div><section>
            Over the next 15 minutes or so, you will be guided through a series of <i>challenges</i>. These challenges are broken down by <b><i>attack type</i></b>. 
            In web application security, there several common attack types (<i>listed below</i>) that will be presented. You can read up on these ahead of time, 
            or simply start playing by clicking the button below.
            </section>
            </div><div class="center-content">
            <ul class="ctf-ul">
            `+ h_list +`
            </ul>
            </div><div>
            <hr width="70%" class="ctf-hr" />
            <section>
            <button class="ctf-button-dark" id="start-advance-button"><b>Start Playing!</b></button>
            </section><section>&nbsp;</section><section>&nbsp;</section></div>
        `
        return view
    },
    after_render: async (cb) => {
        document.getElementById('start-advance-button').addEventListener('click', function(){
            cb({action:"nav",to:"ctf/1"},null);
        });
        // Set up the Info Modals
        let c_list = await Start.info_entries();
        for (let i=0; i<c_list.length; i++ ) {
            document.getElementById(c_list[i].id).addEventListener('click', function(){
                ctf.modal.set(c_list[i].title,c_list[i].body,"").then(function(){
                    // override modal layout
                    document.getElementById('modal-content').classList.add('ctf-block');
                })
            })
        }
    }
}

export default Start;