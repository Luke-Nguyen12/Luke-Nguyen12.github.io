(() => {
  const links = Array.from(document.querySelectorAll('a[href*="#"]'));
  for (const link of links) {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href') || '';
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;
      const id = href.slice(hashIndex + 1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      // Only intercept in-page navigation.
      const beforeHash = href.slice(0, hashIndex);
      if (beforeHash && beforeHash !== window.location.pathname && beforeHash !== window.location.href) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    });
  }

  const navLinks = Array.from(document.querySelectorAll('.nav__link')).filter((a) => {
    const href = a.getAttribute('href') || '';
    return href.includes('#');
  });

  const sectionIds = navLinks
    .map((a) => (a.getAttribute('href') || '').split('#')[1])
    .filter(Boolean);
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const setActive = (id) => {
    for (const a of navLinks) {
      const current = (a.getAttribute('href') || '').split('#')[1];
      a.classList.toggle('is-active', current === id);
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
      if (visible?.target?.id) setActive(visible.target.id);
    },
    { rootMargin: '-20% 0px -70% 0px', threshold: [0.1, 0.2, 0.4, 0.6] }
  );

  for (const s of sections) observer.observe(s);

  const copyButtons = Array.from(document.querySelectorAll('[data-copy]'));
  for (const btn of copyButtons) {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy') || '';
      if (!text) return;
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const input = document.createElement('input');
          input.value = text;
          input.setAttribute('readonly', 'true');
          input.style.position = 'absolute';
          input.style.left = '-9999px';
          document.body.appendChild(input);
          input.select();
          document.execCommand('copy');
          document.body.removeChild(input);
        }
        btn.classList.add('is-copied');
        btn.setAttribute('aria-label', 'Copied');
        window.setTimeout(() => {
          btn.classList.remove('is-copied');
          btn.setAttribute('aria-label', 'Copy email');
        }, 900);
      } catch {
        // Ignore copy failures; mailto link is still present.
      }
    });
  }
})();

