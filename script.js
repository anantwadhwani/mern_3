$(document).ready(function () {
  function showMessage(text, type) {
    $('#message').text(text).removeClass().addClass(type).fadeIn();
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  }

  $('#togglePassword').on('change', function () {
    const type = $(this).is(':checked') ? 'text' : 'password';
    $('#password').attr('type', type);
  });

  $('#registrationForm').on('submit', function (e) {
    e.preventDefault();
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const phone = $('#phone').val().trim();
    const password = $('#password').val();

    if (!name || !email || !phone || !password) {
      showMessage("All fields are required.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      showMessage("Phone number must be exactly 10 digits.", "error");
      return;
    }

    if (!isValidPassword(password)) {
      showMessage("Password must be at least 6 characters, contain uppercase, lowercase, and a number.", "error");
      return;
    }

    showMessage("Registration Successful!", "success");
    this.reset();
  });
});
