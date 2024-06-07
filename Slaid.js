let images = [{
    url:  "./img/Chair.png",
    title: "ROSTOV-ON-DON ADMIRAL",
    city: "Rostov-on-Don LCD admiral",
    ApartmentArea: "81 m2",
    RepairTime: "3.5 months",
    RepairCost: "Upon request"
}, {
    url: "./img/Second.png",
    title: "SOCHI THIEVES",
    city: "Sochi Thieves",
    ApartmentArea: "105 m2",
    RepairTime: "4 months",
    RepairCost: "Upon request"
}, {
    url: "./img/Tree.png",
    title: "ROSTOV-ON-DON PATRIOTIC",
    city: "Rostov-on-Don Patriotic",
    ApartmentArea: "93 m2",
    RepairTime: "3 months",
    RepairCost: "Upon request"
}];


function initSlaid(options) {
if (!images || !images.length) return;
options = options || {
dots: true
};

let sliderImages = document.querySelector(".slider__images");
let sliderArrows = document.querySelector(".arrows_and_circles");
let sliderDots = document.querySelector(".slider__circle");
let sliderTitleParent = document.querySelector(".tree_item");
let city = document.querySelector(".city")
let area = document.querySelector(".ApartmentArea")
let time = document.querySelector(".RepairTime")
let cost = document.querySelector(".RepairCost")
let nextNumber = 0;



initImages();
initArrows();
initsDots();
initTitles();
moveText(nextNumber);


function initImages() {
    images.forEach((image, index) => {
        let imageDiv = `<div class="images n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" dataindex="${index}"></div>`
        sliderImages.innerHTML += imageDiv;

        let dot = `<div class="slider__circle-item n${index} ${index === 0? "active" : ""}" data-index = ${index}></div>`;
        sliderDots.innerHTML += dot;

        let title = `<p class="p_second-text_text-R n${index} ${index === 0? "active" : ""}" data-index="${index}">${image.title}</p>`
        sliderTitleParent.innerHTML += title;
           
    });
}

function initTitles() {
    sliderTitleParent.querySelectorAll(".p_second-text_text-R").forEach(nav => {
        nav.addEventListener("click", function(){
            moveText(this.dataset.index);
            moveSlider(this.dataset.index);
        })
})
}

function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow =>
        arrow.addEventListener("click", function(){
            if (arrow.classList.contains("left")){
                nextNumber = nextNumber === 0 ? images.length - 1 : nextNumber - 1;
            } else {
                nextNumber = nextNumber === images.length - 1 ? 0 : nextNumber + 1;
            }
            moveText(nextNumber);
            moveSlider(nextNumber);
        })
        )
}

function initsDots() {
    sliderDots.querySelectorAll(".slider__circle-item").forEach(dot => {
        dot.addEventListener("click", function(){
            moveText(this.dataset.index);
            moveSlider(this.dataset.index);
        })
    })
}


function moveText(num){
    city.innerHTML = images[num].city;
    area.innerHTML = images[num].ApartmentArea;
    time.innerHTML = images[num].RepairTime;
    cost.innerHTML = images[num].RepairCost;
}


function moveSlider(num) {
sliderImages.querySelector(".active").classList.remove("active");
sliderImages.querySelector(".n" + num).classList.add("active");
if (options.dots) {
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");

    sliderTitleParent.querySelector(".active").classList.remove("active");
    sliderTitleParent.querySelector(".n" + num).classList.add("active");
}
if (options.titles)changeTitle(num);
}


function changeTitle(num){
    if (!images[num].title) return
    let sliderTitle = sliderImages.querySelector(".p_second-text_text-R");
sliderTitle.innerText = images[num].title;
}
}


let sliderOptions = {
    dots: true,
}

document.addEventListener("DOMContentLoaded", () => {
    initSlaid();
});
