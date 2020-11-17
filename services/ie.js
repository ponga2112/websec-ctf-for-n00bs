// check for ancient browsers, like IE
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    // other browser
    return false;
}

if (detectIE()) {
    let d = document.getElementById('main')
    d.innerHTML = '<h2>Oh boy, this is embarrassing. You seem to be using a rather ancient version of Internet Explorer. Please reload this page in a modern web browser, such as Chrome or Edge.</h2>'
}