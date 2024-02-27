const countlabel = document.getElementById("display-count");
const decreasebtn = document.getElementById("decrease-btn") ;
const resetbtn = document.getElementById("reset-btn");
const increasebtn = document.getElementById("increase-btn");
let count = 0;

decreasebtn.onclick = function () {
    count--;
    countlabel.textContent = count;
}

resetbtn.onclick = function () {
    count = 0;
    countlabel.textContent = count;
}

increasebtn.onclick = function () {
    count++; 
    countlabel.textContent = count;
}