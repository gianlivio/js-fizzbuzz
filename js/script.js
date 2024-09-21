const rowElem = document.querySelector(".row");

let boxListElems = "";

for (let i = 1; i <= 100; i++) {
    let num = i;
    let className = "";
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("MaremmaMaiala");
        num = "MaremmaMaiala";
        className = "MaremmaMaiala";
    } else if (num % 3 === 0) {
        console.log("Maremma");
        num = "Maremma";
        className = "Maremma";
    } else if (num % 5 === 0) {
        console.log("Maiala");
        num = "Maiala";
        className = "Maiala";
    } else {
        console.log(num);
    }

    // output with dynamic class
    boxListElems += `<div class="box ${className}">${num}</div>`;
}

console.log(boxListElems);
rowElem.innerHTML = boxListElems;