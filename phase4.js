function getUserFromLocalStorage() {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
};

function setUserProfile(user) {
    if (!user) return;

    document.getElementById('image-box').src = user.image;
    document.getElementById('name').textContent = `${user.name}`;
    document.getElementById('email').textContent = `Email: ${user.email}`;
    document.getElementById('birth-date').textContent = `Birth Date: ${user.birthDate}`;
    document.getElementById('city-box').textContent = `City: ${user.city}`;
    document.getElementById('street-box').textContent = `Street: ${user.street} ${user.number ? user.number : ''}`;

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

function navigateBack() {
    window.location.href = "phase3.html";
};

function reset() {
    localStorage.clear();
    window.location.href = "phase1.html";
};

const user = getUserFromLocalStorage();
setUserProfile(user);
