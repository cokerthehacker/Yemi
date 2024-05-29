// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Menu icon toggle functionality
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });

    // Calculate and display age
    const dob = new Date('2004-04-23');
    const currentDate = new Date();
    let age = currentDate.getFullYear() - dob.getFullYear();

    // Check if birthday has occurred this year
    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    // Display age in your HTML element with id "age"
    document.getElementById('age').innerText = age;
});
