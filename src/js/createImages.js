export default function(pictureUrl, pictureColumn) {
  let newImg = document.createElement("img");
  newImg.className = "pic";
  newImg.src = pictureUrl;
  pictureColumn.appendChild(newImg);
}
