let arrayString = localStorage.getItem('cartProducts');
let cartArray = JSON.parse(arrayString);
console.log(cartArray);
console.log(displayCell);
let cell = document.querySelectorAll('.table-item');
cell.forEach((item) => {
    if (item.classList.contains(displayCell)) {
      item.style.display = 'none'
    };
});