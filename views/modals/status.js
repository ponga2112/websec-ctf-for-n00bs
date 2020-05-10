let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <h5><span id="current_user"></span> <span id="api_status"><span id="loading-item"></span><span class="loading one">.</span><span class="loading two">.</span><span class="loading three">.</span></span></h5>
        `
        return view
    },
    after_render: async () => { }
}

export default Bottombar;