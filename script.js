function getProducts() {
    return fetch("https://dummyjson.com/products?limit=5")
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  }
  
  const containerElement = document.querySelector(".product-container");
  
  function addProductTooDom(product) {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <p>ID: ${product.id} </p>
      <p> ${product.title} </p>
      <p>Price ${product.price} </p>
      `;
    containerElement.appendChild(productElement);
  }
  
  getProducts().then((data) => {
    console.log(data);
    data.products.map((product) => {
      addProductTooDom(product);
    });
  });