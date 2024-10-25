  var MenuItems = document.getElementById('MenuItems');

MenuItems.style.maxHeight = "0px"

function menutoggle(){
  if(MenuItems.style.maxHeight == "0px")
  {
  	MenuItems.style.maxHeight = "200px";
  }
  else
    {
     MenuItems.style.maxHeight = "0px"
    }
}



// -----js for toggle form----

var Loginform = document.getElementById("Loginform");
var Regform = document.getElementById("Regform");
var Indicator = document.getElementById("Indicator");

function register(){

  Regform.style.transform = "translateX(0px)";
  Loginform.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";
}

function login(){

  Regform.style.transform = "translateX(300px)";
  Loginform.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";
}
