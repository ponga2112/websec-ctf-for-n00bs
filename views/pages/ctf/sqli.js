// TODO: Code this up!
var introText = 'Merriam-Webster defines a database as: "a usually large collection of data organized especially for rapid search and retrieval (as by a computer)".  Databases are used by websites to store and organize data that may be input by users of the website or come from other sources such as other databases or file systems.  This data can then be retrieved at any time and presented to users of the website<br><br>SQL or Structured Query Language is a programming language that is used for managing data within a relational database.  It serves many functions such as adding, updating or deleting data, searching for data or controling who has access to data within a database.<br><br> SQL Injection vulnerabilities occur when information supplied by a user of the website is not properly checked and sanitized.  Because there are many characters that have special meaning within SQL language, allowing unsanitized input could have negative effects such as learning database stucture, stealing passwords or even deleting important data from the system.<br><br>'
var testText = 'label test start<br><br>'
let CTF_ = {
    
    render : async () => {
        
        let view =  /*html*/`
            <section class="section">
            <h2>Capture the Flag</h2>
            <hr width="50%" />
            <h3>SQL Injection Challenge</h3>
            </section>
            <section>
                <p>In this section, we will explore SQL Injection vulnerabilities.</p><br><br>
                <label id="lblMainText"></label>
            </section>
            <section>
                <button class="ctf-button-dark" id="btnSubmit"><b>Submit Answer</b><br><br><br>
                <button class="ctf-button-dark" id="btnIntro"><b>Return to Intro</b></button>
                <button class="ctf-button-dark" id="btnStartSQL"><b>Start SQL Challenge</b></button>
            </section>
        `   
        return view
        
    },
    after_render: async (btnEvents) => {
        document.getElementById('lblMainText').innerHTML = introText;
        document.getElementById('btnIntro').style.visibility = 'hidden';
        document.getElementById('btnSubmit').style.visibility = 'hidden';
        document.getElementById('btnStartSQL').style.visibility = 'visible';
        document.getElementById('btnStartSQL').addEventListener('focus', function(){
            document.getElementById('lblMainText').innerHTML = testText;
            document.getElementById('btnIntro').style.visibility = 'visible';
            document.getElementById('btnSubmit').style.visibility = 'visible';
            document.getElementById('btnStartSQL').style.visibility = 'hidden';
        });
        document.getElementById('btnIntro').addEventListener('focus', function(){
            document.getElementById('lblMainText').innerHTML = introText;
            document.getElementById('btnIntro').style.visibility = 'hidden';
            document.getElementById('btnSubmit').style.visibility = 'hidden';
            document.getElementById('btnStartSQL').style.visibility = 'visible';
        });
    }
        
}

export default CTF_;