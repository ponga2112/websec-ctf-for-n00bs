// TODO: Code this up!
let CTF_1 = {
    render : async () => {
        let view =  /*html*/`

            <section class="section">
              <div id="xss_header">
                <h2>Cross-Site Scripting</h2>
                <img src="/assets/images/flag_trasnsparent_378x487.png" width="100">
                <hr width="50%" />
              </div>
            </section>
            <section>
              <div id="about">
                <p>A <strong>Cross-Site Scripting (XSS)</strong> vulnerability can come in several flavors -- <strong>Reflected</strong>, <strong>Stored</strong>, and <strong>DOM-based</strong>. All three are a type of injection where malicious code is executed on a victim's browser through means of a website.</p>
                <br>
                <p>The impact of this type of attack can range from superficial to outright carnage! Site defacement might take place if the attacker's intent is less malicious, but an unlucky victim might find their session information stolen -- quickly leading to account theft! Some victims might never be aware they've been had, such as in the case of a malicious cryptocurrency miner added to the webpage.. running silently in the background but using up resources. In an exteme case and when combined with other dangerous exploits (such as a web browser sandbox escape), XSS could even lead to a takeover of the victim's computer!</p><br>
                <br>
                <p><strong>Reflected XSS</strong>: </p><br>
                <p><strong>Stored XSS</strong>: </p><br>
                <p><strong>DOM-based XSS</strong>: </p><br>
                <br>
                <p>More info about XSS here</p><br>
                <br><br>
                <hr width="50%" />
                <br><br>
              </div>
            </section>
            <section>
              <div id="xss_challenge_1">
                <p>Try your hand at a Stored XSS attack by taking a look below at Becky's social media post. She loves to receive comments from her friends and family on all her pictures, but little does she know that every comment is an opportunity for an attacker to store malicous code!</p><br>
                <p>You are able to add your own comments to Becky's photo, so feel free to say something nice -- or copy the code samples from the Word Bank below and see what happens.
                </p><br>
                <br>

                <div id="becky_post">
                  <img src="/assets/images/xss/icon_user_64x64.png" /> <strong>Becky</strong> added a new photo:
                  <br>
                  <img id="becky_post" src="/assets/images/xss/becky_post_550x309.jpg" width="500" style="border:5px solid black" />
                  <br>
                  <img id="becky_likes" src="/assets/images/xss/icon_heart_32x32.png" width="16" onmouseover="this.style.cursor='pointer'" onclick="imgLike()" /> [1,381] ................. Comments [var]
                </div>

                <br><br>

                <!-- START STATIC COMMENTS -->
                <div id="static_comments">
                  <div class="ctf-code-left">
                    <img src="/assets/images/xss/icon_user_64x64.png" width="32" /> <b>Chad</b>:
                    <p>[Comment] Did you go surfing @Becky? We should totally go surfing.</p>
                  </div>
                  <img id="chad_likes" src="/assets/images/xss/icon_heart_32x32.png" width="16" onmouseover="this.style.cursor='pointer'" onclick="imgLike()" /> [var]

                  <br>

                  <div class="ctf-code-left">
                    <img src="/assets/images/xss/icon_user_64x64.png" width="32" /> <b>Esther</b>:
                    <p>Oh, I love my favourite grand-daughter! Remember to use sunscreen! Also Uncle John is with the lord now.</p>
                  </div>
                  <img id="esther_likes" src="/assets/images/xss/icon_heart_32x32.png" width="16" onmouseover="this.style.cursor='pointer'" onclick="imgLike()" /> [var]

                  <br>

                  <div class="ctf-code-left">
                    <img src="/assets/images/xss/icon_user_64x64.png" width="32" /> <b>Chance</b>:
                    <p>Are those legs or really big hot dogs..? Or.. regular hot dogs with really small glasses!?</p>
                  </div>
                  <img id="chance_likes" src="/assets/images/xss/icon_heart2_32x32.png" width="16" onmouseover="this.style.cursor='pointer'" onclick="imgLike()" /> [var]
                </div>
                <!-- END STATIC COMMENTS -->

                <br><br>

                <!-- START DYNAMIC COMMENTS -->
                <div id="dynamic_comments">
                  //Dynamic area for inserting user comments (max limit), with strict limits on comment content. Input must either exactly match strings from word bank (win condition/expectation: copy and paste correct item from word bank to win points), else sanitize all content but letters and numbers (this allows user to add their own custom comment, but no possibility for real injection).
                  <br>
                  //IF $usercomment == $whitelisted[wordbank] THEN initiate case condition
                  <br>
                  //ELSE $usercomment.sanitize() AND cut to maximum character limit if larger
                </div>
                <!-- END DYNAMIC COMMENTS -->

                <br><br>


              </div>
            </section>


            <div class='form'>
              <span class="ctf-block">
                <form>
                  <label for="comment_content">Comment</label>
                  <br>
                  <textarea id="comment_content" rows="5" col="30" id="bodyText"></textarea>
                  <br>
                  <input type="submit" value="Submit">
                </form>
              </span>
              <br>
            </div>

            <br><br>



            Word Bank:<br><br>
            &#x22;&#x3E;&#x3C;script&#x3E;alert()&#x3C;/script&#x3E;
            <input type="text" value="&#x22;&#x3E;&#x3C;script&#x3E;alert()&#x3C;/script&#x3E;" id="wordbank_1">
            <button onclick="cpyText()">Copy text</button><br>

            &#x3C;strong&#x3E;Test!&#x3C;/strong&#x3E;
            <input type="text" value="&#x3C;strong&#x3E;Test!&#x3C;/strong&#x3E;" id="wordbank_2">
            <button onclick="cpyText()">Copy text</button><br>

            <script>
            function cpyText() {
              let copyText = document.getElementById("wordbank_1");
              copyText.select();
              copyText.setSelectionRange(0, 99999);
              document.execCommand("copy");
              alert("Copied the text: " + copyText.value);
            }
            </script>





            <br><br><br><br>



            <!-- Multiple failed attempts at a toggle image for like button. Man I suck. -->

            <input type="image" id="imgplus2" src="/assets/images/xss/icon_heart_32x32.png" width="16"></input>

            <script>
              function imgLike() {
                var img = document.getElementById('imgplus').src;

                if (img.indexOf('icon_heart_32x32.png')!=-1) {
                    document.getElementById('imgplus').src  = "/assets/images/xss/icon_heart2_32x32.png";
                }
                 else {
                   document.getElementById('imgplus').src = "/assets/images/xss/icon_heart2_32x32.png";
               }
              }
              </script>
            <img src="/assets/images/xss/icon_heart_32x32.png" width="16" onmouseover="this.style.cursor='pointer'" onclick="imgLike()" />



            <script>
            function toggleImg() {
              let initialImg = document.getElementById("imgplus").src;
              let srcTest = initialImg.includes('/assets/images/xss/icon_heart_32x32.png');
              let newImg = {
                'true':'/assets/images/xss/icon_heart2_32x32.png',
                'false':'/assets/images/xss/icon_heart_32x32.png'}[srcTest];

              return newImg;
            }</script>



        `
        return view
    },
    after_render: async () => {}

}

export default CTF_1;
