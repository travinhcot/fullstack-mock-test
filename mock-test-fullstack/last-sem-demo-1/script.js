const card = document.getElementById("cart");

async function render() {
  const response = await fetch("https://dummyjson.com/carts");
  const data = await response.json();
  card.innerHTML = "";
  card.innerHTML = data.carts.map(
    (cart) => `
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
            ${cart.products.map(
              (item) => `
              <div class="" style="width: 18rem;">
                <div class="border-2 border-black-500 p-3">
                    <img src="${item.thumbnail}" class="card-img-top" width="100px" alt="${cart.title}">
                    <h1 class=" text-center">${cart.id}</h1>
                    <h1 class="card-title">${item.title}</h1>
                    <h2 class="text-red-500 font-bold" id="price">$${item.price} </h2>
                </div>
            </div>`,
            )}
            
        </section>
    `,
  );
}
render();
