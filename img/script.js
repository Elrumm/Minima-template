menu.onclick = function myFunction() {
    var x = document.getElementById("headerNav");
  
    if (x.className === "header__nav") {
      x.className += " responsive";
    } else {
      x.className = "header__nav";
    }
  };
  
