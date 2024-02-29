const prevBtn = document.querySelector(".prevbtn");
const nextBtn = document.querySelector(".nextbtn");
const container = document.querySelector(".container");

prevBtn.addEventListener("click",(event)=>{
    container.scrollLeft -= 980;
    container.style.scrollBehavior = "smooth";
    
})
nextBtn.addEventListener("click",(event)=>{
    
    container.style.scrollBehavior = "smooth";
    container.scrollLeft += 980;
})