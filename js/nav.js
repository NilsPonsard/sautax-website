let dropdown
function loaded() {
    dropdown = document.getElementById("nav-dropdown")
    document.body.style.transitionDuration = "1s"
    document.getElementById("img-acceuil").style.transitionDuration = "0.5s"
}
function toogleExpand() {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none"
    } else {
        dropdown.style.display = "block"
    }

}
/*
    Made by
 ____              _
/ ___|  __ _ _   _| |_ __ ___  __
\___ \ / _` | | | | __/ _` \ \/ /
 ___) | (_| | |_| | || (_| |>  <
|____/ \__,_|\__,_|\__\__,_/_/\_\
*/