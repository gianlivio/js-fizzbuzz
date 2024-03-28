const rowElem = document.querySelector(".row");

let boxListElems = "";

for (let i = 1; i <= 100; i++)  {
    let num = i;
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("fizzbuzz");
        num = "fizzbuzz"
    } else if (num % 3 === 0) {
        console.log("fizz");
        num = "fizz";
    } else if (num % 5 === 0) {
        console.log("buzz");
        num = "buzz";
    } else {
        console.log(num);
    }



// output

boxListElems += ` <div class="box">${num}</div>`;
}

console.log(boxListElems);
rowElem.innerHTML = boxListElems;