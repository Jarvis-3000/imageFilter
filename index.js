const inputs = document.querySelectorAll(".filter");
const reset = document.querySelector(".reset");
const image_url = document.querySelector("#image-url");
const change = document.querySelector(".change");
const image = document.querySelector(".image");

const names = ["blur", "sepia", "invert", "contrast", "grayscale", "opacity"];

const filters = {
  blur: 0,
  sepia: 0,
  invert: 0,
  contrast: 60,
  grayscale: 0,
  opacity: 100,
};

const resetFilters = {
  blur: 0,
  sepia: 0,
  invert: 0,
  contrast: 60,
  grayscale: 0,
  opacity: 100,
};

//attaching the changeOutput function to each input
inputs.forEach((elem) => {
  elem.addEventListener("change", changeOutput);
});


function changeOutput(event) {
  const name = event.target.name;
  const value = event.target.value;

  filters[name] = value;
  image.style.filter = ``

  for (let name of names) {
    let value=filters[name]

    if (name == "blur") {
      let val = value / 8;
      image.style.filter += `blur(${val}px) `;
    } 
    else if (name == "invert") {
      let val = value;
      image.style.filter += `${name}(${val}%) `;
    } 
    else {
      let val = value * 2;
      image.style.filter += `${name}(${val}%) `;
    }
  }
}


//change image
function changeImage() {
  if(image_url.value){
    image.style.backgroundImage = `url("${image_url.value}")`;
  }
  image_url.value = "";
}
change.addEventListener("click", changeImage);


//reset filters
function resetFunction(){
    //removing all the filters
    image.style.filter = ``

    //for reseting the input tracks
    inputs.forEach(input=>{
        input.value=resetFilters[input.name]
    })
    
}
reset.addEventListener("click",resetFunction)