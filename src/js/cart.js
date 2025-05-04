const sectionCartEl = document.querySelector(".section_cart");
const cartWrapperEl = document.querySelector(".cart_added_wrapper");
const cartCountEl = document.querySelector(".cart_count");
const cartProductsCountEl = document.querySelectorAll(".cart_title_products_count");
const cartOriginalPriceEl = document.querySelector(".cart_original_price");
const cartTotalPriceEl = document.querySelector(".cart_total_price");
const cartDiscountPriceEl = document.querySelector(".cart_discount_price");


const renderCart = (data) => {
    console.log(data);
    const fragment = new DocumentFragment();
    let uniqueData = data.filter((item, index, self) =>
        index === self.findIndex(obj => obj.id === item.id)
    );
    uniqueData.forEach((product) => {
        const addedProductEl = document.createElement("div");
        addedProductEl.innerHTML = `
        <div class="cart_content border-b py-[16px] border-[#d7d7d9]">
           <p class="text-[#7E818C] font-I text-[12px]">Uzum Market omborida</p>
           <h3 class="mb-[14px] font-DM text-[18px] text-primary-text font-[700]">5-maydan boshlab yetkazamiz</h3>
           <div class="cart_content_details flex items-center gap-[32px] flex-1/5">
               <div class="cart_image flex items-center justify-center">
                   <img class="w-[120px] bg-[#efefef] object-cover" src=${product.images[0]} alt="" width="120" height="120">
               </div>
               <div class="cart_body flex flex-col gap-[14px] flex-4/5">
                   <div class="flex items-center gap-[10px] justify-between">
                       <p class="font-I text-[16px] flex-3/4 text-primary-text line-clamp-3">${product.title} - ${product.description}</p>
                       <div class="flex-1/4 flex items-center justify-end">
                           <button class="delete_cart_btn flex items-center gap-[6px]">
                               <img class="w-[26px]" src="../assets/images/delete.svg" alt="">
                               <span class="text-nowrap font-I text-[13.6px] text-[#9fa0a5]">Yo'q qilish</span>
                           </button>
                       </div>
                   </div>
                   <div class="flex items-start justify-between">
                       <p><span class="text-[#7E818C] text-[14px] font-I">Sotuvchi:</span class="text-primary-text text-[14px] font-I"> ${product.brand}</p>
                       <div
                           class="border border-[#d7d7d9] flex items-center rounded-sm overflow-hidden">
                           <button class="px-[16px] text-secondary-text py-[6px]">-</button>
                           <span class="px-[10px] py-[6px]">1</span>
                           <button class="px-[16px] text-secondary-text py-[6px]">+</button>
                       </div>
                       <div class="flex flex-col items-end">
                           <p class="text-[22px] text-primary-text font-I">$${product.price}</p>
                           <del class="text-[14px] text-[#7E818C] font-I">$${(product.price * (1 + (product.discountPercentage / 100))).toFixed(2)}</del>
                       </div>
                   </div>
               </div>
           </div>
`
        fragment.appendChild(addedProductEl)
    })
    cartWrapperEl.appendChild(fragment);
}


const addedProducts = JSON.parse(localStorage.getItem("cart")) || [];
window.onload = () => {
    renderCart(addedProducts);
}
cartCountEl.innerHTML = addedProducts.length;
cartProductsCountEl.forEach((item) => {
    item.innerHTML = addedProducts.length;
})

let originalPrice = 0;
let totalPrice = 0;
let discountPrice = 0;

addedProducts.forEach((product) => {
    originalPrice += (product.price * (1 + (product.discountPercentage / 100)));
    totalPrice += product.price;
    discountPrice = originalPrice - totalPrice;
})

console.log(originalPrice);

cartOriginalPriceEl.innerHTML = `$${originalPrice.toFixed(2)}`;
cartTotalPriceEl.innerHTML = `$${totalPrice}`;
cartDiscountPriceEl.innerHTML = `$${discountPrice.toFixed(2)}`;