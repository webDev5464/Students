let image_index = 1;

function sliderHandler(x) {
  let i;
  let slider_div = document.getElementById("slider");
  if (x > slider_div) {
    image_index = 1;
  }
  if (x < 1) {
    image_index = slider_div.length;
  }
  
  console.log(slider_div.length);
}

