// Development Helper Page
// To be REMOVED once upon Deployment
let Intro = {
    render: async () => {
        //console.log("render() called in Into");
        let view =  /*html*/`
            <section class="section">
            <h2>Capture the Flag</h2></section>
            <div><section>
            { Text Describing what this is all about.. }
            </section><section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida mauris velit, ut scelerisque purus rutrum eget. Ut ultrices congue magna, eget volutpat felis malesuada rhoncus. Nunc faucibus est massa, id fermentum dui tristique quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed leo rutrum, eleifend sapien a, fermentum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate massa magna, non malesuada augue egestas a. Praesent risus ligula, luctus ac laoreet hendrerit, malesuada eu sapien. In vel enim vulputate, laoreet nisl eget, viverra massa.
            </section><section>
            Nam leo dui, sodales vitae mauris a, pellentesque pretium enim. Cras dolor massa, sagittis ac vestibulum ut, tincidunt eget lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit quis velit vel posuere. Vivamus aliquet, massa et maximus volutpat, sapien diam efficitur odio, ut tempus augue nibh in justo. Cras a metus quis sapien finibus aliquet. Ut magna nisi, auctor eu tempus et, facilisis vel justo. Nunc justo lorem, tristique sed nisl sed, vehicula vulputate ipsum. Aenean elit sem, luctus id odio ut, porttitor egestas mauris. Nunc at urna nec eros gravida dapibus.
            </section><section>
            Integer vel erat accumsan, efficitur elit vitae, bibendum tortor. Sed sagittis neque eget diam posuere ullamcorper. Mauris eget diam id neque tempor tincidunt. Fusce a rutrum quam, vitae pulvinar est. Vivamus faucibus mauris a suscipit elementum. Cras odio justo, volutpat et maximus eu, condimentum vel ex. Nulla cursus velit id velit auctor aliquet. Etiam hendrerit ante id luctus rhoncus. Donec felis nisi, commodo ut tortor id, congue dictum est. Nullam maximus hendrerit tempus.
            </section><section>
            Mauris ullamcorper et lorem in egestas. Fusce ut nisl at sapien dictum mollis at ac mi. In eget purus et risus hendrerit consequat at at nulla. Nam vitae augue enim. Fusce quis ante sit amet massa mollis varius. Aliquam mollis libero dignissim tristique congue. Etiam cursus, arcu porta tincidunt egestas, neque massa pulvinar ex, vel mattis leo leo a sem. Vivamus in dapibus leo. Nulla gravida, erat a blandit suscipit, velit neque iaculis nunc, vitae fermentum sem urna vitae lacus.
            </h3></section></div><div>
            <hr width="70%" class="ctf-hr" />
            <section>
            <button class="ctf-button-dark" id="intro-advance-button" data-micromodal-trigger="modal"><b>Let's get started!</b></button>
            </section></div>
        `
        return view
    },
    after_render: async (cb) => {
        let reg = function() {
            document.getElementById('submit-handle').addEventListener('click', function(){
                let h = document.getElementById('register-handle').value
                if(Utils.validatePlayername(h)) {
                    // setup handle name
                    ctf.register(h);
                } else {
                    document.getElementById('register-tooltip').classList.remove('hidden');
                    document.getElementById('register-handle').classList.add('text-field-alert');
                    document.getElementById('register-handle').addEventListener('focus', function(){
                        document.getElementById('register-handle').classList.remove('text-field-alert');
                    });
                }
            });
        }
        let body = /*html*/`
        <div class="register-box">
            <section class="text-field-container">Whats your name?</section>
            <section class="text-field-container"><input class="text-field-modal" type="text" name="handle" value="" min="3" maxlength="20"/ id="register-handle"></section>
            <div class="line-break"></div>
            <div id="register-tooltip" class="register-tooltip hidden"><h5>Minumum 3 characters please</h5></div></div>
        `
        let footer = /*html*/`
            <button id="submit-handle" class="ctf-button-red">Submit</button></h5>
        `
        document.getElementById('intro-advance-button').addEventListener('click', function(){
            Utils.Modal.set("Getting Started",body,footer).then(function(){
                reg();
            })
        })
        //console.log(document.getElementById('submit-handle'))
    },
}

export default Intro;