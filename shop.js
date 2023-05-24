//Set locator variable to page data of where user arrives from
let locator = localStorage.getItem('pageTransferData');

//filter products if arriving from locator
let filter = locator;
console.log(filter);
const storeItems = document.querySelectorAll('.productWrapper')
storeItems.forEach((item) => {
  if (filter === 'all') {
    item.style.display = 'block'
  } else {
      if (item.classList.contains(filter)) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    };
});

//Set filter buttons and show/hide products
(function () {
  const buttons = document.querySelectorAll('.btn')
  const storeItems = document.querySelectorAll('.productWrapper')
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      filter = e.target.dataset.filter
      storeItems.forEach((item) => {
        if (filter === 'all') {
          item.style.display = 'block'
        } else {
            if (item.classList.contains(filter)) {
              item.style.display = 'block'
            } else {
              item.style.display = 'none'
            }
          }
      })
    })
  })
})();
  
//Search Function
(function () {
  const searchBox = document.querySelector('#searchBar');
  const storeItems = document.querySelectorAll('.productWrapper');
  let searchFilter;

  searchBox.addEventListener('keydown', (event) => {
    let code = event.code;
    if (code === 'Enter') {
      window.location.pathname = '/pages/shop.html';
    }
  });

  searchBox.addEventListener('keyup', (e) =>{
      const searchFilter = e.target.value.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
      const searchClassFilter = e.target.value.replace(m => m.toLowerCase());

      storeItems.forEach((item) =>{
          
          if (item.textContent.includes(searchFilter) || item.classList.contains(searchClassFilter)){
              item.style.display = 'block'
          } else {
              item.style.display = 'none'
          }
      })
  })
})();

//price slider functionality
let minValue = document.getElementById("min-value");
let maxValue = document.getElementById("max-value");

function validateRange(minPrice, maxPrice) {
  if (minPrice > maxPrice) {

    //swap min and max if min > max
    let tempValue = maxPrice;
    maxPrice = minPrice;
    minPrice = tempValue;
  }

  minValue.innerHTML = "$" + minPrice;
  maxValue.innerHTML = "$" + maxPrice;
}

const inputElements = document.querySelectorAll(".filterPrice input");

inputElements.forEach((element) => {
  element.addEventListener("change", (e) => {
    let minPrice = parseInt(inputElements[0].value);
    let maxPrice = parseInt(inputElements[1].value);

    validateRange(minPrice, maxPrice);

      if (minPrice > maxPrice) {
    
        // Swap to Values
        let tempValue = maxPrice;
        maxPrice = minPrice;
        minPrice = tempValue;
      }
    
    let storeItems = document.querySelectorAll('.productWrapper');
    let newPrice = [];
    let price = Array.from(
      document.querySelectorAll(".price"),
      element => +element.textContent
  );

    for (let i = 0; i < price.length; i++) {
      if (price[i] <= maxPrice && price[i] >= minPrice) {
        newPrice.push(price[i]);
      };
    };

    storeItems.forEach((item) => {
      if (item.classList.contains(newPrice[0])) {
        item.style.display = 'block'
      } 
      else if (item.classList.contains(newPrice[1])) {
        item.style.display = 'block'
      } 
      else if (item.classList.contains(newPrice[2])) {
        item.style.display = 'block'
      } 
      else if (item.classList.contains(newPrice[3])) {
        item.style.display = 'block'
      } 
      else if (item.classList.contains(newPrice[4])) {
        item.style.display = 'block'
      } 
      else if (item.classList.contains(newPrice[5])) {
        item.style.display = 'block'
      } 
      else if (item.classList.contains(newPrice[6])) {
        item.style.display = 'block'
      } 
      else if (item.classList.contains(newPrice[7])) {
        item.style.display = 'block'
      } 
      else if (item.classList.contains(newPrice[8])) {
        item.style.display = 'block'
      } 
      else if (item.classList.contains(newPrice[9])) {
        item.style.display = 'block'
      } 
      else if (item.classList.contains(newPrice[10])) {
        item.style.display = 'block'
      } 
      else if (item.classList.contains(newPrice[11])) {
        item.style.display = 'block'
      } 
      else {
        item.style.display = 'none'
      }
    });
  });
});
  
  validateRange(inputElements[0].value, inputElements[1].value);