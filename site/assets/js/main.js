/* ============================================================
   SAMAIS — interações do site (vanilla, sem dependências)
   ============================================================ */
(function () {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
  const lerp = (a, b, t) => a + (b - a) * t;

  /* ---------- Preloader ---------- */
  const pre = $(".preload");
  function finishPreload() {
    document.body.classList.add("loaded");
    if (pre) {
      pre.classList.add("done");
      setTimeout(() => pre && pre.remove(), 900);
    }
  }
  if (pre && !reduce) {
    const bar = $(".preload__bar"), pct = $(".preload__pct");
    let p = 0;
    const tick = () => {
      p += Math.max(1, (100 - p) * 0.12);
      if (p >= 100) p = 100;
      if (bar) bar.style.width = p + "%";
      if (pct) pct.textContent = String(Math.round(p)).padStart(3, "0");
      if (p < 100) requestAnimationFrame(tick);
      else setTimeout(finishPreload, 340);
    };
    // give the mark a beat to draw
    setTimeout(() => requestAnimationFrame(tick), 480);
    // hard fallback
    setTimeout(finishPreload, 4200);
  } else {
    finishPreload();
  }

  /* ---------- Nav: scroll state + mobile ---------- */
  const nav = $(".nav");
  const onScrollNav = () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
  };
  onScrollNav();
  const toggle = $(".nav__toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    $$(".nav__link, .nav__cta").forEach((l) =>
      l.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  /* ---------- Scroll progress bar ---------- */
  const sb = $(".scrollbar");
  function progress() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (sb) sb.style.width = pct + "%";
  }

  /* ---------- Reveal on view ---------- */
  const revIO = new IntersectionObserver(
    (ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          revIO.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  $$(".reveal, .manifesto__q").forEach((el) => revIO.observe(el));

  /* ---------- Count-up ---------- */
  function countUp(el) {
    const target = parseFloat(el.dataset.count);
    const dec = (el.dataset.count.split(".")[1] || "").length;
    const dur = 1500;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const t = clamp((ts - start) / dur, 0, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = target * eased;
      el.textContent = dec ? val.toFixed(dec) : Math.round(val).toLocaleString("pt-BR");
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const numIO = new IntersectionObserver(
    (ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting) {
          if (!reduce) countUp(e.target);
          else {
            const t = parseFloat(e.target.dataset.count);
            e.target.textContent = t.toLocaleString("pt-BR");
          }
          numIO.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  $$("[data-count]").forEach((el) => numIO.observe(el));

  /* ---------- Manifesto: wrap words for stagger ---------- */
  $$(".manifesto__q[data-split]").forEach((q) => {
    const html = q.innerHTML;
    // preserve <em> spans; split by spaces on text nodes only
    const frag = document.createElement("div");
    frag.innerHTML = html;
    const out = [];
    frag.childNodes.forEach((node) => {
      if (node.nodeType === 3) {
        node.textContent.split(/(\s+)/).forEach((w) => {
          if (w.trim()) out.push(`<span class="w">${w}</span>`);
          else out.push(w);
        });
      } else {
        out.push(`<span class="w">${node.outerHTML}</span>`);
      }
    });
    q.innerHTML = out.join("");
    // reveal words progressively while section is on screen
    const words = $$(".w", q);
    const stagger = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) {
            words.forEach((w, i) => {
              if (reduce) { w.style.opacity = 1; return; }
              setTimeout(() => (w.style.opacity = 1), i * 34);
            });
            stagger.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    stagger.observe(q);
  });

  /* ---------- Parallax (rAF, transform only) ---------- */
  const heroMedia = $(".hero__media");
  const paraImgs = $$("[data-para]");
  let ticking = false;
  function frame() {
    const y = window.scrollY;
    if (heroMedia) heroMedia.style.transform = `translate3d(0, ${y * 0.28}px, 0)`;
    paraImgs.forEach((img) => {
      const r = img.getBoundingClientRect();
      const speed = parseFloat(img.dataset.para) || 0.12;
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      img.style.transform = `translate3d(0, ${-(center * speed)}px, 0)`;
    });
    ticking = false;
  }
  function onScroll() {
    progress();
    if (!reduce && !ticking) {
      ticking = true;
      requestAnimationFrame(frame);
    }
  }
  window.addEventListener("scroll", () => { onScrollNav(); onScroll(); }, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  progress();
  if (!reduce) requestAnimationFrame(frame);

  /* ---------- Active nav link via section observer ---------- */
  const linkMap = new Map();
  $$(".nav__link[href^='#']").forEach((l) => {
    const id = l.getAttribute("href").slice(1);
    const sec = document.getElementById(id);
    if (sec) linkMap.set(sec, l);
  });
  if (linkMap.size) {
    const secIO = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          const l = linkMap.get(e.target);
          if (!l) return;
          if (e.isIntersecting) {
            $$(".nav__link").forEach((x) => x.classList.remove("active"));
            l.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    linkMap.forEach((_, sec) => secIO.observe(sec));
  }

  /* ---------- Magnetic buttons ---------- */
  if (!reduce && window.matchMedia("(pointer:fine)").matches) {
    $$(".mag").forEach((wrap) => {
      const el = wrap.firstElementChild || wrap;
      const strength = 18;
      wrap.addEventListener("mousemove", (ev) => {
        const r = wrap.getBoundingClientRect();
        const x = (ev.clientX - r.left - r.width / 2) / r.width;
        const y = (ev.clientY - r.top - r.height / 2) / r.height;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      wrap.addEventListener("mouseleave", () => (el.style.transform = ""));
    });
  }

  /* ---------- Journey sticky steps (copiloto page) ---------- */
  const steps = $$(".step[data-shot]");
  const figs = $$(".journey__media figure");
  if (steps.length && figs.length) {
    const setShot = (name) => {
      figs.forEach((f) => f.classList.toggle("active", f.dataset.shot === name));
    };
    setShot(steps[0].dataset.shot);
    const stepIO = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) setShot(e.target.dataset.shot);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    steps.forEach((s) => stepIO.observe(s));
  }

  /* ---------- Year ---------- */
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
