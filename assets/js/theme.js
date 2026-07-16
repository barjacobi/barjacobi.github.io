(function () {
  var root = document.documentElement;
  var button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  function getSavedTheme() {
    try {
      return localStorage.getItem("color-theme");
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem("color-theme", theme);
    } catch (error) {
      // The selected theme still works when storage is unavailable.
    }
  }

  function setTheme(theme) {
    var isDark = theme === "dark";
    root.dataset.theme = theme;
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? button.dataset.lightLabel : button.dataset.darkLabel);
    button.setAttribute("title", isDark ? button.dataset.lightLabel : button.dataset.darkLabel);
  }

  var savedTheme = getSavedTheme();
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (prefersDark ? "dark" : "light"));

  button.addEventListener("click", function () {
    var theme = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(theme);
    saveTheme(theme);
  });
}());
