export const chooseTheme = () => {
  const bodyRef = document.querySelector('body');
  const checkboxRef = document.getElementById('theme-switch-toggle');

  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  checkboxRef.checked = localStorage.getItem('theme') === 'true' ? true : false;
  checkboxRef.checked ? onDarkTheme() : onLightTheme();

  checkboxRef.addEventListener('change', function (e) {
    localStorage.setItem('theme', e.target.checked);
    checkboxRef.checked ? onDarkTheme() : onLightTheme();
  });

  function onDarkTheme() {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
  }

  function onLightTheme() {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
  }
};
