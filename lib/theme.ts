export const themeStorageKey = "scott-whitlock-theme";

export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('${themeStorageKey}');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dataset.theme = theme;
  } catch (error) {
    document.documentElement.classList.remove('dark');
    document.documentElement.dataset.theme = 'light';
  }
})();
`;
