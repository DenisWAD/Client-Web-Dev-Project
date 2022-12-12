function openHamburgerNav() {
    var dropdown_navbar = document.getElementById("navbar_dropdown")
    
    if(dropdown_navbar.style.display==="none"){
        dropdown_navbar.style.display="block";
    }
    else {
        dropdown_navbar.style.display="none";
    }

}

function validateForm() {
    var maxCharacters = 200;
    var x = document.forms["myFormessage_form"]["Message"].value;
  if (x.length > maxCharacters) {
    alert("Message was too long. Maximum of 200 characters please");
    return false;
  }
  else {
    alert("Message received, I will be in touch");
    return true;
  }
}