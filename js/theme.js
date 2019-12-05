let theme_link = document.getElementById("style-theme");
let currentTheme
let styles = new Map()
styles.set("black", "css/style-black.css")
styles.set("white", "css/style-white.css")

function toogleTheme() {
    if (currentTheme === "black") setTheme("white")
    else setTheme("black")
}
function setTheme(name) {
    theme_link.href = styles.get(name)
    currentTheme = name
    localStorage.setItem("theme", name)
}
function init() {
    let c = localStorage.getItem("theme")
    if (c) currentTheme = c
    else {
        currentTheme = "white"
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            if (window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
                currentTheme = "black"
            }
        }



    }
    setTheme(currentTheme)
}
init();

/*
    Made by
 ____              _
/ ___|  __ _ _   _| |_ __ ___  __
\___ \ / _` | | | | __/ _` \ \/ /
 ___) | (_| | |_| | || (_| |>  <
|____/ \__,_|\__,_|\__\__,_/_/\_\
*/