const images = document.querySelectorAll(".image-slider img");
const slider = document.querySelector(".image-slider");
let xTPos = 0;
let selectedIndex = 2;

function clickSlideRight() {
  // goes to the next image.
  // if no other image is left then stays on the last one
  selectedIndex++;
  if (selectedIndex > images.length - 1) {
    selectedIndex = images.length - 1;
  }
  slideToIndex(selectedIndex);
}

function clickSlideLeft() {
  // goes to the previous image.
  // if no other image is left then stays on the first one
  selectedIndex--;
  if (selectedIndex < 0) {
    selectedIndex = 0;
  }
  slideToIndex(selectedIndex);
}

function getImageCenter(img) {
  let rect = img.getBoundingClientRect();
  // calculates horizontal and vertical center
  let centerX = rect.left + rect.width / 2;
  let centerY = rect.top + rect.height / 2;
  // returns coordinates
  return { x: centerX, y: centerY };
}

function slideToIndex(index) {
  const viewPortW = window.innerWidth;
  const position = getImageCenter(images.item(index));
  //calculates how much the slider container has to translate
  xTPos = viewPortW / 2 - position.x + xTPos;
  // translates the slider container
  slider.style.transform = `translateX(${xTPos}px)`;
}
