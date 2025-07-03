function calcArrowAngle(el) {

  // Get computed lengths
const computedHeight = (window.getComputedStyle(el).height);
const computedWidth = (window.getComputedStyle(el).width);

  // Convert lengths to numbers
const height = Number(computedHeight.slice(0, computedHeight.indexOf("p")));
const width = Number(computedWidth.slice(0, computedWidth.indexOf("p"))) / 2;

  //Calc long side measurement
const longSide = Math.sqrt(Math.pow(height, 2) + (width ** 2) - (2 * height * width * (Math.cos(90))));

  //Calc small angle measurement
const smallAngle = (Math.asin( (Math.sin(angle) * height) / longSide ) * 100);

return smallAngle
}

