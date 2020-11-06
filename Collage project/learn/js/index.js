var a=document.getElementById("mySidenav");
var b=document.getElementById("closebtn");
function openNav() {
    a.style.width = "250px";
    a.style.color="black";
    b.style.opacity="1";

  }
  
  function closeNav() {
    a.style.width= "3%";
    a.style.color="black";
    a.style.overflow="hidden";
    b.style.opacity="0";
  }

