'use strict';
/* Shared behavior for the profile and hooWorld pages:
   background music, detail modals, and portal warps. */
(() => {
  // Kevin MacLeod (incompetech.com), CC BY 4.0: credits must stay in each page footer.
  const PLAYLIST = [
    'assets/audio/galactic-rap.mp3',
    'assets/audio/phantom-from-space.mp3',
    'assets/audio/graveyard-shift.mp3',
  ];
  const safe = (fn, fallback = null) => { try { return fn(); } catch { return fallback; } };

  /* ---------- music ----------
     Default on. Browsers block audible autoplay before a user gesture, so a
     blocked start retries on the first click or key press. The on/off choice
     persists across visits; the playback position carries across pages. */
  const btn = document.getElementById('bgm');
  const bgm = new Audio();
  bgm.volume = 0.35;
  let on = safe(() => localStorage.getItem('hoo.music')) !== 'off';
  const saved = safe(() => JSON.parse(sessionStorage.getItem('hoo.pos')));
  let idx = saved ? saved.i % PLAYLIST.length : 0;
  bgm.src = PLAYLIST[idx];
  if (saved) {
    bgm.addEventListener('loadedmetadata', () => { bgm.currentTime = saved.t || 0; }, { once: true });
  }
  bgm.addEventListener('ended', () => {
    idx = (idx + 1) % PLAYLIST.length;
    bgm.src = PLAYLIST[idx];
    bgm.play().catch(() => {});
  });

  const label = () => { if (btn) btn.textContent = on ? '♪ MUSIC: ON' : '♪ MUSIC: OFF'; };
  const armFirstGesture = () => {
    const kick = () => { if (on && bgm.paused) bgm.play().catch(() => {}); };
    document.addEventListener('pointerdown', kick, { once: true });
    document.addEventListener('keydown', kick, { once: true });
  };
  label();
  if (on) bgm.play().catch(armFirstGesture);
  btn?.addEventListener('click', () => {
    on = !on;
    safe(() => localStorage.setItem('hoo.music', on ? 'on' : 'off'));
    label();
    if (on) bgm.play().catch(() => {}); else bgm.pause();
  });
  addEventListener('pagehide', () => {
    safe(() => sessionStorage.setItem('hoo.pos', JSON.stringify({ i: idx, t: bgm.currentTime })));
  });

  let actx = null;
  const blip = () => {
    if (!on) return;
    safe(() => {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const t = actx.currentTime;
      [[880, 0], [1320, 0.06]].forEach(([freq, delay]) => {
        const osc = actx.createOscillator();
        const gain = actx.createGain();
        osc.type = 'square';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.04, t + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.08);
        osc.connect(gain).connect(actx.destination);
        osc.start(t + delay);
        osc.stop(t + delay + 0.09);
      });
    });
  };

  /* ---------- detail modal: content comes from <template id="..."> ---------- */
  const modal = document.getElementById('modal');
  const modalBody = modal?.querySelector('.modal-body');
  let opener = null;

  const openModal = (id, from) => {
    const tpl = document.getElementById(id);
    if (!tpl || !modal) return;
    modalBody.replaceChildren(tpl.content.cloneNode(true));
    modal.hidden = false;
    modal.querySelector('.modal-card').scrollTop = 0;
    document.body.classList.add('modal-open');
    opener = from;
    modal.querySelector('.modal-x').focus();
    blip();
  };
  const closeModal = () => {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    opener?.focus();
  };

  /* ---------- portal warp ---------- */
  const warp = (link) => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      location.href = link.href;
      return;
    }
    const r = link.getBoundingClientRect();
    document.body.style.setProperty('--wx', `${((r.left + r.width / 2) / innerWidth) * 100}%`);
    document.body.style.setProperty('--wy', `${((r.top + r.height / 2) / innerHeight) * 100}%`);
    document.body.classList.add('warping');
    setTimeout(() => { location.href = link.href; }, 600);
  };
  addEventListener('pageshow', () => document.body.classList.remove('warping'));

  document.addEventListener('click', (ev) => {
    const trigger = ev.target.closest('[data-modal]');
    if (trigger) {
      ev.preventDefault();
      openModal(trigger.dataset.modal, trigger);
      return;
    }
    if (ev.target.closest('[data-close]')) {
      closeModal();
      return;
    }
    const portal = ev.target.closest('a[data-warp]');
    if (portal && ev.button === 0 && !ev.metaKey && !ev.ctrlKey && !ev.shiftKey) {
      ev.preventDefault();
      warp(portal);
    }
  });
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') closeModal(); });

  // deep link: page.html#template-id opens that detail on load
  const linked = location.hash && document.getElementById(location.hash.slice(1));
  if (linked && linked.tagName === 'TEMPLATE') openModal(linked.id, null);
})();
