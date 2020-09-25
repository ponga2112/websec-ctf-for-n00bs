let foo = {
    render: async () => {
        let view =  /*html*/`
        <div class="content has-text-centered">
            <p>
                Oof. Something unexpected has happened :(
            </p>
        </div>
        `
        return view
    },
    after_render: async () => { }

}

export default foo;