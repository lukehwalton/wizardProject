function goBack(){
  window.location.href = "../phase2/phase2.html";
}

function submitPhase3() {
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
      const user = parseUser(storedUser);
      user.updatePhase3(imageURL, hobbies);
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      imageInput.classList.remove('invalid')

      //Move on to summary page
      window.location.href = "../phase4/phase4.html";
    } else {
      imageInput.classList.add("invalid");
    }
  });
}

const storedUser = onLoad(3);
const imageInput = document.getElementById("image-box");
const hobbyBoxes = document.getElementsByName('hobbies');
if(storedUser.image){
  imageInput.value = storedUser.image;
}
for (var i= 0; i < hobbyBoxes.length; i++){
  if (storedUser.hobbies.includes(hobbyBoxes[i].value)){
    hobbyBoxes[i].checked = true;
  }
}