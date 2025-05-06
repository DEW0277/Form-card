let addProductBtn = document.getElementById('add_product__btn');
let modal = document.getElementById('modal');
let form = document.getElementById('form');
let iputName = document.getElementById('iput_name');
let textareaValue = document.getElementById('textarea_value');
let inputPrice = document.getElementById('input_price');
let inputUrl = document.getElementById('input_url');
let add = document.getElementById('add');
let cencel = document.getElementById('cencel');
let productsCards = document.getElementById('products_cards');

function openModal() {
  modal.style.display = 'inline-block';
}

let products = JSON.parse(localStorage.getItem('products'))
  ? JSON.parse(localStorage.getItem('products'))
  : [];

console.log(products);
// arrow Function

products.forEach((product) => {
  productsCards.innerHTML += `
  <div class="product_card">
       <img class="product_image" src="${product.image_url}" alt="">
    
       <h1>${product.name}</h1>
       <p>${product.product_des}</p>
       <h2>$${product.price}</h2>
       <button>Buy Now</button>
       <button id="delete_btn" >Delete</button>
  </div>
 `;
});

cencel.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'none';
});

const deleteBtn = document.querySelectorAll('#delete_btn');

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', () => {
deleteBtn[i].parentElement.remove()
  });
}

add.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    inputUrl.value &&
    iputName.value &&
    textareaValue.value &&
    inputPrice.value
  ) {
    let newProduct = {
      name: iputName.value,
      price: inputPrice.value,
      image_url: inputUrl.value,
      product_des: textareaValue.value,
    };

    console.log(newProduct);

    let setProducts = [...products, newProduct];

    localStorage.setItem('products', JSON.stringify(setProducts));

    console.log(setProducts);

    inputUrl.value = null;
    iputName.value = null;
    textareaValue.value = null;
    inputPrice.value = null;
    modal.style.display = 'none';
  } else {
    alert("Bo'sh joylarni to'ldiring");
  }
});
