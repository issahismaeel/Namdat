function hideShowMenu() {
    var menulinks = document.getElementById("links-container");
    if (menulinks.style.display === "none") {
        menulinks.style.display = "block";
    } else {
        menulinks.style.display = "none";
    }
}

// logo hide declaration
let navBar = document.getElementById("logo-block");
// scroll to top button
let moveUp = document.getElementById("go-to-top");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        moveUp.style.display = "block";
        navBar.style.top = 0;
    } else {
        moveUp.style.display = "none";
        navBar.style.top = "6vh";
    }
}
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// hover over project card
document.getElementById("project-card1").addEventListener("mouseover", function () {
    document.getElementById("project-description1").style.backgroundColor = "#201C45";
    document.getElementById("project-icon-link1").style.display = "block";
    document.getElementById("project-text1").style.color = "white";
});

document.getElementById("project-card1").addEventListener("mouseout", function () {
    document.getElementById("project-description1").style.backgroundColor = "silver";
    document.getElementById("project-icon-link1").style.display = "none";
    document.getElementById("project-text1").style.color = "black";
});
// ////////////////////////
document.getElementById("project-card2").addEventListener("mouseover", function () {
    document.getElementById("project-description2").style.backgroundColor = "#202C45";
    document.getElementById("project-icon-link2").style.display = "block";
    document.getElementById("project-text2").style.color = "white";
});

document.getElementById("project-card2").addEventListener("mouseout", function () {
    document.getElementById("project-description2").style.backgroundColor = "silver";
    document.getElementById("project-icon-link2").style.display = "none";
    document.getElementById("project-text2").style.color = "black";
});

// //////////////////////////
document.getElementById("project-card3").addEventListener("mouseover", function () {
    document.getElementById("project-description3").style.backgroundColor = "#202C45";
    document.getElementById("project-icon-link3").style.display = "block";
    document.getElementById("project-text3").style.color = "white";
});

document.getElementById("project-card3").addEventListener("mouseout", function () {
    document.getElementById("project-description3").style.backgroundColor = "silver";
    document.getElementById("project-icon-link3").style.display = "none";
    document.getElementById("project-text3").style.color = "black";
});


//show engineer social media icons and div 

document.getElementById("column1").addEventListener("mouseover", function (){
    document.getElementById("personel-media-handle1").style.display = "block";
});

document.getElementById("column1").addEventListener("mouseout", function (){
    document.getElementById("personel-media-handle1").style.display = "none";
    
});
// ----------------------------
document.getElementById("column2").addEventListener("mouseover", function (){
    document.getElementById("personel-media-handle2").style.display = "block";
});

document.getElementById("column2").addEventListener("mouseout", function (){
    document.getElementById("personel-media-handle2").style.display = "none";
    
});
// -------------------------------
document.getElementById("column3").addEventListener("mouseover", function (){
    document.getElementById("personel-media-handle3").style.display = "block";
});

document.getElementById("column3").addEventListener("mouseout", function (){
    document.getElementById("personel-media-handle3").style.display = "none";
    
});

