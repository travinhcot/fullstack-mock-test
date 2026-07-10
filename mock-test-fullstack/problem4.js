const card = document.querySelector('#card');
const total = document.querySelector("#total")
async function getData(){
    try{
        const response = await fetch("https://dummyjson.com/carts");
        const data = await response.json();
        const totalPrice = data.carts.reduce((sum,cart) => {
            return sum + cart.products.reduce((cartSum, item) => cartSum + item.total, 0)
        }, 0);
        total.innerHTML = `<h3>Total: $${totalPrice.toFixed(2)}</h3>`;
        card.innerHTML = data.carts
      .map(
        (cart) => `
          <section class="cart-section">
            <h2>Cart ${cart.id}</h2>
            <p>User ID: ${cart.userId}</p>

            <div class="d-flex flex-wrap gap-3">
              ${cart.products
                .map(
                  (item) => `
                    <div class="card" style="width: 18rem;">
                      <img
                        src="${item.thumbnail}"
                        class="card-img-top"
                        alt="${item.title}"
                      >

                      <div class="card-body">
                        <h5 class="item-title">${item.title}</h5>
                        <p class="item-price">Price: $${item.price}</p>
                        <p class="item-quantity">
                          Quantity: ${item.quantity}
                        </p>
                        <p class="item-total">Total: $${item.total}</p>
                      </div>
                    </div>
                  `
                )
                .join("")}
        </div>`)
    }catch(error){
        console.error(error);
        card.innerHTML = "<p>Unable to load carts</p>"
    }
}
getData();