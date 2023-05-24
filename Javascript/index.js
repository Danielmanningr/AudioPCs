//Stop animations from playing on page load
setTimeout(function(){
  document.body.className="";
}, 350);

//Store id of page locator when changing pages
document.querySelectorAll('.locator').forEach(occurence => {
  occurence.addEventListener('click', (e) => {
    let locator = e.target.classList[0];
    localStorage.setItem('pageTransferData', locator);
  });
});

const cartArray = [];
const arrayString = JSON.stringify(cartArray);
localStorage.setItem('cartProducts', arrayString);

document.querySelectorAll('.products').forEach(occurence => {
  occurence.addEventListener('click', (e) => {
    let display = e.target.parentElement.closest('a').id;
    localStorage.setItem('displayProduct', display);
    console.log(display)
  });
});