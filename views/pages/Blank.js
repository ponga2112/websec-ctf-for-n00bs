// Development Helper Page
// To be REMOVED once upon Deployment
let Blank= {
    render : async () => {
        let view =  /*html*/`
            <!-- Uh ya, it's blank. -->
        `
        return view
    },
    after_render: async (cb) => {}
        
}

export default Blank;