const heroContainer = document.querySelector(".hero");
const middleContainer = document.querySelector(".middle");
const maleBodyContainer = document.querySelector(".male__body--container");
const femaleBodyContainer = document.querySelector(".female__body--container");
const btnMale = document.querySelector(".btn-male");
const btnFemale = document.querySelector(".btn-female");
const rangeSliderMale = document.querySelector(".range__slider--male");
const bodyImageMale = document.querySelector(".body__image--male");
const rangeSliderFemale = document.querySelector(".range__slider--female");
const bodyImageFemale = document.querySelector(".body__image--female");
const swipeHandMale = document.querySelector(".body__swipe--hand--male");
const swipeHandFemale = document.querySelector(".body__swipe--hand--female");
const bodyProgressBtnMale = document.querySelector(".body__progress--btn-male");
const bodyProgressBtnFemale = document.querySelector(".body__progress--btn-female");
const bodyFormMale = document.querySelector(".body__form--container-male");
const bodyFormFemale = document.querySelector(".body__form--container-female");
const bodyArrowBtnMale = document.querySelector(".body__arrow--box-male");
const bodyArrowBtnFemale = document.querySelector(".body__arrow--box-female");

// define an object to map range values to image filenames
const imageArrayMale = ["male_01.d6f82abd.png", "male_02.51a94a2c.png", "male_03.63f61f4c.png", "male_04.142854cb.png", "male_05.201f1c4d.png"];

const imageArrayFemale = ["female_01.b6fe98a3.png", "female_02.d9500124.png", "female_03.bf7dda16.png", "female_04.0c5032a6.png", "female_05.0ff2f17d.png"];

if (btnMale) {
  btnMale.addEventListener("click", function () {
    maleBodyContainer.style.display = "block";
    heroContainer.style.display = "none";
    middleContainer.style.display = "none";
  });
}

if (btnFemale) {
  btnFemale.addEventListener("click", function () {
    femaleBodyContainer.style.display = "block";
    heroContainer.style.display = "none";
    middleContainer.style.display = "none";
  });
}

if (bodyProgressBtnMale && bodyFormMale) {
  bodyProgressBtnMale.addEventListener("click", () => {
    bodyFormMale.style.display = "block";
    maleBodyContainer.style.display = "none";
  });
}

if (bodyProgressBtnFemale && bodyFormFemale) {
  bodyProgressBtnFemale.addEventListener("click", () => {
    bodyFormFemale.style.display = "block";
    femaleBodyContainer.style.display = "none";
  });
}

if (bodyArrowBtnMale) {
  bodyArrowBtnMale.addEventListener("click", () => {
    maleBodyContainer.style.display = "block";
    bodyFormMale.style.display = "none";
  });
}

if (bodyArrowBtnFemale) {
  bodyArrowBtnFemale.addEventListener("click", () => {
    femaleBodyContainer.style.display = "block";
    bodyFormFemale.style.display = "none";
  });
}

// add an event listener to the range slider
if (rangeSliderMale) {
  rangeSliderMale.addEventListener("input", function () {
    swipeHandMale.style.display = "none";
    // get the current value of the slider
    const sliderValue = this.value;
    // get the corresponding image filename from the image map
    const imageFilename = imageArrayMale[sliderValue - 1];
    // set the src attribute of the image to the new filename
    bodyImageMale.src = `/media/${imageFilename}`;
  });
}

if (rangeSliderFemale) {
  rangeSliderFemale.addEventListener("input", function () {
    swipeHandFemale.style.display = "none";
    // get the current value of the slider
    const sliderValue = this.value;
    // get the corresponding image filename from the image array
    const imageFilename = imageArrayFemale[sliderValue - 1];
    // set the src attribute of the image to the new filename
    bodyImageFemale.src = `/media/${imageFilename}`;
  });
}
