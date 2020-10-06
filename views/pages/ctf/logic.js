// TODO: Code this up!

let lock_icon = `
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lock-fill" fill="green" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
    <path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
  </svg>
    `;

let CTF_3 = {
    points: 100,
    answered: false,
    formpost : function() {
        if((document.getElementById('ctf3-authorized').value == "false") && (document.getElementById('auth_to_list').value == "External")) {
            let h = /*html*/`
            <div class="ctf-block ctf-modal-middle">
            <svg class="ctf-icon-error ctf-modal-middle" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
           Sorry, you are not authorized to make this transfer!<div>
            `;
            ctf.modal.set("Error",h,"");
        } else {
            let h = /*html*/`
            <div class="ctf-block ctf-modal-middle">
            <svg class="ctf-icon-success ctf-modal-middle" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
           Transfer complete!</div>
            `;
            ctf.modal.set("Success",h,"");
        }
    },
    answer : async () => {
        let a = null
        try {
            a = document.getElementById('ctf3-flag').querySelectorAll('input[type="radio"]:checked')[0].value
        } catch {
            a = "fail"
        }
        let flag_good = /*html*/ `
            <svg class="ctf-icon-success ctf-modal-middle" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
            <path fill-rule="evenodd" d="M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 0 0 .593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 0 1 3.5 9V3a.5.5 0 0 1 .223-.416l.04-.026z"/>
            </svg>
        `
        let flag_bad = /*html*/ `
            <svg class="ctf-icon-error ctf-modal-middle" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
            <path fill-rule="evenodd" d="M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 0 0 .593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 0 1 3.5 9V3a.5.5 0 0 1 .223-.416l.04-.026z"/>
            </svg>
        `
        let h = /*html*/ `
        <div class="ctf-block ctf-modal-middle">
        `
        let b = ``

        if(ctf.answerstatus.three == 'true') {
            h = h+`<section>This question has already been answered correctly.</section>`
            b = `<button class="ctf-button-red" id="nav-ctf3-next"><b>Next Challenge</b></button>`
        } else {
            switch(a){
                case "2":
                    CTF_3.answered = true;
                    if(CTF_3.points < 1) {
                        CTF_3.points = 0;
                    }
                    ctf.answerstatus.three = 'true'
                    h = h+flag_good+`Correct! <section>It seems that the developers of this web app decided to place the '<i>recently changed address logic</i>' on the <b>/cart</b> 
                    page when really,  this logic should be placed on the <b>/checkout</b> page. 
                    </section><section>These types of logic bypasses are rather common in the real world.</section><section>
                    &nbsp;
                    </section><section class="ctf-html-inner-text-center">Points Earned: `+String(CTF_3.points)+`</section>`
                    // nav outta here
                    b = `<button class="ctf-button-red" id="nav-ctf3-next"><b>Next Challenge</b></button>`
                    // this is a flag
                    let f = new ctf.flag(CTF_3.points,3,4)
                    ctf.capture(f);
                    break;
                default:
                    CTF_3.points = CTF_3.points-20;
                    h = h+flag_bad+`Nope, that's not quite right`
            }
        }
        h=h+`</div>`
        ctf.modal.set("Results",h,b);
    },
    urlWindow : async () => {
        let v = document.getElementById('url').value
        let ctf3_url = 'address'
        let html = ``
        switch(v) {
            case "store":
                ctf3_url = 'store';
                CTF_3.cart.validated = true;
                html = `
                <h1>Widgets Direct Store</h1>
                &nbsp;
                <dl>
                <dt>
                <table border="0"><tr><th>&nbsp;</th><th>Item</th><th>&nbsp;</th><th>Price</th><th>&nbsp;</th><th>Quantity</th><th>&nbsp;</th></tr>
                <tr>
                <td><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gear" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"/>
                <path fill-rule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"/>
              </svg>&nbsp;</td>
                <td>Awesome Widget Foo</td>
                <td>&nbsp;</td>
                <td>$23</td>
                <td>&nbsp;</td>
                <td><select name="Quantity" id="item0_q">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </td>
                <td><a class="ctf3-url-link" id="item0_add"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"/>
                <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg> Add to Cart</a></td>
                </tr>
                <tr>
                <td><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gear-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"/>
              </svg>&nbsp;</td>
                <td>Awesome Widget Bar</td>
                <td>&nbsp;</td>
                <td>$27</td>
                <td>&nbsp;</td>
                <td><select name="Quantity" id="item1_q">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </td>
                <td><a class="ctf3-url-link" id="item1_add"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"/>
                <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg> Add to Cart</a></td></tr>
              <tr>
                <td><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
              </svg>&nbsp;</td>
                <td>Awesome Widget Baz</td>
                <td>&nbsp;</td>
                <td>$14</td>
                <td>&nbsp;</td>
                <td><select name="Quantity" id="item2_q">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </td>
                <td><a class="ctf3-url-link" id="item2_add"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"/>
                <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg> Add to Cart</a></td></tr>
                </table>
                </dt>
                <dt>&nbsp;</dt>
                <dt><span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
              </svg>&nbsp;&nbsp;<input type="submit" id="ctf3_nav_cart" class="faux-browser-button" name="ctf3_nav_cart"value="Checkout"/>&nbsp;&nbsp;[</span><span id="cart-items-count">`+String(CTF_3.cart.items)+`</span><span>
              items in cart]</span></dt>
                </dl>
                `
                break;
            case "cart":
                ctf3_url = 'cart';
                CTF_3.cart.validated = false;
                html = ``
                if(CTF_3.cart.items < 1) {
                    html = `
                <h1>Shopping Cart</h1>
                &nbsp;
                <dl><dt>
                </dt>
                <dt><span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-diamond-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>&nbsp;
                You have not added any items to your Shopping Cart.</span></dt>
                <dt><input type="submit" id="ctf3_nav_cart_back" class="faux-browser-button" name="cctf3_nav_cart_back" value="Go Back"/></dt>
                </dl>
                `
                } else {
                    html = `
                <h1>Shopping Cart</h1>
                &nbsp;
                <dl><dt>
                </dt>
                <dt><span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-diamond-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>&nbsp;
                We noticed that you updated your shipping address recently.</span></dt><dt>&nbsp;</dt>
                <dt>A verification email has been sent to you -</dt><dt> Please follow the instructions in this email to complete your order.</dt>
                <dt><input type="submit" id="ctf3_nav_cart_back" class="faux-browser-button" name="cctf3_nav_cart_back" value="Go Back" hidden="hidden" /></dt>
                </dl>
                `
                }
                break;
            case "checkout":
                ctf3_url = 'checkout';
                html = ``
                if(CTF_3.cart.validated && (CTF_3.cart.total > 0)) {
                    html = `
                <h1>Store Checkout</h1>
                &nbsp;
                <dl><dt>
                </dt>
                <dt><span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>&nbsp;
                Your order has been successfully placed!</span></dt><dt>&nbsp;</dt>
                <dt><span>Total Billed: $`+String(CTF_3.cart.total)+`</span></dt><dt>&nbsp;</dt>
                <dt><span><b>Thank you for shopping Widgets Direct!</b></span></dt>
                </dl>
                `
                } else {
                    html = `
                <h1>HTTP/401 Unauthorized</h1>
                &nbsp;
                <dl><dt>You do not have authorization to checkout at this time.</dt></dl>
                `
                }
                break;
            default:
                ctf3_url = 'address';
                CTF_3.cart.validated = false;
                html = `
                <h1>Update Address Successful!</h1>
                &nbsp;
                <dl><dt>
                </dt>
                <dt>You have successfully updated your shipping address.</dt>
                <dt><input type="submit" id="ctf3_nav_store" class="faux-browser-button" name="ctf3_nav_store" value="Continue Shopping"/></dt>
                </dl>
                ` 
        }
        CTF_3.ctf3_url = ctf3_url;
        document.getElementById('ctf-urlwindow').innerHTML = html;
        //console.log("DEBUG: (url).value="+v+"; ctf3_url="+ctf3_url)
    },
    urlbar: /*html*/`
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
    <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
  </svg>
  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-clockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"/>
  <path fill-rule="evenodd" d="M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
  <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
</svg>
<label for="url">&nbsp;&nbsp;</label>
`+lock_icon+`
<select name="url" id="url">
  <option value="address">https://widgets-direct.com/address-update</option>
  <option value="store">https://widgets-direct.com/store</option>
  <option value="cart">https://widgets-direct.com/cart</option>
  <option value="checkout">https://widgets-direct.com/checkout</option>
</select>

    `,
    cart : {
        item0_q: 0,
        item1_q: 0,
        item2_q: 0,
        item0_price: 27,
        item1_price: 23,
        item2_price: 14,
        items: 0,
        total: 0,
        validated: false,
    },
    ctf3_url : '',
    update_ctf_events : async () => {
        switch(CTF_3.ctf3_url) {
            case "store":
                document.getElementById('item0_add').addEventListener('click', function(){
                    CTF_3.cart.item0_q = CTF_3.cart.item0_q + parseInt(document.getElementById('item0_q').value)
                    CTF_3.cart.items = CTF_3.cart.items + CTF_3.cart.item0_q
                    document.getElementById('cart-items-count').innerText = CTF_3.cart.items
                })
                document.getElementById('item1_add').addEventListener('click', function(){
                    CTF_3.cart.item1_q = CTF_3.cart.item1_q + parseInt(document.getElementById('item1_q').value)
                    CTF_3.cart.items = CTF_3.cart.items + CTF_3.cart.item1_q
                    document.getElementById('cart-items-count').innerText = CTF_3.cart.items
                })
                document.getElementById('item2_add').addEventListener('click', function(){
                    CTF_3.cart.item2_q = CTF_3.cart.item2_q + parseInt(document.getElementById('item2_q').value)
                    CTF_3.cart.items = CTF_3.cart.items + CTF_3.cart.item2_q
                    document.getElementById('cart-items-count').innerText = CTF_3.cart.items
                })
                document.getElementById('ctf3_nav_cart').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 2;
                    CTF_3.cart.total  = (CTF_3.cart.item0_q*CTF_3.cart.item0_price)+(CTF_3.cart.item1_q*CTF_3.cart.item1_price)+(CTF_3.cart.item2_q*CTF_3.cart.item2_price);
                    CTF_3.urlWindow()
                    .then(function() {
                        CTF_3.update_ctf_events();
                    })
                })
                break;
            case "cart":
                //console.log("DEBUG: why are we getting here?? :: "+CTF_3.ctf3_url)
                document.getElementById('ctf3_nav_cart_back').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 1;
                    CTF_3.urlWindow()
                    .then(function() {
                        CTF_3.update_ctf_events();
                    })
                })
                break;
            case "checkout":
                return null
            default:
                document.getElementById('ctf3_nav_store').addEventListener('click', function(){
                    document.getElementById('url').selectedIndex = 1;
                    CTF_3.urlWindow()
                    .then(function() {
                        CTF_3.update_ctf_events();
                    })
                })
        }
    },
    render : async () => {
        // TODO: Need to fix the UI mobile view. Text in mobile view is paginated weirdly
        // TODO: make HTML code by line numbers! Then, make selection what line is vuln at!
        //let code_formated = ctf.toCodeBlock(code_raw)
        let view =  /*html*/`
        <section class="section-lite">
        <h2>Logic Bypass</h2><img src="/assets/images/flag_trasnsparent_378x487.png" width="100">
        </section>
        <div><section>
        A logic bypass is a class of vulnerbility that is introduced into an application by improper design or implementation. When designers or developers create an application, 
        they intend it to work a certain way--to have a certain <i>flow</i>. This "flow" is sometimes called    
        <a target="_blank" href="https://owasp.org/www-community/vulnerabilities/Business_logic_vulnerability">Business Logic</a>. 
        </section>&nbsp;<section>
        Example: We have a web store front. We are worried about fruad and so as a countermeasure, we have implemented some logic into the application that will 
        help prevent it.  
        </section><section>
        Our logic says that if a customer has recently updated their shipping address, then they are not permitted to check out of our store and ship items to the new address 
        until an automated verification email has been answered correctly.
        </section><section>
        <section>&nbsp;</section></div>
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left ctf-url-scroll ">
        <section><div class="ctf-urlbar">`+CTF_3.urlbar+`</div></section>
        <section>
        <div class="ctf-urlwindow ctf-url-scroll" id="ctf-urlwindow">Loading...</div></section>

        </div></div>
        <section><h3>The above web application has a Logic Bypass vulnerabilty - <u>How is it exploited?</u></h3></section>
        <div class="ctf-html-outter">
        <div class="ctf-html-inner-left">
        
        <form id="ctf3-flag">
        <div class="ctf-code-left">
        <span class="ctf-block"><input type="radio" name="answer" value="1"><label for="submit">&nbsp;First add items to your cart, then click Checkout</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="2"><label for="submit">&nbsp;First add items to your cart, then click Checkout, then navigate back to /store, then navigate directly to /checkout</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="3"><label for="submit">&nbsp;First navigate directly to /checkout, then to /store, Add items to your cart, then click Checkout</label></span>
        <span class="ctf-block"><input type="radio" name="answer" value="4"><label for="submit">&nbsp;Ignore adding any items to your cart, navigate directly to /cart, then to /checkout</label></span>
        
        <section>&nbsp;</section>
        <div class="ctf-html-inner-text-center">
        <span class="ctf-block"><input type="submit" id="ctf3_flag_submit" name="ctf3_flag_submit" data-micromodal-trigger="modal" class="ctf-button-red" value="Try it!">
        </span></div>
        </form>
        </div></div>
        `
        return view
    },
    after_render: async (cb) => {
        // document.getElementById('ctf3-form').onsubmit = function(e){e.preventDefault(); return false;}
        // document.getElementById('ctf3-form').addEventListener('submit', function(){
        //     CTF_3.formpost();
        // });
        //document.getElementById('ctf-urlwindow').innerHTML = CTF_3.urlWindow();
        CTF_3.ctf3_url = "address"
        CTF_3.urlWindow().then(function() {
            CTF_3.update_ctf_events();
        })
        document.getElementById('url').addEventListener('change', function(){
            CTF_3.urlWindow()
            .then(function() {
                CTF_3.update_ctf_events();
            })
        });
        document.getElementById('ctf3-flag').onsubmit = function(e){e.preventDefault(); return false;}
        document.getElementById('ctf3-flag').addEventListener('submit', function(){
            CTF_3.answer()
            .then(function(){
                if(CTF_3.answered) {
                    document.getElementById('nav-ctf3-next').addEventListener('click', function(){
                        ctf.modal.hideAll();
                        cb({action:"nav",to:"ctf/4"},null);
                    })
                }
            })
        });
    }
        
}

export default CTF_3;