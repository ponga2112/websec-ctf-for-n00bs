let Error404 = {

    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> HTTP/404 - Page Not Found </h1>
            </section>
        `
        return view
    }
    , after_render: async (cb) => {
    }
}
export default Error404;