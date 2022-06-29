const elements =  document.querySelectorAll(".slideShow-Element");
let slideCount =1; 

const interval = setInterval(()=> {
    slideCount ++;
    let currentSlide = document.querySelector(".current")
    currentSlide.classList.remove("current");
    
    if(slideCount>elements.length){
        elements[0].classList.add("current")
        slideCount=1;
    }
     else{
        currentSlide.nextElementSibling.classList.add("current")
    }
}, 1500);

