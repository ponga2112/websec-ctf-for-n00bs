// Development Helper Page
// To be REMOVED once upon Deployment
let Start = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
            <h2>Welcome, `+ctf.state.API.handle+`</h2></section>
            <div><section>
            { Some detailed text telling players what to expect  }
            </section></div><div>
            <hr width="70%" class="ctf-hr" />
            <section>
            <button class="ctf-button-dark" id="start-advance-button"><b>Start Playing!</b></button>
            </section></div>
        `
        return view
    },
    after_render: async (cb) => {
        document.getElementById('start-advance-button').addEventListener('focus', function(){
            cb({action:"nav",to:"ctf/1"},null);
        });
    }
}

export default Start;