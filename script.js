// form 
var modal = document.getElementById("contact_form");
var contact_btn = document.getElementById("contact_btn");
var close = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
contact_btn.onclick = function(){
     modal.style.display="block";
}
close.onclick = function(){
    modal.style.display ="none";
}




