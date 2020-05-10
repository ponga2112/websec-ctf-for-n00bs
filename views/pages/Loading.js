// Presets a "Loading..." message while the application loads up
let Loading = {
    render : async () => {
        let view =  /*html*/`
            <section class="section"> 
            <h1 id="loading">Loading<span id="loading-item"></span><span class="loading one">.</span><span class="loading two">.</span><span class="loading three">.</span></h1>
            </section>
            <section class="section">
                <img src="assets/images/flag_trasnsparent_378x487.png"></img>
            </section>
        `
        return view
    },
    after_render: async (cb) => {}
        
}
export default Loading;