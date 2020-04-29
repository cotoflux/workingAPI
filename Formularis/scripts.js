// SELECTING ALL TEXT ELEMENTS
/* var username = document.getElementById("username");
var email = document.getElementById("email"); */
var username = document.forms['vform']['username'];
var email = document.forms['vform']['email'];
var tel = document.forms['vform']['tel'];
var pass1 = document.forms['vform']['pass1'];
var confirm1 = document.forms['vform']['confirm'];


// SELECTING ALL ERROR DISPLAY ELEMENTS
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var tel_error = document.getElementById('tel_error');
var password_error = document.getElementById("password_error");
var confirm_error = document.getElementById("confirm_error");


// SETTING ALL EVENT LISTENERS
username.addEventListener('change', nameVerify, false);
email.addEventListener('change', emailVerify, false);
tel.addEventListener('change', telVerify, false);
pass1.addEventListener('change', passVerify, false);
confirm1.addEventListener('change', confirmVerify, false);



// validation function
function Validate() {
  // validate username
  if (username.value == "") {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  // validate username
  if (username.value.length < 5) {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username must be at least 5 characters";
    username.focus();
    return false;
  }
  // validate email
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }
  // validate tel que empiece por 6 o 7 o 9 o 9 y que pueda poner el prefijo +0034 de España 
  //y que después de empezar por 6, 7, 8 o 9 tiene que tener 8 cifras más
  let telefono = /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;
  if (!(telefono.test(tel.value))) {
    tel.style.border = "1px solid red";
    document.getElementById('tel_div').style.color = "red";
    tel_error.textContent = "Télefono is required";
    tel.focus();
    return false;
  }

  if(pass1.value==""){
    pass1.style.border = "1px solid red";
    document.getElementById("primer_pass").style.color = "red";
    password_error.textContent = "Necesitamos un password válido de al menos 6 letras! Gracias!";
    email.focus();
    return false;
  }

  if(confirm1.value==""){
    confirm1.style.border = "1px solid red";
    document.getElementById("confirm_pass").style.color = "red";
    confirm_error.textContent = "Debes confirmar el password";
    confirm1.focus();
    return false;
  }

}
// event handler functions
function nameVerify() {
  if (username.value != "") {
   username.style.border = "1px solid #5e6e66";
   document.getElementById('username_div').style.color = "#0ec771";
   name_error.innerHTML = "";
   return true;
  }
}
function emailVerify() {
  if (email.value != "") {
  	email.style.border = "1px solid #5e6e66";
  	document.getElementById('email_div').style.color = "#0ec771";
  	email_error.innerHTML = "";
  	return true;
  }
}


function telVerify() {
  if (tel.value.length < 9) {
    document.getElementById('tel_div').style.color = "#ad2300";
    return false;
  }else{
  	tel.style.border = "1px solid #5e6e66";
  	document.getElementById('tel_div').style.color = "#0ec771";
  	tel_error.innerHTML = "";
  	return true;
  }
}

function passVerify(){
  if(pass1.value != "" && pass1.value>5){
    pass1.style.border = "1px solid #5e6e66";
    document.getElementById('primer_pass').style.color = "#0ec771";
    pass1_error.innerHTML = "";
    return true;
  }

}

function confirmVerify(){
  if(confirm.value != "" && confirm.value == pass1.value){
    pass1.style.border = "1px solid #5e6e66";
    document.getElementById('confirm_pass').style.color = "#0ec771";
    pass1_error.innerHTML = "";
    return true;
  }
}
}
