// TODO: Code this up!
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
                Merriam-Webster defines a database as: "a usually large collection 
                of data organized especially for rapid search and retrieval (as by a computer)".
                Databases are used by websites to store and organize data that may be 
                input by users of the website or come from other sources such as other 
                databases or file systems.  This data can then be retrieved at any time 
                and presented to users of the website<br><br>
                SQL or Structured Query Language is a programming language that is used for 
                managing data within a relational database.  It serves many functions such 
                as adding, updating or deleting data, searching for data or controling who has 
                access to data within a database.<br><br>
                SQL Injection vulnerabilities occur when information supplied by a 
                user of the website is not properly checked and sanitized.  Because 
                there are many characters that have special meaning within SQL language,
                allowing unsanitized input could have negative effects such as learning 
                database stucture, stealing passwords or even deleting important data from the 
                system.<br><br>
            </section>
            <section>
                <button class="ctf-button-dark" id="start-sql-button"><b>Start SQL Challenge</b></button>
            </section>
        `   
        return view
    },
    after_render: async () => {}
        
}

export default CTF_;