document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Menu';
    toggleButton.classList.add('nav-toggle');
    document.querySelector('header .container').appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
        }
    });
});