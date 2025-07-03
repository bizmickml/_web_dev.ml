export default function(el, min, max) {
  //choose left and right padding at small screen size
  const minPadding = min

  //choose left and right padding at max screen size
  const maxPadding = max

  //choose min/max screen widths in px - the viewport width at which the font will stop growing or shrinking
  const maxScreenWidth = 2560
  const minScreenWidth = 320

  //get window font size
  const calculatedFontSize = window.getComputedStyle(document.documentElement).fontSize;

  //convert window font size string to a number
  const calcFontSizeNum = Number(calculatedFontSize.slice(0, calculatedFontSize.indexOf("p")));

  //Convert min/max nums to rems (px / page font size in px = % or the page size font size in px)
  const minPaddingRem = minPadding / calcFontSizeNum;
  const maxPaddingRem = maxPadding / calcFontSizeNum;
  const minScreenRem = minScreenWidth / calcFontSizeNum;
  const maxScreenRem = maxScreenWidth / calcFontSizeNum;
  
  //Calcs
  const slope = (maxPaddingRem - minPaddingRem) / (maxScreenRem - minScreenRem);
  const yIntersect = (((0 - minScreenRem) * slope) + minPaddingRem);

  //define a clamp statement for responsive padding
  const clamp =  `clamp(${minPaddingRem}rem, ${yIntersect}rem + ${slope * 100}vw, ${maxPaddingRem}rem)`;

  el.setAttribute("style", `padding: 5vh ${clamp}`);
}