var boxes = [...document.querySelectorAll('.box')];
var skillItems = [...document.querySelectorAll('.skills-tech .item')];
var skillItemsDesc = [...document.querySelectorAll('.description .item-desc')];

var sections = [...document.querySelectorAll('section')];

window.addEventListener('scroll', showboxes);

showboxes();

function showboxes() {
    const heightscreen = window.innerHeight;

    const triggerbottom = heightscreen * 0.8;

    boxes.forEach((element)=>{
        const topBox = element.getBoundingClientRect().top;
        const bottomBox = element.getBoundingClientRect().bottom;

        if(topBox < triggerbottom){
            element.classList.add("show");
        } else {
            element.classList.remove("show");

        }

    });

    sections.forEach((element, index)=>{
        const topBox = element.getBoundingClientRect().top;
        
        if(topBox < triggerbottom*0.8){

            document.querySelectorAll("header li").forEach(element => {
                element.classList.remove("active");
            });

            document.querySelectorAll("header li")[index].classList.add("active");

        }

    });
}

function changeSkill(event){
    var element = event.parentNode.querySelector(".active");
    element.classList.remove("active");
    event.classList.add("active");

    var frontEnd = document.querySelector(".front-end");
    var backEnd = document.querySelector(".back-end");
    var others = document.querySelector(".others");

    if(event.classList.contains("front")){
        backEnd.classList.remove("box");
        backEnd.classList.remove("show");

        others.classList.remove("show");
        others.classList.remove("box");

        frontEnd.classList.add("show");
        frontEnd.classList.add("box");
        
        frontEnd.querySelectorAll(".item")[0].click();

    } else if(event.classList.contains("back")){
        frontEnd.classList.remove("box");
        frontEnd.classList.remove("show");
        
        others.classList.remove("show");
        others.classList.remove("box");

        backEnd.classList.add("box");
        backEnd.classList.add("show");

        backEnd.querySelectorAll(".item")[0].click();
        
    }  else{
        backEnd.classList.remove("box");
        backEnd.classList.remove("show");

        frontEnd.classList.remove("box");
        frontEnd.classList.remove("show");

        others.classList.add("show");
        others.classList.add("box");

        others.querySelectorAll(".item")[0].click();
    }
    boxes = [...document.querySelectorAll('.box')];
}

skillItems.forEach((element, index) => {
    element.addEventListener("click", ()=>{
        document.querySelector(".selected").classList.remove("selected");
        document.querySelector(".description .item-desc.show").classList.remove("show");
        skillItemsDesc[index].classList.add("show");
        element.classList.add("selected");

        document.querySelector(".note").style.display = "none";
    })
});

if(window.innerWidth<761){
    var navItems = [...document.querySelectorAll("nav ul li")];

    navItems.forEach((element)=>{
        element.addEventListener("click", ()=>{
            $(".nav-barrs").click();
        })
    })
}

$(document).ready(function(){
    var typed = new Typed(".typed", {
        strings: ["Diaku Zena Manuel^4000"],
        typeSpeed: 80,
        backspeed: 90,
        loop: true
    });

    $(".nav-barrs").click(function(){
        $(".fa-bars").toggleClass("fa-times");
        $("nav").toggleClass("active");
    });

    

})