$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Assuming you have a login form with id 'loginForm', username input with id 'username', 
// password input with id 'password', and a welcome message area with id 'welcomeMessage'.

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (replace with your own logic)
    if (username === 'user' && password === 'web_dev') {
        // Hide the login form
        document.getElementById('login').style.display = 'none'; // Assuming your login section has id 'login'
        
        // Show the welcome message
        const welcomeMessage = document.getElementById('welcomeMessage'); // Assuming you have a div for welcome message
        welcomeMessage.innerText = `Welcome, ${username}!`;
        welcomeMessage.style.display = 'block'; // Show the welcome message
    } else {
        // Show an error message (you can customize this part)
        alert('Invalid username or password');
    }
});

// Optional: Logout functionality
document.getElementById('logout-button').addEventListener('click', function() {
    // Reset the form and hide the welcome message
    document.getElementById('loginForm').reset();
    document.getElementById('welcomeMessage').style.display = 'none';
    document.getElementById('login').style.display = 'block'; // Show the login form again
});