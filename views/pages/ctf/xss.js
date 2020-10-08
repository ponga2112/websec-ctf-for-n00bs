let CTF_1 = {
  heart: `<svg class="heart_empty" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg>`,
  heart2: `<svg class="heart_fill" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    </svg>`,
    person_op: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M2 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3zm6 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 11.825 10.623 11 8 11s-4.146.826-5 1.755V13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
  </svg>`,
  person: `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
  <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
</svg>`,

  wordbank: [`"><script>alert()</script>`, `Test<strong>Test!</strong>Test`, `Test&#x3C;strong&#x3E;Test!&#x3C;/strong&#x3E;Test`,`' or '1'='1';`,`%00&#x22;&#x3e;&#x3c;sCrIpT&#x3e;aLeRt&#x28;&#x29;&#x3c;&#x2f;sCrIpT&#x3e;`],
  wordbank_enc: [`&#x22;&#x3E;&#x3C;script&#x3E;alert()&#x3C;/script&#x3E`, `Test&#x3C;strong&#x3E;Test!&#x3C;/strong&#x3E;Test`, `Test&amp;#x3C;strong&amp;#x3E;Test!&amp;#x3C;/strong&amp;#x3E;Test`,`&apos; or &apos;1&apos;=&apos;1&apos;&semi;`,`&#x25;00&amp;#x22;&amp;#x3e;&amp;#x3c;sCrIpT&amp;#x3e;aLeRt&amp;#x28;&amp;#x29;&amp;#x3c;&amp;#x2f;sCrIpT&amp;#x3e;`],

  copyToClipboard(str) {
    // /* ——— Derived from: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
    //        improved to add iOS device compatibility——— */
    // const el = document.createElement('textarea'); // Create a <textarea> element
    // let storeContentEditable = el.contentEditable;
    // let storeReadOnly = el.readOnly;
    // el.value = str; // Set its value to the string that you want copied
    // el.contentEditable = true;
    // el.readOnly = false;
    // el.setAttribute('readonly', false); // Make it readonly false for iOS compatability
    // el.setAttribute('contenteditable', true); // Make it editable for iOS
    // el.style.position = 'absolute';
    // el.style.left = '-9999px'; // Move outside the screen to make it invisible
    // document.body.appendChild(el); // Append the <textarea> element to the HTML document
    // const selected =
    //   document.getSelection().rangeCount > 0 // Check if there is any content selected previously
    //     ? document.getSelection().getRangeAt(0) // Store selection if found
    //     : false; // Mark as false to know no selection existed before
    // el.select(); // Select the <textarea> content
    // el.setSelectionRange(0, 999999);
    // document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
    // document.body.removeChild(el); // Remove the <textarea> element
    // if (selected) {
    //   // If a selection existed before copying
    //   document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    //   document.getSelection().addRange(selected); // Restore the original selection
    // }
    // el.contentEditable = storeContentEditable;
    // el.readOnly = storeReadOnly;
    document.getElementById('user_comment').value = str;
  },

  icon_32: `<img src="/assets/images/xss/icon_user_64x64.png" width="32" />`,
  username: [`Becky`,`Chad`,`Esther`,`Chance`],
  comment: [``,`Did you go surfing <a>@Becky?</a> We should totally go surfing.`,`Oh, I love my favourite grand-daughter! Remember to use sunscreen! `,`This isn't a risqué photo at all, excellent! :P`],

  comNum: 3,
  likNum: 42,


  addComment : async (handle,text) => {
    let d = document.createElement('div');
    d.className = "ctf-code-left";
      let html = `<h1 class="cft-inline-block">`+CTF_1.person+`</h1> <b>`+handle+`</b>:
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
        <h2><b>About</b></h2>
        <div id="about" class="ctf-html-inner-text-center">
          <p>A <b>Cross-Site Scripting (XSS)</b> vulnerability can come in several flavors -- <b>Reflected</b>, <b>Stored</b>, and <b>DOM-based</b>. All three are a type of injection where javascript is executed on a victim's browser through means of a website.</p>
          <br>
          <p>The impact of this type of attack can range from superficial to outright carnage! Site defacement might take place if the attacker's intent is less malicious, but an unlucky victim might find their session information stolen -- quickly leading to account theft or unauthorized actions. Some victims might never be aware they've been had, such as in the case of cryptocurrency miner malware added to the webpage.. running silently in the background while using up resources.</p><br>
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
        <h2><b>Challenge 1</b></h2>
        <div id="challengeText">
          <p>Try your hand at a Stored XSS attack by taking a look below at Becky's social media post. She loves to receive comments from her friends and family on all her pictures, but little does she know that every comment is an opportunity for an attacker to store malicous code!</p><br>
          <p>You are able to add your own comments to Becky's photo, so feel free to say something nice -- or copy the code samples from the Word Bank below and see what happens.
          </p>
        </div>
        <br>

        <div class="ctf-socialmedia-post" border-style="solid" id="full_post">
          <!-- START BECKY POST ctf-socialmedia-post-->
          <div id="becky_post">
          <h1 class="cft-inline-block">`+CTF_1.person+`</h1> <strong>Becky</strong> added a new photo
            <br><br>
            <div class="ctf-html-outter">
            <img src="data:image/jpeg;base64,`+blog_image+`" width="500" />
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
            <h1 class="cft-inline-block">`+CTF_1.person+`</h1> <b>`+CTF_1.username[1]+`</b>:
                <p>`+CTF_1.comment[1]+`</p>
            </div>
            <br>
            <div class="ctf-code-left">
                <h1 class="cft-inline-block">`+CTF_1.person+`</h1> <b>`+CTF_1.username[2]+`</b>:
                <p>`+CTF_1.comment[2]+`</p>
            </div>
            <br>
            <div class="ctf-code-left">
            <h1 class="cft-inline-block">`+CTF_1.person+`</h1> <b>`+CTF_1.username[3]+`</b>:
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
              <button type="button" id="comment_submit">Submit</button>
              <button type="button" id="comment_submit_modal" data-micromodal-trigger="modal" class="hidden"></button>
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
        <button id="wb1_button">Paste String</button><br><br>

        <input type="text" value="`+CTF_1.wordbank_enc[1]+`" id="wordbank_2" readonly="true">
        <button id="wb2_button">Paste String</button><br><br>

        <input type="text" value="`+CTF_1.wordbank_enc[2]+`" id="wordbank_3" readonly="true">
        <button id="wb3_button">Paste String</button><br><br>

        <input type="text" value="`+CTF_1.wordbank_enc[3]+`" id="wordbank_4" readonly="true">
        <button id="wb4_button">Paste String</button><br><br>

        <input type="text" value="`+CTF_1.wordbank_enc[4]+`" id="wordbank_5" readonly="true">
        <button id="wb5_button">Paste String</button><section>&nbsp;</section><section>&nbsp;</section>
      </div>
      <!-- END WORD BANK -->

        `
    return view
  },
  // TODO: map enter button to submit
  // TODO: make fields bigger
  
  after_render: async (cb) => {

    //USER COMMENT - CHALLENGE SWITCHBOARD
    document.getElementById('comment_submit').addEventListener('click', function () {
      //console.log("debug: event fired with text: "+document.getElementById('user_comment').value)
      if(CTF_1.comNum > "30"){
        ctf.modal.set("Error","Too many comments! Refresh the page and try again.","");
      }
      else{      
        if(document.getElementById('user_comment').value == CTF_1.wordbank[0]){
          CTF_1.addComment(ctf.state.API.handle,ctf.htmlEncode(document.getElementById('user_comment').value));
          CTF_1.answer(0);
          document.getElementById('user_comment').value = "";
          
          CTF_1.comNum++;
          document.getElementById(`comNumDisplay`).innerHTML = CTF_1.comNum;
        }
        else if(document.getElementById('user_comment').value == CTF_1.wordbank[1]){
          //ctf.modal.set("Success","Wordbank Item 2","");
          CTF_1.addComment(ctf.state.API.handle,ctf.htmlEncode(document.getElementById('user_comment').value));
          CTF_1.answer(1);
          document.getElementById('user_comment').value = "";
          
          CTF_1.comNum++;
          document.getElementById(`comNumDisplay`).innerHTML = CTF_1.comNum;
        }
        else if(document.getElementById('user_comment').value == CTF_1.wordbank[2]){
          //ctf.modal.set("Success","Wordbank Item 3","");
          CTF_1.addComment(ctf.state.API.handle,ctf.htmlEncode(document.getElementById('user_comment').value));
          CTF_1.answer(2);
          document.getElementById('user_comment').value = "";
          
          CTF_1.comNum++;
          document.getElementById(`comNumDisplay`).innerHTML = CTF_1.comNum;
        }
        else if(document.getElementById('user_comment').value == CTF_1.wordbank[3]){
          //ctf.modal.set("Nope!","This is actually a potential SQL Injection string. While there are some comparisons to XSS, this type of attack will be covered later.<br><br>Please try again!",``);
          CTF_1.addComment(ctf.state.API.handle,ctf.htmlEncode(document.getElementById('user_comment').value));
          CTF_1.answer(3);
          document.getElementById('user_comment').value = "";
          
          CTF_1.comNum++;
          document.getElementById(`comNumDisplay`).innerHTML = CTF_1.comNum;
        }
        //Challenge win condition
        else if(document.getElementById('user_comment').value == CTF_1.wordbank[4]){
          //let f = new ctf.flag(100,1,2)
          //ctf.capture(f);

          //ctf.modal.set("Challenge complete!","You have been awarded 100 points.<br>Please click the button below to continue.",`<button class="ctf-button-red" id="nav-ctf1-next"><b>Next Challenge</b></button>`);
          CTF_1.addComment(ctf.state.API.handle,ctf.htmlEncode(document.getElementById('user_comment').value));
          CTF_1.answer(4).then(function(){
            if(CTF_1.answered) {
                document.getElementById('nav-ctf1-next').addEventListener('click', function(){
                    ctf.modal.hideAll();
                    cb({action:"nav",to:"ctf/2"},null);
                })
            }
        });
          document.getElementById('user_comment').value = "";
          
          CTF_1.comNum++;
          document.getElementById(`comNumDisplay`).innerHTML = CTF_1.comNum;
        }
        //Empty condition, no comment made
        else if(document.getElementById('user_comment').value == ''){
          Function.prototype();
        }
        // This bad boy right here is any comment from user that is not EXACTLY a match from the 5 item Wordbank
        else {
          CTF_1.answer(-1);
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
  },
  answer : async (wordbank_id) => {
    let a = null
    //console.log("debug: answer() called with "+String(wordbank_id))
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
    let isModalRequested = true;

    if(ctf.answerstatus.one == 'true') {
      h = h+`<section>This question has already been answered correctly.</section>`
      b = `<button class="ctf-button-red" id="nav-ctf1-next"><b>Next Challenge</b></button>`
  } else {
      switch(wordbank_id){
          case 0:
              h = h+flag_bad+`Good choice, but.. <section>This is a classic XSS payload and a good choice. However, in XSS, context is everything and in this particular context, this payload will not quite work.</section>`
              CTF_1.points = CTF_1.points-8;
              break;
          case 1:
              h = h+flag_bad+`Nope, there is no XSS (<i>javascript</i>) in this particular string. Although, you may be able to inject arbitrary HTML, we are looking for XSS in this challenge.`
              CTF_1.points = CTF_1.points-12;
              break;
          case 2:
              h = h+flag_bad+`Nope, there is no XSS (<i>javascript</i>) in this particular string. Although, you may be able to inject arbitrary HTML, we are looking for XSS for this challenge.`
              CTF_1.points = CTF_1.points-12;
              break;
          case 3:
            h = h+flag_bad+`Nope, that's not quite right. This is actually a potential SQL Injection string. While there are some comparisons to XSS, this type of attack will be covered later.`
            CTF_1.points = CTF_1.points-10;
            break;
          case 4:
              CTF_1.answered = true;
              if(CTF_1.points < 1) {
                  CTF_1.points = 0;
              }
              ctf.answerstatus.one = 'true'
              h = h+flag_good+`Correct! <section>This XSS payload is prepended by a null byte character <i>%00</i>. Null bytes are useful for breaking parsers, or things that would otherwise 
              santitize our string. In addition, the XSS payload itself is <b>HTML encoded</b> and relies on character case evasion. Writing the payload in this manner is useful in this case since this particular web application 
              is (<i>inexplicably</i>) decoding the string before inserting it into the document and is not filtering "bad" strings very well. Unsafe handling of user-supplied strings, is a <b>very</b> common type of coding mistake.
              </section><section class="ctf-html-inner-text-center">Points Earned: `+String(CTF_1.points)+`</section>`
              // nav outta here
              b = `<button class="ctf-button-red" id="nav-ctf1-next"><b>Next Challenge</b></button>`
              // this is a flag
              let f = new ctf.flag(CTF_1.points,1,2)
              ctf.capture(f);
              break;
          default:
            isModalRequested = false
            CTF_1.points = CTF_1.points-1;
      }
    }
    if(isModalRequested) {
      h=h+`</div>`
      ctf.modal.set("Results",h,b);
      document.getElementById('comment_submit_modal').click();
    }
    //console.log(String(isModalRequested))
  },
  points: 100,
  answered: false,
}
export default CTF_1;

let blog_image = `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`
