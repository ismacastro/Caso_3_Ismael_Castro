//Reload window

//setInterval('window.location.reload()', 2000);

//Responsive menu
function updateMenu(){
    let menu = document.getElementById('menu');
    let menuLarge = document.getElementById('menu-large');

    if (window.innerWidth < 768) {
        menuLarge.style.display= "none"
        menu.style.display= "block"
    } else {
        menuLarge.style.display= "flex"
        menu.style.display= "none"
    }
}

document.addEventListener('DOMContentLoaded', updateMenu);

window.addEventListener('resize', updateMenu);
