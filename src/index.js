// import styles
import "./style.scss";

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
const themeChanger = document.getElementById("theme-changer");

const pexels_header = new Headers();

let currentPage = 0;

pexels_header.append("Authorization", cred.PEXELS_API_KEY);

themeChanger.addEventListener("click", e => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  themeChanger.classList.toggle("fa-moon-o");
  themeChanger.classList.toggle("fa-sun-o");
});

searchBox.addEventListener("change", e => {
  gallery.innerHTML = "";
  currentPage = 1;
  fetch(
    "https://pixabay.com/api/?key=" +
      cred.PIXABAY_APP_ID +
      "&q=" +
      e.target.value +
      "&page=1&per_page=9"
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
    "https://api.unsplash.com/photos/search?page=1&per_page=9&query=" +
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

  fetch(
    "https://api.pexels.com/v1/search?query=" +
      e.target.value +
      "&per_page=9&page=1",
    {
      method: "GET",
      headers: pexels_header
    }
  )
    .then(res => res.json())
    .then(data => {
      data.photos.map(pic => {
        let newImg = document.createElement("img");
        newImg.className = "pic";
        newImg.src = pic.src.medium;
        gallery.appendChild(newImg);
      });
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
        "&per_page=3"
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
      "https://api.unsplash.com/photos/search?page=" +
        currentPage +
        "&per_page=3&query=" +
        searchBox.value +
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

    fetch(
      "https://api.pexels.com/v1/search?query=" +
        searchBox.value +
        "&per_page=3&page=" +
        currentPage +
        "",
      {
        method: "GET",
        headers: pexels_header
      }
    )
      .then(res => res.json())
      .then(data => {
        data.photos.map(pic => {
          let newImg = document.createElement("img");
          newImg.className = "pic";
          newImg.src = pic.src.medium;
          gallery.appendChild(newImg);
        });
      });
  }
};
