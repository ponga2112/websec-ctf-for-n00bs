let Leaders = {
    player : () => {
        return {
            handle: ctf.state.API.handle,
            flags: ctf.state.CTF.flag_count,
            points: ctf.state.CTF.points
        };
    },
    render : async () => {
        let playerList = [];
        if(ctf.state.API.isConnected) {
            let r = await ctf.api.leaders()
            if(r.status) {
                for (const [k, v] of Object.entries(r.body)) {
                    playerList.push(v)
                }
            } else {
                ctf.state.API.isConnected = false
                let player = Leaders.player()
                playerList.push(player)
            }
        } else {
            // Offline
            let player = Leaders.player()
            playerList.push(player)
        }
        playerList.sort(function(a,b){return b.points-a.points})
        playerList = playerList.slice(0,19)
        let leaders_html = `<table class="ctf-leaders"><tr><td class="ctf-leaders">Player</td><td class="ctf-leaders">Flags</td><td class="ctf-leaders">Points</td></tr>`
        for(const i of playerList) {
            leaders_html = leaders_html + `<tr><td class="ctf-leaders">` + i.handle+ `</td><td class="ctf-leaders">` + String(i.flags) + `</td><td class="ctf-leaders">` + String(i.points) + `</td></tr>`
        }
        leaders_html = leaders_html + `</table>`
        let congrats_html = ""
        if (ctf.state.APPSTATE.progress == "COMPLETED") {
            congrats_html = '<h2>Congratulations!</h2>'
        }
        let r = '';
        for (const [k, v] of Object.entries(playerList)) {
            if(v != null) {
                r = r + `<li><a href="/#` + `${k}` + `" data-micromodal-close>` + `${k}` + `</a></li>
            `;
            }
        }
        let view =  /*html*/`
        <section class="section-lite leaders-optional">
        `+congrats_html+`<img src="data:image/png;base64,`+ctf.flagImg+`" width="100">
        </section>
        <div><section class="leaders-optional">
        <h3><u>Standings</u></h3>
        </section><section>`+leaders_html+`</section>
        <section>&nbsp;</section>
        <section class="leaders-optional"><button class="ctf-button-dark" id="again-button"><b>Play Again</b></button></section>
        <section>&nbsp;</section>
        <section>&nbsp;</section>
        `
        return view
    },
    after_render: async (cb) => {
        document.getElementById('again-button').addEventListener('click', function(){
            document.cookie="CTF=; path=/; SameSite=Strict"; window.location.href = "/";
        });
        if(location.hash.search("leaderboard") > -1) {
            document.getElementById('status_leaders').removeAttribute('data-micromodal-trigger');
            let d = document.getElementById('status_leaders');
            let r = d.cloneNode(true);
            d.parentNode.replaceChild(r,d);
        }
        if(cb){
            if(cb == "scrub") {
                for (const [k, v] of Object.entries(document.getElementsByClassName('leaders-optional'))) { v.classList.remove("section-lite"); v.classList.add("hidden"); }
            }
        }
    }
        
}

export default Leaders;