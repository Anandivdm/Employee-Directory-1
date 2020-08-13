let employeeCards = document.getElementById('employee-cards');

// Fetch 12 users

fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then(response => response.results)
  .then(generateEmployee)


// Function

function generateEmployee(data) {
  let employees = data;
  let employeeHTML = '';
  employees.forEach((employee, index) => {
    let image = employee.picture.large
    let firstName = employee.name.first
    let lastName = employee.name.last
    let email = employee.email
    let location = employee.location.city
    employeeHTML += `
      <div class="card">
        <div class="card-details">
          <img src="${image}" alt>
          <h2>${firstName} ${lastName}</h2>
          <p>${email}</p>
        </div>
      </div>`
  });
  employeeCards.innerHTML = employeeHTML;
};