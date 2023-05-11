function goBack(){
  window.location.href = "phase2.html"
}

function submitPhase3() {
  const imageInput = document.getElementById("image-box");
  const hobbyBoxes = document.getElementsByName('hobbies');
  
  const imageURL = imageInput.value.trim();
  const hobbies = [];
  let isValid = true;

  // Validate image url
  validateImageURL(imageURL, function(imgValid){
    if (!imgValid){
      isValid = false;
      imageInput.classList.add("invalid");
    } else {
      imageInput.classList.remove('invalid')
    }
  });

  //get a list of hobbies from the checkbox
  for (var i= 0; i < hobbyBoxes.length; i++){
    if (hobbyBoxes[i].checked) hobbies.push(hobbyBoxes[i].value);
  }

  console.log(`isValid is ${isValid}`)
  if (isValid) {
    const oldUser = localStorage.getItem("user");
    const user = new User(oldUser.name, oldUser.email, oldUser.birthDate, oldUser.city, oldUser.street, oldUser.houseNumber);
    user.updatePhase3(imageURL, hobbies.join(","));

    localStorage.setItem("user", JSON.stringify(user));

    //Move on to summary page
    window.location.href = "phase4.html";
  }
}