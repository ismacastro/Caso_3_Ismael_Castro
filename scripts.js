//Reload window

//setInterval('window.location.reload()', 2000);

//Responsive menu
function updateMenu(){
    let menu = document.getElementById('menu');
    let menuLarge = document.getElementById('menu-large');

    if (window.innerWidth < 768) {
        menuLarge.style.display= "none"
        menu.style.display= "flex"
    }
        else if(window.innerWidth > 768){
        var tittles = document.getElementById("tittles");
        var infoContainer = document.getElementById("info-container");
        infoContainer.appendChild(tittles);
        menuLarge.style.display= "flex"
        menu.style.display= "none"
    }
    else {
        var tittles = document.getElementById("tittles");
        var coverBook = document.getElementById("cover-book");
        coverBook.appendChild(tittles);
        menuLarge.style.display= "flex"
        menu.style.display= "none"
    }
}

document.addEventListener('DOMContentLoaded', updateMenu);

window.addEventListener('resize', updateMenu);


document.addEventListener("DOMContentLoaded", function () {
    
    const buttonMenu = document.getElementById('button-menu');
    const smallMenu = document.getElementById('menu-small');
    smallMenu.style.display = "none";


    function showMenu() {

     if (smallMenu.style.display === "none"){
        smallMenu.style.display =  "flex"
     } else {
         smallMenu.style.display = "none"
        }
    }

    buttonMenu.addEventListener("click", showMenu);
});