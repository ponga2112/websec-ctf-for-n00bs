// Development Helper Page
// To be REMOVED once upon Deployment
let Start = {
    render : async () => {
        let view =  /*html*/`
            <section class="section">
            <h2>Capture the Flag</h2>
            <hr width="50%" />
            <h3>Hmm. Looks like we have't developed this yet :(</h3>
            </section>
        `
        return view
    },
    after_render: async (cb) => {}
        
}

export default Start;