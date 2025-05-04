import { getData } from "./fetch.js";
const productsWrapperEl = document.querySelector(".products_wrapper");
const navBottomCategories = document.querySelector(".nav_bottom_categories");
const postsSeeMoreBtn = document.querySelector(".posts_see_more_btn");

// Render products as cards
const renderProductsData = (data) => {
    data = data.products;
    const fragment = document.createDocumentFragment()
    data.forEach((item, index) => {
        if (item.id === 194) {
            postsSeeMoreBtn.style.display = "none";
        }
        const newProductsCardEl = document.createElement("div");
        newProductsCardEl.innerHTML = `
        <div data-id="${item.id}" class="products_card relative flex flex-col flex-1 rounded-[8px] duration-500 ease-out group hover:shadow-[0px_12px_8px_#959da533]">
                    <button class="absolute z-10 top-[10px] right-[10px]">
                       <img class="w-[24px]" src="./assets/images/card-like.svg" alt="">
                    </button>
                    <div class="products_image flex items-center justify-center overflow-hidden">
                        <img name="cardImage" class="w-[100%] bg-[#efefef] group-hover:scale-[1.02] duration-300 rounded-[8px] object-cover h-[309px]" src=${item.thumbnail} alt="Product Image">
                    </div>
                    <div class="products_body pt-[12px] flex flex-col flex-1 items-start p-[8px]">
                        <p class="products_title min-h-[20px] mb-[4px] font-I text-[12.8px] leading-[15.36px] text-primary-text line-clamp-2">${item.title}</p>
                        <div class="products_review_ranking flex items-center gap-[3.5px] mb-[8px]">
                         <img class="pb-[1px]" src="./assets/images/star.svg" alt="Star Icon">
                        <span class="font-I font-[300] text-[11.2px] leading-[11.2px] text-[#8B8E99]">${item.rating}</span>
                        <span class="font-I font-[300] text-[11.2px] leading-[11.2px] text-[#8B8E99]">(${item.reviews.length} sharh)</span>
                        </div>
                        <span class="font-R text-[11px] leading-[17px] inline-block text-primary-text px-[5px] rounded-[4px] bg-[#FFFF00] mb-[17px]">${item.returnPolicy}</span>
                        <div class="products_price_cart w-full flex items-end justify-between gap-[4px] flex-1">
                       <div class="flex flex-col">
                        <del class="font-I text-[11.2px] leading-[13.44px] text-[#8B8E99]">$${((item.price / (100 - item.discountPercentage)) * 100).toFixed(2)}</del>
                        <span class="font-I text-[14px] font-[500] leading-[16.8px] text-primary-text">$${item.price}</span>
                    </div>
                    <button data-cart="addToCart" class="flex items-center justify-center hover:bg-[#dee0e4] duration-300 ease-out size-[32px] border-[1px] border-[#36364033] rounded-[50%]"><img data-cart="addToCart" src="./assets/images/addcart.svg" alt="Add to cart icon"></button>
                </div>
            </div>
        </div>
        `
        fragment.appendChild(newProductsCardEl);
    })
    productsWrapperEl.appendChild(fragment);
}
// Open detail page
productsWrapperEl.addEventListener("click", (event) => {
    if (event.target.name === "cardImage") {
        const parentCard = event.target.closest(".products_card");
        const clickedCardId = parentCard.dataset.id;
        console.log(clickedCardId);
        open(`./pages/detail.html?q=${clickedCardId}`, "_self");
    }
})

// Render category List 
const renderCategoryList = (data) => {
    const fragment = new DocumentFragment();
    const li = document.createElement("li");
    li.innerHTML = `
     <li class="text-nowrap">
            <a href="#">
                <span class="text-[13px] leading-[20px] font-R lg:text-[14px] lg:leading-[24px] text-secondary-text capitalize">All</span>
            </a>
        </li>`;
    navBottomCategories.appendChild(li);

    data.forEach((category) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <li class="text-nowrap">
            <a href="#">
                <span data-id="category" class="text-[13px] leading-[20px] font-R lg:text-[14px] lg:leading-[24px] text-secondary-text capitalize">${category}</span>
            </a>
        </li>`
        fragment.appendChild(li);
    })
    navBottomCategories.appendChild(fragment);

}

let count = 0;
let cardPerLoad = 10;

navBottomCategories.addEventListener("click", (event) => {
    console.log(event.target.dataset.id);
    if (event.target.dataset.id) {
        productsWrapperEl.innerHTML = null;
        getData(`/products/category/${event.target.innerHTML}?limit=${cardPerLoad}`, renderProductsData);
    } else {
        productsWrapperEl.innerHTML = null;
        getData(`/products?limit=${cardPerLoad}`, renderProductsData);
    }
})


window.onload = () => {
    getData(`/products?limit=${cardPerLoad}`, renderProductsData);
    getData("/products/category-list", renderCategoryList);
}


postsSeeMoreBtn.addEventListener("click", () => {
    count++;
    getData(`/products?limit=${cardPerLoad}&skip=${count * cardPerLoad}`, renderProductsData);
})







// Cart
const addToCartBtnEl = document.querySelector(".add_to_cart_btn");
addToCartBtnEl.addEventListener("click", () => {
    open(`./pages/cart.html`, `_self`);
})

export const addedProducts = [];
const addProducts = (data) => {
    addedProducts.push(data);
    console.log(addedProducts);
}

productsWrapperEl.addEventListener("click", (event) => {
    const target = event.target;
    if (target.dataset.cart) {
        const parentCard = target.closest(".products_card");
        const addedCardId = parentCard.dataset.id;
        getData(`/products/${addedCardId}`, addProducts);
    }
})