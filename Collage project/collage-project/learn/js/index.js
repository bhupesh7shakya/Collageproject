var a = document.getElementById("mySidenav");
var b = document.getElementById("closebtn");
function openNav() {
  a.style.width = "250px";
  a.style.color = "black";
  b.style.opacity = "1";

}

function closeNav() {

  function myFunction(x) {
    if (x.matches) { // If media query matches
      a.style.width = "8%";
    } else {
      a.style.width = "3%";
      a.style.color = "black";
      a.style.overflow = "hidden";
      b.style.opacity = "0";
    }
  }

  var x = window.matchMedia("(max-width: 1024px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
}

