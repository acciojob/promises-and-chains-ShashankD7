// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form from being submitted and page refresh

  const ageInput = document.getElementById('age');
  const nameInput = document.getElementById('name');

  const age = parseInt(ageInput.value);
  const name = nameInput.value;

  if (isNaN(age) || age < 0 || name.trim() === '') {
    alert('Please provide valid inputs for age and name.');
    return;
  }

  const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (age >= 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });

  promise
    .then(function(name) {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(function(name) {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });

  // Reset form inputs
  ageInput.value = '';
  nameInput.value = '';
}

// Event listener for form submission
document.getElementById('myForm').addEventListener('submit', handleSubmit);

