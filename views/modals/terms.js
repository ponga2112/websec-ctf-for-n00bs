let foo = {
    render: async () => {
        let view =  /*html*/`
        <div class="content has-text-centered">
            <p>
                This application comes with absolutely no warranty. 
            </p>
        </div>
        `
        return view
    },
    after_render: async () => { }

}

export default foo;