// SkyRidge Collective — shared behaviour for local-SEO landing pages.
(function(){
  var ham = document.getElementById('navHam');
  var links = document.getElementById('navLinks');
  if(ham && links){
    ham.addEventListener('click', function(){
      ham.classList.toggle('open');
      links.classList.toggle('open');
      document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        ham.classList.remove('open');
        links.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:.15});
  document.querySelectorAll('.fade').forEach(function(el){
    if(reduce){ el.classList.add('in'); } else { io.observe(el); }
  });
})();
