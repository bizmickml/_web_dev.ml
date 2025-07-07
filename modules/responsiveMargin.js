export default function(el, minMargin, maxMargin) {

  //choose min/max screen widths in px - the viewport width at which the margin will stop growing or shrinking
  const maxScreenWidth = 2560
  const minScreenWidth = 1250

  //get window font size
  const calculatedFontSize = window.getComputedStyle(document.documentElement).fontSize;

  //convert window font size string to a number
  const calcFontSizeNum = Number(calculatedFontSize.slice(0, calculatedFontSize.indexOf("p")));

  //Convert min/max nums to rems
  const minScreenRem = minScreenWidth / calcFontSizeNum;
  const maxScreenRem = maxScreenWidth / calcFontSizeNum;
  const minMarginRem = minMargin / calcFontSizeNum;
  const maxMarginRem = maxMargin / calcFontSizeNum;
  
  //Calcs
  const slope = (maxMarginRem - minMarginRem) / (maxScreenRem - minScreenRem);
  const yIntersect = (((0 - minScreenRem) * slope) + minMarginRem);

  //returns a font size clamp statement for responsive margins
  const clamp = `clamp(${minMarginRem}rem, ${yIntersect}rem + ${slope * 100}vw, ${maxMarginRem}rem)`;
  
  el.setAttribute("style", `margin: 5vh ${clamp}`)
}