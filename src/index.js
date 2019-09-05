// import styles
import "./style.scss";

// code
const cred = {
  APP_ID: "799e6fdc1bc36296d924b9094bc41a87fe727e14e7b52c014caf8193571c5c6c",
  SECRET_KEY: "083a469649f1f0c62aabf21c739928a3801d89fa40d001e36b6429709f2c2cdc"
};

const searchBox = document.getElementById("search-input");

searchBox.addEventListener("change", e => {
  console.log(e.target.value);
});

const img = document.getElementById("pic-test");

fetch("https://api.unsplash.com/photos/random/?client_id=" + cred.APP_ID)
  .then(res => res.json())
  .then(data => {
    img.src = data.urls.small;
  })
  .catch(e => console.log(e));
