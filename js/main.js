// Repose — 아코디언, 컬렉션 선택, 예약 폼 동작
(function () {
  // 아코디언: 한 번에 하나만 열림, 열린 항목을 다시 누르면 닫힘
  document.querySelectorAll('[data-accordion]').forEach(function (group) {
    var buttons = group.querySelectorAll('.acc-q');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var willOpen = btn.getAttribute('aria-expanded') !== 'true';
        buttons.forEach(function (b) {
          var open = b === btn && willOpen;
          b.setAttribute('aria-expanded', open ? 'true' : 'false');
          b.querySelector('.sign').textContent = open ? '−' : '+';
          document.getElementById(b.getAttribute('aria-controls')).hidden = !open;
        });
      });
    });
  });

  // 관심 컬렉션 선택 (단일 선택)
  document.querySelectorAll('[data-pills]').forEach(function (group) {
    var pills = group.querySelectorAll('.pill');
    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        pills.forEach(function (p) {
          var on = p === pill;
          p.classList.toggle('on', on);
          p.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
      });
    });
  });

  // 예약 폼: 제출하면 접수 완료 화면으로 전환
  var form = document.getElementById('visit-form');
  var done = document.getElementById('visit-done');
  var reset = document.getElementById('visit-reset');
  if (form && done) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.hidden = true;
      done.hidden = false;
      done.focus();
    });
    done.setAttribute('tabindex', '-1');
  }
  if (reset && form && done) {
    reset.addEventListener('click', function () {
      form.reset();
      done.hidden = true;
      form.hidden = false;
      document.getElementById('f-name').focus();
    });
  }
})();
