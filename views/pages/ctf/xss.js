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
  comment: [``,`Did you go surfing <a>@Becky?</a> We should totally go surfing.`,`Oh, I love my favourite grand-daughter! Remember to use sunscreen! Also Uncle John is with the lord now.`,`Are those legs or really big hot dogs..? Or.. regular hot dogs with really small glasses!? :P`],

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
        <h2><b>Challenge 1</b></h2>
        <div id="challengeText">
          <p>Try your hand at a Stored XSS attack by taking a look below at Becky's social media post. She loves to receive comments from her friends and family on all her pictures, but little does she know that every comment is an opportunity for an attacker to store malicous code!</p><br>
          <p>You are able to add your own comments to Becky's photo, so feel free to say something nice -- or copy the code samples from the Word Bank below and see what happens.
          </p>
        </div>
          
        <br><br>

        
        <div class="ctf-socialmedia-post" border-style="solid" id="full_post">
          <!-- START BECKY POST tf-socialmedia-post-->
          <div id="becky_post">
          <h1 class="cft-inline-block">`+CTF_1.person+`</h1> <strong>Becky</strong> added a new photo
            <br><br>
            <div class="ctf-html-outter">
            <img src="data:image/png;base64,`+blog_image+`" width="500" />
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
        <button id="wb5_button">Paste String</button>
      </div>
      <!-- END WORD BANK -->

        `
    return view
  },
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
            h = h+flag_good+`Correct! <section>This XSS payload is prepended by a null byte character <i>%00</i>. Null bytes are useful for breaking parsers, or things that would otherwise 
            santitize our string. In addition, the XSS payload itself is <b>HTML encoded</b> and relies on character case evasion. Writing the payload in this manner is useful in this case since this particular web application 
            is (<i>inexplicably</i>) decoding the string before inserting it into the document and is not filtering "bad" strings very well. This type if coding mistake, generally not handling user supplied strings safely, is <b>very</b> common.
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
