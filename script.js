
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
