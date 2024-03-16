const product = [{
    id: Math.floor(Math.random(Date.now()) * 100),
    p_img: `./images/products/product-1-1.jpg`,
    p_Categori: "Clothing",
    p_Name: "Colorful Pattern  Shirts",
    p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
    p_Prise: "₹ 800",
},

{
    id: Math.floor(Math.random(Date.now()) * 100),
    p_img: `./images/products/product-2-1.jpg`,
    p_Categori: "Clothing",
    p_Name: "Plain Color Pocket Shirts",
    p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
    p_Prise: "₹ 599",
},

{
    id: Math.floor(Math.random(Date.now()) * 100),
    p_img: `./images/products/product-3-1.jpg`,
    p_Categori: "Shirts",
    p_Name: "Vintage Floral Oil Shirts",
    p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
    p_Prise: "₹ 1299",
},

{
    id: Math.floor(Math.random(Date.now()) * 100),
    p_img: `./images/products/product-4-1.jpg`,
    p_Categori: "Clothing",
    p_Name: "Colorful Hawaiian Shirts",
    p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
    p_Prise: "₹ 450",
},

{
    id: Math.floor(Math.random(Date.now()) * 100),
    p_img: `./images/products/product-5-1.jpg`,
    p_Categori: "Shirt",
    p_Name: "Flowers Sleeve Lopel Shirts",
    p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
    p_Prise: "₹ 350",
},

{
    id: Math.floor(Math.random(Date.now()) * 100),
    p_img: `./images/products/product-6-1.jpg`,
    p_Categori: "Shirts",
    p_Name: "Ethnic Floral Causual Shirts",
    p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
    p_Prise: "₹ 950",
},

{
    id: Math.floor(Math.random(Date.now()) * 100),
    p_img: `./images/products/product-7-1.jpg`,
    p_Categori: "Shoes",
    p_Name: "Stitching Hole Sandals ",
    p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
    p_Prise: "₹ 3450",
},

{
    id: Math.floor(Math.random(Date.now()) * 100),
    p_img: `./images/products/product-8-1.jpg`,
    p_Categori: "Shirt",
    p_Name: "Mens Porcelain  Shirt",
    p_rating: `<i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>`,
    p_Prise: "₹ 899",
},
];

wrapper.innerHTML = product
    .map((x) => {
        return `   <div class="products">
  
                        <img src="${x.p_img}" alt="">
                    <div class="payment">

           
                        <div class="carts">
                        <div class="qick-view tooltip1">
                        <a href=""><button><i class="fa-regular fa-eye"></i></a>
                        <span class="tooltiptext1">Qick View</span></button>

                    </div>
                                <div class="wishlist tooltip2">
                                    <a href=""><button><i class="fa-regular fa-heart"></i></a>
                                    <span class="tooltiptext2">Add To Wishlist</span></button>

                                </div>

                                <div class="compare tooltip2">
                                        <a href=""><button><i class="fa-solid fa-shuffle"></i></a>
                                        <span class="tooltiptext2">Compare</span></button>
                                </div>
                        </div>
                    </div>
                        <div class="p-text">
                                <p class="categori">${x.p_Categori}</p>
                                <h3 class="p-name"><a href="">${x.p_Name}</a></h3>
                                <h3 class="p-rating">${x.p_rating}</h3>
                        </div>
                        <div class="priseandbtn">
                            <div class="p-prise">
                                <h4>${x.p_Prise}</h4>
                            </div>
                            <div class="btnp tooltip">
                                <button onclick="addToCart(${x.id})"><i class="fa-solid fa-cart-shopping"></i>
                                <span class="tooltiptext">Add To Cart</span></button>
                            </div>
                        </div>
                    </div>`;
    })
    .join("");

function openCart() {
    const productCart = document.getElementById("productCart")
    const checkClass = productCart.getAttribute("class")

    if (checkClass === "cartContainer cartNotActive") {
        productCart.setAttribute("class", "cartContainer cartActive")
    } else {
        productCart.setAttribute("class", "cartContainer cartNotActive")
    }
}

//! Add to cart in localStorage
function addToCart(selectedProduct) {
    const findProduct = product.find((allProducts) => allProducts.id == selectedProduct)

    let local = JSON.parse(localStorage.getItem('cartData')) || []
    console.log(local);
    local.push(findProduct)

    localStorage.setItem('cartData', JSON.stringify(local))
}

