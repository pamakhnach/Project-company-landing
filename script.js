var divList = document.querySelectorAll('.accordion-item__trigger'); 
var divArray = Array.prototype.slice.call(divList);
var navMenu = document.querySelector('.menu__nav');

divArray.forEach((item) => 
    item.addEventListener('click', () => {
    item.parentNode.classList.toggle('active');
})                                                             
);

function Burger () {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        navMenu.classList.toggle('active');
    });
};

Burger();

