let CTF_1 = {
  heart: `<svg class="heart_empty" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg>`,
  heart2: `<svg class="heart_fill" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    </svg>`,

  wordbank: [`"><script>alert()</script>`, `Test<strong>Test!</strong>Test`, `Test&#x3C;strong&#x3E;Test!&#x3C;/strong&#x3E;Test`,`; OR 1==1;`,`%00&#x22;&#x3e;&#x3c;sCrIpT&#x3e;aLeRt&#x28;&#x29;&#x3c;&#x2f;sCrIpT&#x3e;`],
  wordbank_enc: [`&#x22;&#x3E;&#x3C;script&#x3E;alert()&#x3C;/script&#x3E`, `Test&#x3C;strong&#x3E;Test!&#x3C;/strong&#x3E;Test`, `Test&amp;#x3C;strong&amp;#x3E;Test!&amp;#x3C;/strong&amp;#x3E;Test`,`&semi; OR 1==1&semi;`,`&#x25;00&amp;#x22;&amp;#x3e;&amp;#x3c;sCrIpT&amp;#x3e;aLeRt&amp;#x28;&amp;#x29;&amp;#x3c;&amp;#x2f;sCrIpT&amp;#x3e;`],

  copyToClipboard(str) {
    /* ——— Derived from: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
           improved to add iOS device compatibility——— */
    const el = document.createElement('textarea'); // Create a <textarea> element
    let storeContentEditable = el.contentEditable;
    let storeReadOnly = el.readOnly;
    el.value = str; // Set its value to the string that you want copied
    el.contentEditable = true;
    el.readOnly = false;
    el.setAttribute('readonly', false); // Make it readonly false for iOS compatability
    el.setAttribute('contenteditable', true); // Make it editable for iOS
    el.style.position = 'absolute';
    el.style.left = '-9999px'; // Move outside the screen to make it invisible
    document.body.appendChild(el); // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0 // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0) // Store selection if found
        : false; // Mark as false to know no selection existed before
    el.select(); // Select the <textarea> content
    el.setSelectionRange(0, 999999);
    document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el); // Remove the <textarea> element
    if (selected) {
      // If a selection existed before copying
      document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
      document.getSelection().addRange(selected); // Restore the original selection
    }
    el.contentEditable = storeContentEditable;
    el.readOnly = storeReadOnly;
  },

  icon_32: `<img src="/assets/images/xss/icon_user_64x64.png" width="32" />`,
  username: [`Becky`,`Chad`,`Esther`,`Chance`],
  comment: [``,`Did you go surfing <a>@Becky?</a> We should totally go surfing.`,`Oh, I love my favourite grand-daughter! Remember to use sunscreen! Also Uncle John is with the lord now.`,`Are those legs or really big hot dogs..? Or.. regular hot dogs with really small glasses!? <img src=x></img>`],

  comNum: 3,
  likNum: 42,


  addComment : async (handle,text) => {
    let d = document.createElement('div');
    d.className = "ctf-code-left";
      let html = `<img src="/assets/images/xss/icon_user_64x64.png" width="32"> <b>`+handle+`</b>:
              <p>`+text+`</p>`
      d.innerHTML = html;
      document.getElementById('user-comments').appendChild(d);
      document.getElementById('user-comments').appendChild(document.createElement('br'));
      },

  render: async () => {
    let view =  /*html*/`
      <section class="section">
        <div id="xss_header">
          <h1>Cross-Site Scripting</h1>
          <img src="/assets/images/flag_trasnsparent_378x487.png" width="100">
          <hr width="50%" />
        </div>
      </section>

      <section>
        <h2><strong>About</strong></h2>
        <div id="about" style="ctf-html-inner-text-center">
          <p>A <b>Cross-Site Scripting (XSS)</b> vulnerability can come in several flavors -- <b>Reflected</b>, <b>Stored</b>, and <b>DOM-based</b>. All three are a type of injection where malicious code is executed on a victim's browser through means of a website.</p>
          <br>
          <p>The impact of this type of attack can range from superficial to outright carnage! Site defacement might take place if the attacker's intent is less malicious, but an unlucky victim might find their session information stolen -- quickly leading to account theft! Some victims might never be aware they've been had, such as in the case of a malicious cryptocurrency miner added to the webpage.. running silently in the background but using up resources. In an exteme case and when combined with other dangerous exploits (such as a web browser sandbox escape), XSS could even lead to a takeover of the victim's computer!</p><br>
          <p>More info about XSS here:</p>
          <a href="https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS)">OWASP TOP 10</a><br>
          <a href="https://portswigger.net/web-security/cross-site-scripting">PortSwigger</a><br>
          <a href="https://www.google.com/about/appsecurity/learning/xss/">Google Application Security</a>

        </div>
      </section>
      <br><br>
          <hr width="50%" />
          <br><br>
      
      <section>
        <h2><strong>Challenge 1</strong></h2>
        <div id="challengeText">
          <p>Try your hand at a Stored XSS attack by taking a look below at Becky's social media post. She loves to receive comments from her friends and family on all her pictures, but little does she know that every comment is an opportunity for an attacker to store malicous code!</p><br>
          <p>You are able to add your own comments to Becky's photo, so feel free to say something nice -- or copy the code samples from the Word Bank below and see what happens.
          </p>
        </div>
          
        <br><br>

        
        <div class="ctf-socialmedia-post" border-style="solid" id="full_post">
          <!-- START BECKY POST tf-socialmedia-post-->
          <div id="becky_post">
            <img src="/assets/images/xss/icon_user_64x64.png" /> <strong>Becky</strong> added a new photo
            <br><br>
            <div class="ctf-html-outter">
              <img id="becky_post" align="top" src="/assets/images/xss/becky_post_550x309.jpg" width="500" style="border:5px solid black" />
            </div>
            <div class="ctf-html-outter">
            <br>
              <span name="icon_heart" id="1_heart">`+CTF_1.heart+`</span> [<b><span id="likNumDisplay">`+CTF_1.likNum+`</span></b>] ................. Comments [<b><span id="comNumDisplay">`+CTF_1.comNum+`</span></b>]
            </div>
          </div>
          <!-- END BECKY POST -->

          <br>
        
          <!-- START STATIC COMMENTS -->
          <div id="static_comments">
            <div class="ctf-code-left">
                `+CTF_1.icon_32+` <b>`+CTF_1.username[1]+`</b>:
                <p>`+CTF_1.comment[1]+`</p>
            </div>
            <br>
            <div class="ctf-code-left">
                `+CTF_1.icon_32+` <b>`+CTF_1.username[2]+`</b>:
                <p>`+CTF_1.comment[2]+`</p>
            </div>
            <br>
            <div class="ctf-code-left">
                `+CTF_1.icon_32+` <b>`+CTF_1.username[3]+`</b>:
                <p>`+CTF_1.comment[3]+`</p>
            </div>
          </div>
          <!-- END STATIC COMMENTS -->


          <!-- START USER COMMENTS -->
          <div id="user-comments">
               
          </div>
          <br>
          <!-- END USERCOMMENTS -->
        </div>
        <br><br>
      </section>


      <!-- START USER COMMENT BOX -->
      <div class='ctf-code-left'>
        <span class="ctf-block">
        <h2>Comment</h2>
          <form>
            <textarea id="user_comment" rows="4" cols="32" id="bodyText" class="xss-textarea" maxlength="200"></textarea>
            <br>
            <div class="ctf-html-outter">
              <button type="button" id="comment_submit" data-micromodal-trigger="modal">Submit</button>
            </div>
          </form>
        </span>
      </div>
      <!-- END USER COMMENT -->

      <br><br>

      <!-- START WORD BANK -->
      <div class="ctf-code-left">
        <h2>Word Bank</h2>
        <br>
        <input type="text" value="`+CTF_1.wordbank_enc[0]+`" id="wb1" readonly="true">
        <button id="wb1_button">Copy text</button><br><br>

        <input type="text" value="`+CTF_1.wordbank_enc[1]+`" id="wordbank_2" readonly="true">
        <button id="wb2_button">Copy text</button><br><br>

        <input type="text" value="`+CTF_1.wordbank_enc[2]+`" id="wordbank_3" readonly="true">
        <button id="wb3_button">Copy text</button><br><br>

        <input type="text" value="`+CTF_1.wordbank_enc[3]+`" id="wordbank_4" readonly="true">
        <button id="wb4_button">Copy text</button><br><br>

        <input type="text" value="`+CTF_1.wordbank_enc[4]+`" id="wordbank_5" readonly="true">
        <button id="wb5_button">Copy text</button>
      </div>
      <!-- END WORD BANK -->

        `
    return view
  },
  after_render: async () => {

    //USER COMMENT - CHALLENGE SWITCHBOARD
    document.getElementById('comment_submit').addEventListener('click', function () {
      if(CTF_1.comNum > "12"){
        ctf.modal.set("Error","Too many comments! Refresh the page and try again.","");
      }
      else{      
        if(document.getElementById('user_comment').value == CTF_1.wordbank[0]){
          ctf.modal.set("Success","Wordbank Item 1","");
          CTF_1.addComment(ctf.state.API.handle,ctf.htmlEncode(document.getElementById('user_comment').value));

          document.getElementById('user_comment').value = "";
          
          CTF_1.comNum++;
          document.getElementById(`comNumDisplay`).innerHTML = CTF_1.comNum;
        }
        else if(document.getElementById('user_comment').value == CTF_1.wordbank[1]){
          ctf.modal.set("Success","Wordbank Item 2","");
          CTF_1.addComment(ctf.state.API.handle,ctf.htmlEncode(document.getElementById('user_comment').value));

          document.getElementById('user_comment').value = "";
          
          CTF_1.comNum++;
          document.getElementById(`comNumDisplay`).innerHTML = CTF_1.comNum;
        }
        else if(document.getElementById('user_comment').value == CTF_1.wordbank[2]){
          ctf.modal.set("Success","Wordbank Item 3","");
          CTF_1.addComment(ctf.state.API.handle,ctf.htmlEncode(document.getElementById('user_comment').value));

          document.getElementById('user_comment').value = "";
          
          CTF_1.comNum++;
          document.getElementById(`comNumDisplay`).innerHTML = CTF_1.comNum;
        }
        else if(document.getElementById('user_comment').value == CTF_1.wordbank[3]){
          ctf.modal.set("Success","Wordbank Item 3",``);
          CTF_1.addComment(ctf.state.API.handle,ctf.htmlEncode(document.getElementById('user_comment').value));

          document.getElementById('user_comment').value = "";
          
          CTF_1.comNum++;
          document.getElementById(`comNumDisplay`).innerHTML = CTF_1.comNum;
        }
        //Challenge win condition
        else if(document.getElementById('user_comment').value == CTF_1.wordbank[4]){
          let f = new ctf.flag(100,1,2)
          ctf.capture(f);

          ctf.modal.set("Challenge complete!","You have been awarded 100 points.<br>Please click the button below to continue.",`<button class="ctf-button-red" id="nav-ctf1-next"><b>Next Challenge</b></button>`);
          CTF_1.addComment(ctf.state.API.handle,ctf.htmlEncode(document.getElementById('user_comment').value));

          document.getElementById('user_comment').value = "";
          
          CTF_1.comNum++;
          document.getElementById(`comNumDisplay`).innerHTML = CTF_1.comNum;
        }
        //Empty condition, no comment made
        else if(document.getElementById('user_comment').value == ''){
          ctf.modal.set("Error","No content to submit!","");
        }
        // This bad boy right here is any comment from user that is not EXACTLY a match from the 5 item Wordbank
        else {
          ctf.modal.set("Success","Comment submitted","");
          CTF_1.addComment(ctf.state.API.handle,ctf.htmlEncode(document.getElementById('user_comment').value));
          document.getElementById('user_comment').value = "";

          CTF_1.comNum++;
          document.getElementById(`comNumDisplay`).innerHTML = CTF_1.comNum;
        }
      }
    })
    
    //COPY & PASTE WORDLIST BUTTONS
    document.getElementById('wb1_button').addEventListener('click', function(){
      CTF_1.copyToClipboard(CTF_1.wordbank[0]);
    })
    document.getElementById('wb2_button').addEventListener('click', function(){
      CTF_1.copyToClipboard(CTF_1.wordbank[1]);
    })
    document.getElementById('wb3_button').addEventListener('click', function(){
      CTF_1.copyToClipboard(CTF_1.wordbank[2]);
    })
    document.getElementById('wb4_button').addEventListener('click', function(){
      CTF_1.copyToClipboard(CTF_1.wordbank[3]);
    })
    document.getElementById('wb5_button').addEventListener('click', function(){
      CTF_1.copyToClipboard(CTF_1.wordbank[4]);
    })


    document.getElementById('1_heart').addEventListener('click', function () {
      if (document.getElementById("1_heart").children[0].classList.contains("heart_empty")) {
        document.getElementById("1_heart").innerHTML = CTF_1.heart2;
        CTF_1.likNum++;
        document.getElementById(`likNumDisplay`).innerHTML = CTF_1.likNum;
      }
      else {
        document.getElementById("1_heart").innerHTML = CTF_1.heart;
        CTF_1.likNum--;
        document.getElementById(`likNumDisplay`).innerHTML = CTF_1.likNum;
      }
    })
  }
}
export default CTF_1;
