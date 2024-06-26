document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const cancelBtn = document.querySelector('.cancel-btn');

    hamburger.addEventListener('click', () => {
        dropdownMenu.classList.toggle('active');
    });

    cancelBtn.addEventListener('click', () => {
        dropdownMenu.classList.remove('active');
    });
});

// const container = document.getElementById('container');
// const registerBtn = document.getElementById('register');
// const loginBtn = document.getElementById('login');

// registerBtn.addEventListener('click', () => {
//     container.classList.add("active");
// });

// loginBtn.addEventListener('click', () => {
//     container.classList.remove("active");
// });


 document.addEventListener('DOMContentLoaded', () => {
        const signUpButton = document.getElementById('register');
        const signInButton = document.getElementById('login');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add('active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('active');
        });
    });
