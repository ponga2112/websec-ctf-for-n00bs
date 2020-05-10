let foo = {
    render: async () => {
        let view =  /*html*/`
        <div class="content has-text-centered">
            <p>
                Some test. Wow.
            </p>
        </div>
        `
        return view
    },
    after_render: async () => { }

}

export default foo;