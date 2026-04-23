document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('hello-btn').addEventListener('click', function() {
    console.log("User clicked the Let's Talk button.");
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from actually submitting
    alert("Thanks for reaching out, Sakil! I'll get back to you soon.");
    this.reset();
});