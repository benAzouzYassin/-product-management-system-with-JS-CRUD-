// variables
const body = document.querySelector("body");
const title = document.getElementById("title");
const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const ads = document.getElementById("ads");
const discount = document.getElementById("discount");
const total = document.querySelector(".total");
const count = document.querySelector("#count");
const category = document.querySelector("#category");
const createBtn = document.querySelector("#create-btn");
const productsTable = document.querySelector("table");
const deleteAllBtn = document.querySelector("#delete-all-btn");
const deleteBtn = document.querySelector(".delete-btn");
let totalPrice = 0;

// functions
const renderProducts = () => {
  productsTable.innerHTML = `<tr>
  <th>ID</th>
  <th>TITLE</th>
  <th>PRICE</th>
  <th>TAXES</th>
  <th>ADS</th>
  <th>DISCOUNT</th>
  <th>TOTAL</th>
  <th>CATEGORY</th>
  <th>UPDATE</th>
  <th>DELETE</th>
</tr>`;
  if (localStorage.getItem("products")) {
    let currentProducts = JSON.parse(localStorage.getItem("products"));
    for (const product of currentProducts) {
      productsTable.innerHTML += `<tr>
  <td>${product.id}</td>
  <td>${product.title}</td>
  <td>${product.price}</td>
  <td>${product.taxes}</td>
  <td>${product.ads}</td>
  <td>${product.discount}</td>
  <td>${product.total}</td>
  <td>${product.category}</td>
  <td><button class="update-btn">update</button></td>
  <td><button class="delete-btn" onclick="deleteProduct(this)">delete</button></td>
</tr>`;
    }
  }
};
const getSavedProducts = () => {
  return localStorage.getItem("products");
};

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
body.onload = () => {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify([]));
    renderProducts();
  } else {
    renderProducts();
  }
};

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
    let oldProducts = JSON.parse(localStorage.getItem("products"));
    let newProducts = [].concat(oldProducts);
    //save the values into an object with the id and evreything
    for (let i = 0; i < Number(count.value); i++) {
      newProducts = newProducts.concat({
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
    localStorage.setItem("products", JSON.stringify(newProducts)); //saves the new products in the local storage
  }
  renderProducts();
};
deleteAllBtn.onclick = () => {
  localStorage.clear();
  renderProducts();
};
function deleteProduct(that) {
  let productId = that.parentNode.parentNode.children[0].innerText; //the id of the product
  let products = JSON.parse(localStorage.getItem("products"));
  let filtredProducts = products.filter((obj) => {
    return obj.id != productId;
  });
  localStorage.setItem("products", JSON.stringify(filtredProducts));
  renderProducts();
}
