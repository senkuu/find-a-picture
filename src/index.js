// import styles
import "./style.scss";

// code
const cred = {
  PIXABAY_APP_ID: "13537889-7d005d52a7e2e03e6b5e31c48",
  UNSPLASH_APP_ID:
    "799e6fdc1bc36296d924b9094bc41a87fe727e14e7b52c014caf8193571c5c6c",
  SECRET_KEY: "083a469649f1f0c62aabf21c739928a3801d89fa40d001e36b6429709f2c2cdc"
};

const searchBox = document.getElementById("search-input");
const gallery = document.getElementById("gallery");

searchBox.addEventListener("change", e => {
  gallery.innerHTML = "";
  fetch(
    "https://pixabay.com/api/?key=" +
      cred.PIXABAY_APP_ID +
      "&q=" +
      e.target.value +
      "&page=1&per_page=3"
  )
    .then(res => res.json())
    .then(data => {
      data.hits.map(pic => {
        let newImg = document.createElement("img");
        newImg.className = "pic";
        newImg.src = pic.webformatURL;
        gallery.appendChild(newImg);
      });
    });

  fetch(
    "https://api.unsplash.com/photos/search?page=1&per_page=3&query=" +
      e.target.value +
      "&client_id=" +
      cred.UNSPLASH_APP_ID
  )
    .then(res => res.json())
    .then(data => {
      data.map(pic => {
        let newImg = document.createElement("img");
        newImg.className = "pic";
        newImg.src = pic.urls.small;
        gallery.appendChild(newImg);
      });
    });
});
