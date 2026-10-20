var navToggle = document.getElementById('navToggle');
var navbarNav = document.getElementById('navbarNav');

navToggle.addEventListener('click', function () {
  navbarNav.classList.toggle('open');
});

var scrollLinks = document.querySelectorAll('.click-scroll');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    navbarNav.classList.remove('open');
  });
});
