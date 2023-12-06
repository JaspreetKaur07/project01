// Function to handle form submission
function submitForm(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values from the input fields
  const name = document.getElementById('name').value;
  const feedback = document.getElementById('feedback').value;

  // Check if name or feedback is empty
  if (name.trim() === '' || feedback.trim() === '') {
    // Display an alert if either field is empty
    alert('Please fill in both your name and feedback.');
    return;
  }
  
  // Hide the feedback form and show the success message
  document.getElementById('feedbackForm').classList.add('hidden');
  document.getElementById('successMessage').classList.remove('hidden');
}

// Event listener for click on element with id "feed"
var feedback = document.getElementById("feed");
feedback.addEventListener("click", function () {
  // Change background color and text color on click
  feedback.style.backgroundColor = "wheat";
  feedback.style.color = "black";
});
