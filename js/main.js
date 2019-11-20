let theme_link = document.getElementById("style-theme");

let currentTheme = "white"


function toogleTheme() {
    console.log(theme_link.href)
    if (currentTheme === "black") {
        theme_link.href = "css/style-white.css"
        currentTheme = "white"
    } else {
        theme_link.href = "css/style-black.css"
        currentTheme = "black"
    }
}
