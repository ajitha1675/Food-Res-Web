import {orderDetailsData} from './orderData.js';

const menuBtn = document.querySelector(".mobileMenu");
const mobileNavigation = document.querySelector(".mobileNavigation")
console.log(menuBtn);

let openNavigation = true
menuBtn.addEventListener("click",()=>{
     if(openNavigation){
        mobileNavigation.classList.add("active")
        openNavigation = false
     }else{
        mobileNavigation.classList.remove("active")
        openNavigation = true
     }
})


const orderProductList = document.querySelector(".list_of_items_order")

let orderProductCard = ''

for(let i = 0; i < orderDetailsData.length ; i++){
   orderProductCard += `
   <div class="card">
                    <img src="./assets/${orderDetailsData[i].img}"/>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="description">
                        <div class="title">${orderDetailsData[i].title}</div>
                        <div class="price_button">
                          <p>${orderDetailsData[i].price}</p>
                          <button class="btn">Buy Now</button>
                        </div>
                    </div>
                </div>
   `
}

orderProductList.innerHTML = 
console.log(orderDetailsData);

