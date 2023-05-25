//Show product info based on where the user arrived from
let displayimg = localStorage.getItem('displayProduct');
console.log(displayimg)

let thumbnails = document.getElementById("thumbnails");
let galleryimg = document.createElement("img");

galleryimg.src = "images/ProductGalleries/" + displayimg + "/image1.jpg";
galleryimg.alt = "Image 1";
galleryimg.id = "currentImage";
galleryimg.classList.add("gallery");

gallery.appendChild(galleryimg);

for (let i = 1; i < 4; i++) {
  let thumb = document.createElement("img");

  thumb.src = "images/ProductGalleries/" + displayimg + "/image" + i + ".jpg";
  thumb.alt = "Image " + i;
  
  thumb.classList.add("thumb");

  thumbnails.appendChild(thumb);

  thumb.addEventListener(
    "click", function() {
      galleryimg.src = this.src;
      galleryimg.alt = this.alt;
    }
  );
}

const displayInfo = document.getElementById(displayimg);
displayInfo.style.display = 'flex';

const newDisplay = displayimg += 's';
console.log(newDisplay);
const displayTable = document.getElementById(newDisplay);
displayInfo.style.display = 'flex';

// let arrayString = localStorage.getItem('cartProducts');
// let cartArray = JSON.parse(arrayString);
// console.log(cartArray);

// const cartbtn = document.getElementById('add-to-cart');
// cartbtn.addEventListener('click', (e) => {
//   cartArray.push(displayimg);
//   arrayString = JSON.stringify(cartArray);
//   localStorage.setItem('cartProducts', arrayString);
// });

const cartbtn = document.querySelectorAll('add-to-cart')
  cartbtn.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (displayimg === 'The Queens') {
        localStorage.setItem('Cart', displayimg);
        console.log('bye')
      } else if (displayimg === 'The Kings') {
          localStorage.setItem('Cart', displayimg);
          console.log(hi)
        }
  });
});
