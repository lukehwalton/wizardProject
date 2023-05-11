function setUserProfile(user) {
    if (!user) return;

    document.getElementById('image-box').src = user.image;
    document.getElementById('name').textContent = `${user.first} ${user.last}`;
    document.getElementById('email').textContent = `Email: ${user.email}`;
    document.getElementById('birth-date').textContent = `Birth Date: ${user.birthDate}`;
    document.getElementById('city-box').textContent = `City: ${user.city}`;
    document.getElementById('street-box').textContent = `Street: ${user.street}`;
    document.getElementById('number-box').textContent = `${user.number ? `Number: ${user.number}` : 'No house number given'}`
    const hobbiesList = document.getElementById('hobbies-box');

    if (user.hobbies.length > 0){
        user.hobbies.forEach(hobby => {
            const listItem = document.createElement('li');
            listItem.textContent = hobby;
            hobbiesList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = "No hobbies provided";
        hobbiesList.appendChild(listItem);
    }
};

function goBack() {
    window.location.href = "../phase3/phase3.html";
};

function reset() {
    splashShown = localStorage.getItem("splashShown");
    localStorage.clear();
    if (splashShown){
        localStorage.setItem("splashShown", "true")
        window.location.href = "../phase1/phase1.html";
    }
    else window.location.href = "../splash/splash.html";
};

const storedUser = onLoad(4);
setUserProfile(storedUser);
