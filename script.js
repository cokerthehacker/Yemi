document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Get the menu icon and navigation ul
    var menuIcon = document.querySelector('.menu-icon');
    var navUl = document.querySelector('nav ul');

    // Add a click event listener to the menu icon
    menuIcon.addEventListener('click', function () {
        // Toggle the 'show' class on the navigation ul
        navUl.classList.toggle('show');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Your date of birth in the format: YYYY-MM-DD
    var dob = new Date('2004-04-23');

    // Current date
    var currentDate = new Date();

    // Calculate age
    var age = currentDate.getFullYear() - dob.getFullYear();

    // Check if birthday has occurred this year
    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    // Display age in your HTML element with id "age"
    document.getElementById('age').innerText = age;
});