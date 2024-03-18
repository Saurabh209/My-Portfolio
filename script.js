window.addEventListener('load', function() {
    new WOW().init();
  
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  });