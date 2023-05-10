function getUserFromLocalStorage() {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
}

function setUserProfile(user) {
    if (!user) return;

    document.getElementById('image-box').src = user.image;
    document.getElementById('name').textContent = `${user.name} ${user.surname}`;
    document.getElementById('email').textContent = `Email: ${user.email}`;
    document.getElementById('birth-date').textContent = `Birth Date: ${user.birthDate}`;
    document.getElementById('city-box').textContent = `City: ${user.city}`;
    document.getElementById('street-box').textContent = `Street: ${user.street} ${user.streetNumber ? user.streetNumber : ''}`;

    const hobbiesList = document.getElementById('hobbies-box');
    user.hobbies.forEach(hobby => {
        const listItem = document.createElement('li');
        listItem.textContent = hobby;
        hobbiesList.appendChild(listItem);
    });
}

const user = getUserFromLocalStorage();
setUserProfile(user);