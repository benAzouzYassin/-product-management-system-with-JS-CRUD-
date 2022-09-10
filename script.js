// variables
const title = document.getElementById("title");
const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const ads = document.getElementById("ads");
const discount = document.getElementById("discount");
const total = document.querySelector(".total");
const count = document.querySelector("#count");
const category = document.querySelector("#category");
const createBtn = document.querySelector("#create-btn");
let totalPrice = 0;
// functions
const checkDiscount = (dis) => {
  if (dis == "") {
    return 0;
  } else {
    return dis;
  }
};
const getId = () => {
  if (localStorage.getItem("id")) {
    //check if id exists on the local storage
    let current = Number(localStorage.getItem("id"));
    localStorage.setItem("id", JSON.stringify(current + 1));
    return current;
  } else {
    localStorage.setItem("id", 1);
    return 0;
  }
};
// event listeners
price.onkeyup = () => {
  if (
    !isNaN(price.value) &&
    !isNaN(taxes.value) &&
    !isNaN(ads.value) &&
    price.value != "" &&
    ads.value != "" &&
    taxes.value != ""
  ) {
    totalPrice = Number(price.value) + Number(taxes.value) + Number(ads.value);
    total.innerText = totalPrice;
  }
};
taxes.onkeyup = () => {
  if (
    !isNaN(price.value) &&
    !isNaN(taxes.value) &&
    !isNaN(ads.value) &&
    price.value != "" &&
    ads.value != "" &&
    taxes.value != ""
  ) {
    totalPrice = Number(price.value) + Number(taxes.value) + Number(ads.value);
    total.innerText = totalPrice;
  }
};
ads.onkeyup = () => {
  if (
    !isNaN(price.value) &&
    !isNaN(taxes.value) &&
    !isNaN(ads.value) &&
    price.value != "" &&
    ads.value != "" &&
    taxes.value != ""
  ) {
    totalPrice = Number(price.value) + Number(taxes.value) + Number(ads.value);
    total.innerText = totalPrice;
  }
};
discount.onkeyup = () => {
  if (!isNaN(discount.value) && discount.value != "") {
    totalPrice =
      Number(price.value) +
      Number(taxes.value) +
      Number(ads.value) -
      Number(discount.value);
    total.innerText = totalPrice;
  }
};
createBtn.onclick = () => {
  let check = true;
  if (isNaN(price.value)) {
    alert("price be a number");
    check = false;
  }
  if (isNaN(taxes.value)) {
    alert("taxes should be a number");
    check = false;
  }
  if (isNaN(ads.value)) {
    alert("ads should be a number");
    check = false;
  }
  if (isNaN(discount.value)) {
    alert("discount should be a number");
    check = false;
  }
  if (price.value === "") {
    alert("price is empty");
    check = false;
  }

  if (taxes.value === "") {
    alert("taxes is empty");
    check = false;
  }

  if (ads.value === "") {
    alert("ads is empty");
    check = false;
  }
  if (title.value === "") {
    alert("ads is empty");
    check = false;
  }
  if (category.value === "") {
    alert("category is empty");
    check = false;
  }
  if (isNaN(count.value)) {
    check = false;
    alert("count should be a number");
  }
  if (count.value === "") {
    alert("count is empty");
    check = false;
  }
  if (check === true) {
    //save the values into an object with the id and evreything
    for (let i = 0; i < Number(count.value); i++) {
      console.log("will save it", {
        id: getId(),
        taxes: taxes.value,
        title: title.value,
        price: price.value,
        ads: ads.value,
        discount: checkDiscount(discount.value),
        category: category.value,
        total: totalPrice,
      });
    }
  } else {
    console.log("won't save it");
  }
};
