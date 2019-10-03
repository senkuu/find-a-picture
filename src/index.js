// import styles
import "./style.scss";

// import js
import themeChanger from "./js/themeChanger";
import createImages from "./js/createImages";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}

// code
const cred = {
  PIXABAY_APP_ID: "13537889-7d005d52a7e2e03e6b5e31c48",
  PEXELS_API_KEY: "563492ad6f917000010000017a80299dedaf4b2aa1345655a00d1dc9",
  UNSPLASH_APP_ID:
    "799e6fdc1bc36296d924b9094bc41a87fe727e14e7b52c014caf8193571c5c6c",
  SECRET_KEY: "083a469649f1f0c62aabf21c739928a3801d89fa40d001e36b6429709f2c2cdc"
};

const searchBox = document.getElementById("search-input");
const gallery = document.getElementById("gallery");
const themeChangerIcon = document.getElementById("theme-changer");

const pexels_header = new Headers();

let currentPage = 0;

pexels_header.append("Authorization", cred.PEXELS_API_KEY);

themeChangerIcon.addEventListener("click", e => {
  themeChanger(themeChangerIcon);
});

searchBox.addEventListener("change", e => {
  gallery.innerHTML = "";
  currentPage = 1;
  fetch(
    "https://pixabay.com/api/?key=" +
      cred.PIXABAY_APP_ID +
      "&q=" +
      e.target.value +
      "&page=1&per_page=5"
  )
    .then(res => res.json())
    .then(data => {
      const column = document.createElement("div");
      column.className = "column";
      data.hits.map(pic => {
        createImages(pic.webformatURL, column);
      });
      gallery.appendChild(column);
    });

  fetch(
    "https://api.unsplash.com/photos/search?page=1&per_page=5&query=" +
      e.target.value +
      "&client_id=" +
      cred.UNSPLASH_APP_ID
  )
    .then(res => res.json())
    .then(data => {
      const column = document.createElement("div");
      column.className = "column";
      data.map(pic => {
        createImages(pic.urls.small, column);
      });
      gallery.appendChild(column);
    });

  fetch(
    "https://api.pexels.com/v1/search?query=" +
      e.target.value +
      "&per_page=5&page=1",
    {
      method: "GET",
      headers: pexels_header
    }
  )
    .then(res => res.json())
    .then(data => {
      const column = document.createElement("div");
      column.className = "column";
      data.photos.map(pic => {
        createImages(pic.src.medium, column);
      });
      gallery.appendChild(column);
    });
});

window.onscroll = e => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight &&
    searchBox.value
  ) {
    currentPage++;
    fetch(
      "https://pixabay.com/api/?key=" +
        cred.PIXABAY_APP_ID +
        "&q=" +
        searchBox.value +
        "&page=" +
        currentPage +
        "&per_page=5"
    )
      .then(res => res.json())
      .then(data => {
        const column = document.createElement("div");
        column.className = "column";
        data.hits.map(pic => {
          createImages(pic.webformatURL, column);
        });
        gallery.appendChild(column);
      });

    fetch(
      "https://api.unsplash.com/photos/search?page=" +
        currentPage +
        "&per_page=5&query=" +
        searchBox.value +
        "&client_id=" +
        cred.UNSPLASH_APP_ID
    )
      .then(res => res.json())
      .then(data => {
        const column = document.createElement("div");
        column.className = "column";
        data.map(pic => {
          createImages(pic.urls.small, column);
        });
        gallery.appendChild(column);
      });

    fetch(
      "https://api.pexels.com/v1/search?query=" +
        searchBox.value +
        "&per_page=5&page=" +
        currentPage +
        "",
      {
        method: "GET",
        headers: pexels_header
      }
    )
      .then(res => res.json())
      .then(data => {
        const column = document.createElement("div");
        column.className = "column";
        data.photos.map(pic => {
          createImages(pic.src.medium, column);
        });
        gallery.appendChild(column);
      });
  }
};
