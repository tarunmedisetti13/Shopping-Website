const imgs = document.querySelectorAll(".header-slider ul img");
const control_prev = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");
let n = 0;
function myfunction() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
myfunction();
control_prev.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    }
    else {
        n = imgs.length - 1;
    }
    myfunction();
})

next_btn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    }
    else {
        n = 0;
    }
    myfunction();
})
const items = document.querySelectorAll(".products");
for (const item of items) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}
var count_cat = 0;
function Count_items() {
    count_cat++;
    document.getElementById("cart_icon_count").innerHTML = count_cat;
}
function Add_to_cart(button) {
    // button.textContent = "Added";
    Count_items();
}
// --------------------
var btna = document.getElementById("btn12");
var modal1 = document.getElementById("modal");
btna.onclick = function () {
    modal1.style.display = "block";
}
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}