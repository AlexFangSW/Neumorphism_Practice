// ===================
// Drop Shadow
// ===================
// move to mouse click position
// let dropShadow = document.querySelector('.drop_shadow');
// document.addEventListener('click', (ev) => {
//     dropShadow.style.top = '0%';
//     dropShadow.style.left = '0%';
//     // Move
//     dropShadow.style.transform = `translate(${ev.clientX - 40}px, ${ev.clientY- 40}px)`;
// });

// ===================
// Navigator
// ===================
let a_links = document.querySelectorAll(".navigator a");
let indicator = document.querySelector(".navigator .indicator");
const one_step = 2.85;
a_links.forEach((item) => {
    item.addEventListener("click", () => {
        // Add class active
        a_links.forEach((temp) => {
            temp.classList.remove("active");
        });
        item.classList.add("active");
        let count = 0;
        // Move indicator
        a_links.forEach((temp) => {
            if (temp.classList.contains("active")) {
                indicator.style.transform = `translate(${2.85*count}rem)`;
            }
            count++;
        });
    });
});
