window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50)
})

var NavBar =  document.getElementById("NavBar")

function showmenu(){
    NavBar.style.left = "-15px";
}

function hidemenu(){
    NavBar.style.left = "-300px";
}