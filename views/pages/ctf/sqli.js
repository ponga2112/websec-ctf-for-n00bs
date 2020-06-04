// TODO: Code this up!
var headingText = '<h3>In this section, we will explore SQL Injection vulnerabilities.</h3><br><br><br>'
var intro1Text = 'Merriam-Webster defines a database as: "a usually large collection of data organized especially for rapid search and retrieval (as by a computer)".  Databases are used by websites to store and organize data that may be input by users of the website or come from other sources such as other databases or file systems.  This data can then be retrieved at any time and presented to users of the website<br><br>SQL or Structured Query Language is a programming language that is used for managing data within a relational database.  It serves many functions such as adding, updating or deleting data, searching for data or controling who has access to data within a database.<br><br> SQL Injection vulnerabilities occur when information supplied by a user of the website is not properly checked and sanitized.  Because there are many characters that have special meaning within SQL language, allowing unsanitized input could have negative effects such as learning database stucture, stealing passwords or even deleting important data from the system.<br><br>'
var intro2Text = 'There are several different companies with their own proprietary databases such as MicroSoft SQL Server, Oracle Database and MySQL Server.  Each database has its own set of special chacters that are used within SQL queries.  In this challenge we will be using MicroSoft SQL syntax.<br><br>Here is a list of special characters used within MS SQL Server and their purpose:<br><br><table style="margin-left:auto;margin-right:auto;"><tr><td>Character</td><td width=20px></td><td>Purpose</td></tr><tr><td>%</td><td></td><td>Wildcard - Zero or more characters</td></tr><tr><td>_</td><td></td><td>Wildcard - Single character</td></tr><tr><td>[ ]</td><td></td><td>Wildcard - Any single character within the brackets</td></tr><tr><td>^</td><td></td><td>Wildcard - Any character not in the brackets</td></tr><tr><td>-</td><td></td><td>Wildcard - A range of characters</td></tr><tr><td>\'</td><td></td><td>Identifies the start and end of a string</td></tr><tr><td>"</td><td></td><td>Identifies the start and end of a string</td></tr><tr><td>--</td><td></td><td>Used for comments</td></tr><tr><td>`</td><td></td><td>Identifies table and column identifiers</td></tr><tr><td>\\</td><td></td><td>Escape Character</td></tr></table><br><br>'
var intro3Text = 'Websites often have forms on them so users can log in.  There is usually a userame and password field located on the website.  After a user submits his credentials, they are checked against the correct credentials stored within the database.<br><br>A poorly coded example may look like this:<br><br>userName = getRequestString("user");<br>userPassword = getRequestString("password");<br><br>sql = \'SELECT * FROM Users WHERE Name =\' + userName + \' " AND Pass=" \' + userPassword + \' " \';<br><br>If the user entered jsmith and 1l0veT@cos then the full sql statement would be:<br><br>SELECT * FROM Users WHERE Name ="jsmith" AND Pass="1l0veT@cos"<br><br>The problem with this is the developers are relying on the users to input valid information.  If malformed data is sent to the server, it could react in inappropriate ways.  In this example, if a user was to enter " or "a"="a into the password field, it would change the sql statement to the following:<br><br>SELECT * FROM Users WHERE Name ="jsmith" AND Pass="1l0veT@cos" or "a"="a"<br><br>The first double quote before the "or" will close the quotation marks around "1l0veT@cos" and move it to the very end of the statement after the second "a". Since "a"="a" will always evaluate to true, the user would be able to log in without needing to know the correct password.<br><br>'
var challenge1Text = 'If you saw the following log in screen, what might you do to try and log in and/or steal account numbers?<br><br><img src="/assets/images/login.png"></img><br><br>Please select a SQL injection from the list below:<br><br><br><br>'
let CTF_ = {
    
    render : async () => {
        
        let view =  /*html*/`
            <section class="section">
            <h2>Capture the Flag</h2>
            <hr width="50%" />
            <h3>SQL Injection Challenge</h3>
            </section>
            <section>
                <label id="lblHeadingText"></label>
                <label id="lblMainText"></label>
            </section>
            <section>
                <button class="ctf-button-dark" id="btnIntro1"><b>Intro Page 1</b></button>
                <button class="ctf-button-dark" id="btnIntro2"><b>Intro Page 2</b></button>
                <button class="ctf-button-dark" id="btnIntro3"><b>Intro Page 3</b></button>
                <button class="ctf-button-dark" id="btnChallenge1"><b>Challenge 1</b></button>
            </section>
        `   
        return view
        
    },
    after_render: async (btnEvents) => {
        document.getElementById('lblHeadingText').innerHTML = headingText;
        document.getElementById('lblMainText').innerHTML = intro1Text;
        document.getElementById('btnIntro1').disabled = true;
        document.getElementById('btnIntro2').disabled = false;
        document.getElementById('btnIntro3').disabled = false;
        document.getElementById('btnChallenge1').disabled = false;

        document.getElementById('btnIntro1').addEventListener('focus', function(){
            document.getElementById('lblMainText').innerHTML = intro1Text;
            document.getElementById('btnIntro1').disabled = true;
            document.getElementById('btnIntro2').disabled = false;
            document.getElementById('btnIntro3').disabled = false;
            document.getElementById('btnChallenge1').disabled = false;
        });
        document.getElementById('btnIntro2').addEventListener('focus', function(){
            document.getElementById('lblMainText').innerHTML = intro2Text;
            document.getElementById('btnIntro1').disabled = false;
            document.getElementById('btnIntro2').disabled = true;
            document.getElementById('btnIntro3').disabled = false;
            document.getElementById('btnChallenge1').disabled = false;
        });
        document.getElementById('btnIntro3').addEventListener('focus', function(){
            document.getElementById('lblMainText').innerHTML = intro3Text;
            document.getElementById('btnIntro1').disabled = false;
            document.getElementById('btnIntro2').disabled = false;
            document.getElementById('btnIntro3').disabled = true;
            document.getElementById('btnChallenge1').disabled = false;
        });
        document.getElementById('btnChallenge1').addEventListener('focus', function(){
            document.getElementById('lblMainText').innerHTML = challenge1Text;
            document.getElementById('btnIntro1').disabled = false;
            document.getElementById('btnIntro2').disabled = false;
            document.getElementById('btnIntro3').disabled = false;
            document.getElementById('btnChallenge1').disabled = true;
        });
    }
        
}

export default CTF_;