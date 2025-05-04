import { addedProducts } from "./main.js";

const cartWrapperEl = document.querySelector(".cart_wrapper");
console.log(cartWrapperEl);

const renderCart = (data) => {
    console.log(data);
    cartWrapperEl.innerHTML = `
<h1 class="title_cart mb-[24px]">Savatingiz, 1ta mahsulot</h1>
<div class="cart_added_wrapper grid grid-cols-[2.5fr_1fr] gap-[20px]">
    <div class="cart_added_product">
        <div class="cart_content border border-[#d7d7d9] p-[16px]">
            <p class="">Uzum Market omborida</p>
            <h3 class="mb-[14px]">5 maydan boshlab yetkazamiz</h3>
            <div class="cart_content_details flex items-center gap-[24px]">
                <div class="cart_image bg-[hotpink]">
                    <img src="../assets/images/hero-banner-mobile.jpg" alt="" width="120">
                </div>
                <div class="cart_body flex flex-col gap-[10px]">
                    <div class="flex items-center justify-between">
                        <p class="font-I text-primary-text">Mushuklar uchun quruq ovqat
                            ProBalance Hair&Beauty, chiroyli yung va sog'lom
                            teri, 400 g, 32 PB 654</p>
                        <div class="flex-1/4 flex items-center justify-end">
                            <button class="delete_cart_btn flex items-center gap-[4px]">
                                <img class="w-[24px]" src="../assets/images/user.svg" alt="">
                                <span class="text-nowrap">Yo'q qilish</span>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <p>Sotuvchi: ООО Biznes Aziya</p>
                        <div
                            class="border border-[#d7d7d9] flex items-center rounded-sm overflow-hidden">
                            <button class="px-[24px] text-secondary-text py-[6px]">-</button>
                            <span class="px-[10px] py-[6px]">1</span>
                            <button class="px-[24px] text-secondary-text py-[6px]">+</button>
                        </div>
                        <div>
                            <p>30 900 so'm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="border border-[#d7d7d9] p-[16px]"></div>
</div>
`
}

window.onload = () => {
    renderCart(addedProducts);
}

const sectionCartEl = document.querySelector(".section_cart");
console.log(sectionCartEl);
