function getUser(){
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
}

function checkPhase(curPhase, page){
  if (!curPhase && !localStorage.getItem("splashShown")){
    window.location.href = "splash.html";
    return;
  }
  else if (page === 1){
    return;
  }
  else if(!curPhase){
    window.location.href = "phase1.html";
    return;
  }
  else if (curPhase === 1){
    window.location.href = "phase1.html";
    return;
  }
  else if (curPhase < page){
    console.log(`${curPhase} is less than ${page}`)
    window.location.href = `phase${curPhase - 1}.html`;
  }
}

function onLoad(page){
  const user = getUser();
  console.log(user);
  const curPhase = user.currentPhase;
  checkPhase(curPhase, page);
  return user;
}