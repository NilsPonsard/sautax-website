let theme_link = document.getElementById("style-theme");

let currentTheme = "white"
let cookie = document.cookie

// from w3schools
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue) {

    document.cookie = cname + "=" + cvalue + ";";
}

function toogleTheme() {
    if (currentTheme === "black") {
        theme_link.href = "css/style-white.css"
        currentTheme = "white"
    } else {
        theme_link.href = "css/style-black.css"
        currentTheme = "black"
    }
    setCookie("theme", currentTheme)
}
function setTheme(name) {
    if (name === "black") {
        theme_link.href = "css/style-black.css"
        currentTheme = "black"
    } else {
        theme_link.href = "css/style-white.css"
        currentTheme = "white"
    }

    setCookie("theme", currentTheme)
}
function init() {
    let c = getCookie("theme")
    console.log(c)
    if (c === "") {
        setTheme("white")
    } else {
        setTheme(c)
    }
}
function toogleExpand() {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none"
    } else {
        dropdown.style.display = "block"
    }

}


init();
let dropdown
function loaded() {
    dropdown = document.getElementById("nav-dropdown")
    console.log(document.body.style.transitionDuration)
    document.body.style.transitionDuration = "1s"
    document.getElementById()
}