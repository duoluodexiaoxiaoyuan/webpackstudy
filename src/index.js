// import Footer from "./Footer.js";

// const app = document.getElementById("app");

// new Footer();

import axios from "axios";
axios
  .get("http://localhost:5000/ceshi")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
axios
  .get(`/index?key=435e4eed530e42de9543dd3e3dca3db9`)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("下次一定hehehe");
