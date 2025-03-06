$(document).ready(function() {
    // Toggle How to Craft Section
    $('.how-to-craft').click(function() {
        $('.how-to-craft-container').fadeIn();
    });

    // Toggle Registration Section
    $('.register-btn').click(function() {
        $('.registration-container').fadeIn();
    });

    // Close Buttons with unique selectors
    $('.how-to-close-btn').click(function() {
        $('.how-to-craft-container').fadeOut();
    });

    $('.registration-close-btn').click(function() {
        $('.registration-container').fadeOut();
    });

    // Simple Form Validation
    $('#registration-form').submit(function(event) {
        event.preventDefault(); // Prevent page reload

        let username = $('#username').val().trim();
        let email = $('#email').val().trim();
        let password = $('#password').val().trim();

        if (username === "" || email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Registration successful!");
        $('.registration-container').fadeOut();
        $('#registration-form')[0].reset(); // Clear form fields
    });
});
