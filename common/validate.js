function validateName(name){
  const nameExp = new RegExp("[a-zA-z]{2,}");
  return nameExp.test(name);
}

function validateEmail(email){
  const emailExp = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  return emailExp.test(email);
}

function validateNumber(number){ //Note that number is expected to be a string
  if (Number(number) < 1) return false;
  const numberExp = new RegExp('^[0-9]+$');
  return numberExp.test(number);
}

//You must call this with a simple callback function that takes either true or false
function validateImageURL(url, callback){
  const img = new Image();
  img.onload = function(){
    callback(true);
  }
  img.onerror = img.onabort = function(){
    callback(false);
  }
  img.src = url;
}