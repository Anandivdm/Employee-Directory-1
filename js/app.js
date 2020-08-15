let employees = [];
let employeeCards = document.getElementById('employee-cards');
let overlay = document.getElementById('overlay');
let closeModal = document.getElementById('close');
let modalDetails = document.getElementById('modal-details');

// Fetch 12 users

fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then(response => response.results)
  .then(generateEmployee)


// Functions

function generateEmployee(data) {
  employees = data;
  let employeeHTML = '';
  employees.forEach((employee, index) => {
    let image = employee.picture.large
    let firstName = employee.name.first
    let lastName = employee.name.last
    let email = employee.email
    let location = employee.location.city
    employeeHTML += `
      <div class="card" data-index="${index}">
        <div class="card-details">
          <img src="${image}" alt>
          <div class="employee-details">
            <h2>${firstName} ${lastName}</h2>
            <p>${location}</p>
          </div>
        </div>
      </div>`
  });
  employeeCards.innerHTML = employeeHTML;
};

function showModal(index) {
  let employee = employees[index]
  console.log(employee)
  let image = employee.picture.large
  let firstName = employee.name.first
  let lastName = employee.name.last
  let email = employee.email
  let city = employee.location.city
  let address = employee.location
  let phone = employee.phone
  let birthday = new Date(employee.dob.date);


  let modalHTML;

  modalHTML = `
    <div class="employee-details">
      <img src="${image}" alt>
      <h2>${firstName} ${lastName}</h2>
      <p>${email}</p>
      <p>${city}</p>
      <hr>
      <p>${phone}</p>
      <p>${address.street.number} ${address.street.name}, ${address.state} ${address.postcode}</p>
      <p>Birthday: ${birthday.getMonth()} / ${birthday.getDay()} / ${birthday.getFullYear()} </p>
    </div>
  `
  modalDetails.innerHTML = modalHTML;
}

// Event Listener

employeeCards.addEventListener(('click'), e => {
  let card = e.target.closest(".card");
  let index = card.getAttribute('data-index');
  overlay.style.display = 'unset';
  showModal(index)
})

closeModal.addEventListener(('click'), e => {
  overlay.style.display = 'none';
})
