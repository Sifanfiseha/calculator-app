export function applyTheme(index: number) {
  const root = document.documentElement;

  // Remove any existing theme classes (theme1, theme2, theme3)
  root.classList.remove("theme1", "theme2", "theme3");

  // Add the new theme class
  root.classList.add(`theme${index}`);
}
