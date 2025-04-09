let fruits = ["🍎", "🍊", "🍎", "🍊", "🍎", "🍊", "🍎", "🍊", "🍎", "🍊"];
let appleShelf = document.getElementById("appleshelf");
let orangeShelf = document.getElementById("orangeshelf");


function fruitSorting(){
    for (let i = 0; i < fruits.length; i++){
        if (fruits[i] === "🍎"){
            appleShelf.textContent += "🍎";
        } else if (fruits[i] === "🍊"){
            orangeShelf.textContent += "🍊";
        }
    }
}

fruitSorting();