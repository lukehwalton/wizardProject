function submitPhase3() {
    const imageInput = document.getElementById("image-box");
    const hobbiesInput = document.getElementById("checkbox")
  
    const image = imageInput.value.trim();
    const hobbies = hobbiesInput.value.trim();
    let isValid = true;
  
    // Validate image url
    if (!validateImageURL(url, callback)) {
      isValid = false;
      firstInput.classList.add("invalid");
    } else {
      firstInput.classList.remove("invalid");
    }
  
    console.log(`isValid is ${isValid}`)
    if (isValid) {
      const user = new User();
      user.updatePhase3(image);
  
      localStorage.setItem("user", JSON.stringify(user));
  
      //Redirect to phase 2 page
      window.location.href = "phase3Page.html";
    }
  }
  