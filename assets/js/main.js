(() => {
  try {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  } catch {
    // ignore
  }

  // Ensure we land at the true top on first load (unless deep-linking to a hash).
  const snapToTopIfNeeded = () => {
    if (!window.location.hash) window.scrollTo(0, 0);
  };
  snapToTopIfNeeded();
  window.addEventListener('pageshow', snapToTopIfNeeded);

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

  if (sections.length === 0) return;

  const setActive = (id) => {
    for (const a of navLinks) {
      const current = (a.getAttribute('href') || '').split('#')[1];
      a.classList.toggle('is-active', current === id);
    }
  };

  // Primary: IntersectionObserver (cheap + smooth).
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top || 0) - (b.boundingClientRect.top || 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      // More forgiving margins so the active state updates reliably with padding changes.
      { rootMargin: '-10% 0px -60% 0px', threshold: [0.01, 0.1, 0.25] }
    );
    for (const s of sections) observer.observe(s);
  }

  // Fallback: scrollspy based on section top offsets (works everywhere).
  const getActiveId = () => {
    const y = window.scrollY + 120; // account for top padding
    let active = sections[0]?.id;
    for (const s of sections) {
      if (s.offsetTop <= y) active = s.id;
    }
    return active;
  };

  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = window.requestAnimationFrame(() => {
      raf = 0;
      const id = getActiveId();
      if (id) setActive(id);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  const copyButtons = Array.from(document.querySelectorAll('[data-copy]'));
  for (const btn of copyButtons) {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy') || '';
      if (!text) return;
      const reset = () => {
        btn.classList.remove('is-copied', 'is-error');
        btn.setAttribute('aria-label', 'Copy email');
        btn.setAttribute('title', 'Copy email');
      };

      const showState = (state) => {
        reset();
        if (state === 'copied') {
          btn.classList.add('is-copied');
          btn.setAttribute('aria-label', 'Copied');
          btn.setAttribute('title', 'Copied');
        } else {
          btn.classList.add('is-error');
          btn.setAttribute('aria-label', 'Copy failed');
          btn.setAttribute('title', 'Copy failed');
        }
        window.setTimeout(reset, 450);
      };

      const fallbackCopy = () => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', 'true');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.top = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(textarea);
        return ok;
      };

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
          showState('copied');
          return;
        }
      } catch {
        // fall through to fallback
      }

      try {
        const ok = fallbackCopy();
        showState(ok ? 'copied' : 'error');
      } catch {
        showState('error');
      }
    });
  }
})();

