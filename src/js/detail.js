import { getData } from "./fetch.js";
const productDetailWrapperEl = document.querySelector(".product_detail_wrapper")

const renderDetailData = (data) => {
    const newCardEl = document.createElement("div");
    newCardEl.innerHTML =
        `
      <div class="product_detail_card grid grid-cols-3 gap-[50px]">
                    <div class="col-span-2 flex flex-col gap-[18px]">
                        <div class="flex flex-col gap-[8px]">
                            <h2 class="font-DM text-[24px] font-extrabold text-primary-text">
                                ${data.title} - <span>${data.description}</span>
                            </h2>
                            <div class="flex items-center gap-[10px]">
                                <div class="flex items-center">
                                    <img class="w-[18px]" src="../assets/images/star.svg" alt="">
                                    <img class="w-[18px]" src="../assets/images/star.svg" alt="">
                                    <img class="w-[18px]" src="../assets/images/star.svg" alt="">
                                    <img class="w-[18px]" src="../assets/images/star.svg" alt="">
                                    <img class="w-[18px]" src="../assets/images/star.svg" alt="">
                                </div>
                                <span class="font-I text-[14px] text-[#8B8E99] underline">${data.rating}
                                    (${data.reviews.length} sharh)</span>
                                <span class="font-I text-[14px] text-[#8B8E99]">•</span>
                                <span class="font-I text-[14px] text-[#8B8E99]">1 fotosurat</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-[12px]">
                            <div>
                                <img class="h-[490px] object-cover bg-[#efefef] rounded-[20px]"
                                    src=${data.images[0]} alt="">
                            </div>
                            <div>
                                <img class="h-[490px] object-cover bg-[#efefef] rounded-[20px]"
                                    src=${data.images[0]} alt="">
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-[20px] justify-between">
                        <div
                            class="flex flex-col gap-[8px] w-full h-[70%] p-[24px] border border-[#36374033] rounded-[20px]">
                            <div class="flex items-center gap-[10px] mb-[6px]"><span
                                    class="font-DM text-[28px] font-bold text-primary-text">Price:
                                    $${data.price}</span><del class="font-R text-[#7E818C]">$${((data.price / (100 -
            data.discountPercentage)) * 100).toFixed(2)}</del><span
                                    class="bg-primary p-[3px_10px_3px_7px] rounded-[14px] text-[12px] text-white">-${data.discountPercentage}%</span>
                            </div>
                            <div class="flex items-center gap-[12px]">
                                <img class="w-[32px]" src="../assets/images/checkmark.svg" alt="">
                                <span class="font-I text-[14px] text-primary-text">In Stock</span>
                            </div>
                            <div class="flex items-center gap-[12px]">
                                <img class="w-[32px]" src="../assets/images/checkmark.svg" alt="">
                                <span class="font-I text-[14px] text-primary-text">${data.minimumOrderQuantity} dona
                                    xarid qilish mumkin</span>
                            </div>
                            <div class="flex-1 flex flex-col gap-[12px] justify-end">
                                <div class="flex items-center justify-end gap-[12px]">
                                    <span class="font-I text-[14px] text-primary-text">${data.returnPolicy}</span>
                                </div>
                                <button class="bg-primary text-white w-full h-[56px] rounded-[12px]">Savatga
                                    qo'shish</button>
                            </div>
                        </div>
                        <div
                            class="flex flex-col gap-[10px] w-full h-[20%] p-[24px] border border-[#36374033] rounded-[20px]">
                            <div class="flex items-center gap-[18px]">
                                <img class="w-[32px]" src="../assets/images/checkmark.svg" alt="">
                                <p class="font-DM text-[20px] font-bold text-primary-text">
                                    ${data.warrantyInformation}</p>
                            </div>
                            <div class="flex items-center gap-[18px]">
                                <img class="w-[32px]" src="../assets/images/checkmark.svg" alt="">
                                <p class="font-DM text-[20px] font-bold text-primary-text">
                                    ${data.shippingInformation}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[100%] mt-[24px] mb-[36px]">
                    <div class="mb-[18px]">
                        <button
                            class="bg-primary-text text-white px-[14px] py-[8px] rounded-[24px] text-[18px]">Mahsulot
                            tavsifi</button>
                    </div>
                    <div class="flex flex-col gap-[6px]">
                        <p class="font-I text-[14px] text-primary-text"><span class="font-bold">Eni:</span>: 23.33cm
                        </p>
                        <p class="font-I text-[14px] text-primary-text"><span class="font-bold">Uzunligi:</span>
                            23.33cm</p>
                        <p class="font-I text-[14px] text-primary-text"><span class="font-bold">Diametri:</span>
                            23.33cm</p>
                    </div>
                </div>
                <div class="w-[100%] grid grid-cols-3 gap-[14px]">
                    <div class="flex flex-col flex-1 p-[24px] border border-[#36374033] rounded-[20px]">
                        <div class="flex items-start justify-between mb-[10px]">
                            <div>
                                <p class="font-I text-[14px] text-primary-text font-bold">${data.reviews[0].reviewerName}</p>
                                <p class="font-I text-[12px] text-secondary-text">${data.reviews[0].date}</p>
                            </div>
                            <div class="flex items-center">
                              <p class="text-primary">Rating: ${data.reviews[0].rating}</p>
                            </div>
                        </div>
                        <p class="font-I text-[16px] text-primary-text mb-[12px]">Review: ${data.reviews[0].comment}</p>
                        <p class=" font-I text-[14px] font-bold text-primary-text">${data.reviews[0].reviewerEmail}</p>
                    </div>
                    <div class="flex flex-col flex-1 p-[24px] border border-[#36374033] rounded-[20px]">
                        <div class="flex items-start justify-between mb-[10px]">
                            <div>
                                <p class="font-I text-[14px] text-primary-text font-bold">${data.reviews[1].reviewerName}</p>
                                <p class="font-I text-[12px] text-secondary-text">${data.reviews[1].date}</p>
                            </div>
                            <div class="flex items-center">
                              <p class="text-primary">Rating: ${data.reviews[1].rating}</p>
                            </div>
                        </div>
                        <p class="font-I text-[16px] text-primary-text mb-[12px]">Review: ${data.reviews[1].comment}</p>
                        <p class="font-I text-[14px] font-bold text-primary-text">${data.reviews[1].reviewerEmail}</p>
                    </div>
                    <div class="flex flex-col flex-1 p-[24px] border border-[#36374033] rounded-[20px]">
                        <div class="flex items-start justify-between mb-[10px]">
                            <div>
                                <p class="font-I text-[14px] text-primary-text font-bold">${data.reviews[2].reviewerName}</p>
                                <p class="font-I text-[12px] text-secondary-text">${data.reviews[2].date}</p>
                            </div>
                            <div class="flex items-center">
                              <p class="text-primary">Rating: ${data.reviews[2].rating}</p>
                            </div>
                        </div>
                        <p class="font-I text-[16px] text-primary-text mb-[12px]">Review: ${data.reviews[2].comment}</p>
                        <p class="font-I text-[14px] font-bold text-primary-text">${data.reviews[2].reviewerEmail}</p>
                    </div>
                </div>
            </div>
    `
    productDetailWrapperEl.appendChild(newCardEl);
}
window.onload = () => {
    let params = new URLSearchParams(location.search);
    getData(`/products/${params.get("q")}`, renderDetailData);
}

