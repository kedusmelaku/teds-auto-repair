// Show the fixed call dock on phones only after the hero Call button has scrolled out of view.
(function () {
  var dock = document.getElementById('dock');
  var heroCall = document.getElementById('hero-call');
  if (!dock || !heroCall || !('IntersectionObserver' in window)) return;

  dock.classList.add('is-hidden');
  new IntersectionObserver(function (entries) {
    var visible = entries[0].isIntersecting;
    dock.classList.toggle('is-hidden', visible);
    dock.toggleAttribute('inert', visible);
  }).observe(heroCall);
})();
