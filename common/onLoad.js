function getUser(){
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
}

function checkPhase(usrPhase, page){
  if (!usrPhase && !localStorage.getItem("splashShown")){
    window.location.href = "splash.html";
    return;
  }

  else if(!usrPhase){
    window.location.href = "phase1.html";
    return;
  }

  else if (usrPhase < page){
    console.log(`${usrPhase} is less than ${page}`)
    window.location.href = `../phase${usrPhase}/phase${usrPhase}.html`;
  }
}

function onLoad(page){
  console.log(localStorage);
  if (!localStorage.getItem("splashShown")) {
    window.location.href = "splash.html";
  }
  const user = getUser();
  if(user){
    var usrPhase = user.currentPhase;
  } else {
    var usrPhase = 1;
  }
  checkPhase(usrPhase, page)
  return user;
}

function parseUser(storedUser){
  return new User(storedUser.first, storedUser.last, storedUser.email, storedUser.birthDate, storedUser.city, storedUser.street, storedUser.number, storedUser.image, storedUser.hobbies)
}