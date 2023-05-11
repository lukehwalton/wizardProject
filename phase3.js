function goBack(){
  window.location.href = "phase2.html"
}

function submitPhase3() {
  const imageInput = document.getElementById("image-box");
  const hobbyBoxes = document.getElementsByName('hobbies');
  
  const imageURL = imageInput.value.trim();
  const hobbies = [];

  //get a list of hobbies from the checkbox
  for (var i= 0; i < hobbyBoxes.length; i++){
    if (hobbyBoxes[i].checked){
      hobbies.push(hobbyBoxes[i].value);
    }
  }

  // Validate image url
  validateImageURL(imageURL, function(imgValid){
    if (imgValid){
      const oldUser = JSON.parse(localStorage.getItem("user"));
      const user = new User(oldUser.name, oldUser.email, oldUser.birthDate, oldUser.city, oldUser.street, oldUser.number);
      user.updatePhase3(imageURL, hobbies);
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      imageInput.classList.remove('invalid')

      //Move on to summary page
      window.location.href = "phase4.html";
    } else {
      imageInput.classList.add("invalid");
    }
  });

  //get a list of hobbies from the checkbox
  for (var i= 0; i < hobbyBoxes.length; i++){
    if (hobbyBoxes[i].checked) hobbies.push(hobbyBoxes[i].value);
  }
}