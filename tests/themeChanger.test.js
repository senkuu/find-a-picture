import "@testing-library/jest-dom/extend-expect";
import themeChanger from "../src/js/themeChanger";

describe("Test testChanger function", function() {
  it("Should change dark theme to light theme", function() {
    document.body.className = "dark";
    const icon = document.createElement("i");
    icon.className = "fa fa-sun-o";
    themeChanger(icon);

    expect(document.body).toHaveClass("light");
    expect(icon).toHaveClass("fa fa-moon-o");
  });

  it("Should change light theme to dark theme", function() {
    document.body.className = "light";
    const icon = document.createElement("i");
    icon.className = "fa fa-moon-o";
    themeChanger(icon);

    expect(document.body).toHaveClass("dark");
    expect(icon).toHaveClass("fa fa-sun-o");
  });
});
