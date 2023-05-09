// Function to get user data from localStorage
function getUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
}

// Function to add user data to the table
function addUserToTable(user, index) {
    const table = document.getElementById('registrationTable');
    const tbody = table.querySelector('tbody');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index + 1}</td>
        <td><img src="${user.image}" alt="${user.name}'s image" width="100"></td>
        <td>${user.name} ${user.surname}</td>
        <td>${user.email}</td>
        <td>${user.birthDate}</td>
        <td>${user.city}</td>
        <td>${user.street}, ${user.streetNumber}</td>
        <td><img src="${user.image}" alt="${user.name}'s image" width="100"></td>
        <td>${user.hobbies}</td>
    `;

    tbody.appendChild(row);
}

// Get user data from localStorage and populate the table
const users = getUsersFromLocalStorage();
users.forEach((user, index) => {
    addUserToTable(user, index);
});
