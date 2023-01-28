  /* Change Header With Scroll Bar */
window.onscroll = function() {headerFun()};
function headerFun() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {        
      document.getElementById("header").style.backgroundColor = "#323232";
      document.getElementById("logo").style.padding = "15px 0";
      document.getElementById("menu").style.top = "25px";
    } 
    else {
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("logo").style.padding = "30px 0px";
        document.getElementById("menu").style.top = "45px";
    }   
}

/* Change Header With Media Query */
//Animate Gear And Show Setting
let gear = document.querySelector(".navbar .fa-bars");
let navbar = document.querySelector(".navbar .navbar-dropdown"); 
gear.onclick = function() {
    this.classList.toggle("fa-bars-staggered");
    navbar.classList.toggle("hidden");
    navbar.classList.toggle("show");
};

var owl = $('.feature .owl');
owl.owlCarousel({
    items:4,
    margin:10,
    loop:true,
    autoplay:true,
    dotsEach:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }

});

var owl = $('.testimonial .owl');
owl.owlCarousel({
    items:3,
    margin:10,
    loop:true,    
    autoplay:true,
    dotsEach:true,  
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
});