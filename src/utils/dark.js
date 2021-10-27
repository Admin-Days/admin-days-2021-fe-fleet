export const setDarkMode = () => {
  var classNameDark = "dark-mode";
  var classNameLight = "light-mode";
  if (document.body.classList.contains(classNameLight)) {
    document.body.classList.remove(classNameLight);
    document.body.classList.add(classNameDark);
  }
};
