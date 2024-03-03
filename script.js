let inBtn = document.querySelector(".increment-button");
let deBtn = document.querySelector(".decrement-button");
console.log(inBtn, deBtn, qty);
let para = document.getElementById("qty");
let count = 0;

inBtn.addEventListener('click', function() {
    count++;
    para.innerText = count;
   // console.log(count);
})

deBtn.addEventListener('click', function() {
    count--;
    para.innerText = count
    //console.log(count);
})