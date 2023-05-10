function validateName(name){
  const nameExp = new RegExp("[a-zA-z]{2,}");
  return nameExp.test(name);
}

function validateEmail(email){
  const emailExp = new RegExp(/[^\s@]+@[^\s@]+\.[^\s@]+/);
  return emailExp.test(email);
}

function validateBirthDate(birthDate){
  const birthExp = new RegExp('(([0-2][0-9])|(3[01]))\/((0[0-9])|(1[12]))\/[0-9]{2}$');
  return birthExp.test(birthDate);
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