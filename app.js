(function () {
  const root = document.documentElement;
  const buttons = document.querySelectorAll("[data-set-lang]");

  function setLang(lang) {
    const next = lang === "en" ? "en" : "ja";
    root.setAttribute("data-lang", next);
    root.setAttribute("lang", next);
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-set-lang") === next);
    });
    try { localStorage.setItem("fifth-lang", next); } catch (e) {}
  }

  const saved = (function () {
    try { return localStorage.getItem("fifth-lang"); } catch (e) { return null; }
  })();
  const preferEn = typeof navigator !== "undefined" && (navigator.language || "").toLowerCase().startsWith("en");
  setLang(saved || (preferEn ? "en" : "ja"));

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-set-lang")));
  });
})();
