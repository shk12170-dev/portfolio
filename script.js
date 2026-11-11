(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('motion-toggle');

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function setMotion(off) {
    if (off) { root.setAttribute('data-motion', 'off'); } else { root.removeAttribute('data-motion'); }
    toggle.setAttribute('aria-pressed', String(off));
    toggle.textContent = '움직임 줄이기: ' + (off ? '켜짐' : '꺼짐');
    store('motion-off', off ? '1' : '0');
  }

  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  setMotion(load('motion-off') === '1' || prefersReduced);
  toggle.addEventListener('click', function () {
    setMotion(toggle.getAttribute('aria-pressed') !== 'true');
  });
})();
