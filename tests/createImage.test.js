import "@testing-library/jest-dom/extend-expect";
import createImage from "../src/js/createImage";

describe("test createImage function", function() {
  beforeAll(function() {
    document.body.innerHTML = `<div id="column"></div>`;
    createImage("pictureUrl", document.getElementById("column"));
  });

  it('Should add image with pic class and "pictureUrl" as src into column div', function() {
    const column = document.getElementById("column");
    const img = document.querySelector("img");
    expect(column).toContainElement(img);
    expect(img).toHaveClass("pic");
    expect(img).toHaveAttribute("src", "pictureUrl");
  });
});
