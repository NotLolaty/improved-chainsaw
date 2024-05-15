const hero__notFavProducts = document.querySelectorAll(".hero__notFavProduct");
const hero__addBtnImgs = document.querySelectorAll(".hero__addBtnImg");
const list__items = document.querySelectorAll(".hero__item");
const allProducts = document.getElementById("allProducts");
const hero__list = document.getElementById("hero__list");
const favs = document.getElementById("favs");
const added = document.getElementById("added");

allProducts.addEventListener("click", () => {
  allProducts.style.color = "#5a5ac9";
  favs.style.color = "black";
  added.style.color = "black";
  allProducts.style.transform = "scale(1.05)";
  favs.style.transform = "scale(1)";
  added.style.transform = "scale(1)";
  allProducts.style.borderBottom = "#5a5ac9 solid 2px";
  favs.style.borderBottom = "none";
  added.style.borderBottom = "none";
  hero__list.style.justifyContent = "space-between";
  for (const i in list__items) {
    list__items[i].style.display = "block";
    setTimeout(() => {
      list__items[i].style.opacity = "1";
    }, 1);
  }
});

favs.addEventListener("click", () => {
  allProducts.style.color = "black";
  favs.style.color = "#5a5ac9";
  added.style.color = "black";
  allProducts.style.transform = "scale(1)";
  favs.style.transform = "scale(1.05)";
  added.style.transform = "scale(1)";
  allProducts.style.borderBottom = "none";
  favs.style.borderBottom = "#5a5ac9 solid 2px";
  added.style.borderBottom = "none";
  hero__list.style.justifyContent = "start";
  hero__list.style.gap = "63px";
  for (const i in hero__notFavProducts) {
    if (hero__notFavProducts[i].attributes.src.value != "./img/fav.svg") {
      list__items[i].style.opacity = "0";
      setTimeout(() => {
        list__items[i].style.display = "none";
      }, 400);
    } else {
      list__items[i].style.display = "block";
      setTimeout(() => {
        list__items[i].style.opacity = "1";
      }, 1);
    }
  }
});

added.addEventListener("click", () => {
  allProducts.style.color = "black";
  favs.style.color = "black";
  added.style.color = "#5a5ac9";
  allProducts.style.transform = "scale(1)";
  favs.style.transform = "scale(1)";
  added.style.transform = "scale(1.05)";
  allProducts.style.borderBottom = "none";
  favs.style.borderBottom = "none";
  added.style.borderBottom = "#5a5ac9 solid 2px";
  hero__list.style.justifyContent = "start";
  hero__list.style.gap = "63px";
  for (const i in hero__addBtnImgs) {
    if (hero__addBtnImgs[i].attributes.src.value != "./img/remove.png") {
      list__items[i].style.opacity = "0";
      setTimeout(() => {
        list__items[i].style.display = "none";
      }, 400);
    } else {
      list__items[i].style.display = "block";
      setTimeout(() => {
        list__items[i].style.opacity = "1";
      }, 1);
    }
  }
});

hero__notFavProducts.forEach((product) => {
  product.addEventListener("click", () => {
    const src = product.getAttribute("src");
    product.setAttribute(
      "src",
      src === "./img/notFav.svg" ? "./img/fav.svg" : "./img/notFav.svg"
    );
  });
});

hero__addBtnImgs.forEach((product) => {
  product.addEventListener("click", () => {
    const src = product.getAttribute("src");
    product.setAttribute(
      "src",
      src === "./img/add.png" ? "./img/remove.png" : "./img/add.png"
    );
  });
});
