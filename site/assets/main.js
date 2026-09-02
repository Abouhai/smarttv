/* Smart-IPTV.One — Main JS */

// ── Mobile nav
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    });
  }

  // ── Pricing tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.pricing-section') || document;
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.pricing-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = group.querySelector('#' + btn.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });

  // ── Install tabs
  document.querySelectorAll('.install-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.install-tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.install-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.querySelector('#' + btn.dataset.panel);
      if (panel) panel.classList.add('active');
    });
  });

  // ── FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('open');
      document.querySelectorAll('.faq-q').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.style.maxHeight = null;
      });
      if (!isOpen) {
        btn.classList.add('open');
        const ans = btn.nextElementSibling;
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });

  // ── Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ── Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
});

// ── WhatsApp helper
function waLink(msg) {
  return 'https://wa.me/447446194864?text=' + encodeURIComponent(msg);
}
