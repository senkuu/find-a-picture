export default icon => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  icon.classList.toggle("fa-moon-o");
  icon.classList.toggle("fa-sun-o");
};
