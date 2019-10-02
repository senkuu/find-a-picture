import themeChanger from "../src/js/themeChanger";

describe("Change theme", () => {
  it("Sould change dark theme to light theme", () => {
    const icon = document.createElement("i");
    document.body.className = "dark";
    themeChanger(icon);
    expect(document.body.className).toBe("light");
  });

  it("Sould change light theme to dark theme", () => {
    const icon = document.createElement("i");
    document.body.className = "light";
    themeChanger(icon);
    expect(document.body.className).toBe("dark");
  });

  it("Should change sun icon to moon icon", () => {
    const icon = document.createElement("i");
    icon.className = "fa fa-sun-o";
    themeChanger(icon);
    expect(icon.className).toBe("fa fa-moon-o");
  });

  it("Should change moon icon to sun icon", () => {
    const icon = document.createElement("i");
    icon.className = "fa fa-moon-o";
    themeChanger(icon);
    expect(icon.className).toBe("fa fa-sun-o");
  });
});
