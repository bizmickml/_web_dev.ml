export default function() {
  //choose min root margin in rem
  const minMargin = 0

  //calc max margin in rem
  const maxMargin = 10

  //choose min/max screen widths in px - the viewport width at which the margin will stop growing or shrinking
  const maxScreenWidth = 2540
  const minScreenWidth = 320

  //get window font size
  const calculatedFontSize = window.getComputedStyle(document.documentElement).fontSize;

  //convert window font size string to a number
  const calcFontSizeNum = Number(calculatedFontSize.slice(0, calculatedFontSize.indexOf("p")));

  //Convert min/max nums to rems
  const minScreenRem = minScreenWidth / calcFontSizeNum;
  const maxScreenRem = maxScreenWidth / calcFontSizeNum;
  
  //Calcs
  const slope = (maxMargin - minMargin) / (maxScreenRem - minScreenRem);
  const yIntersect = (((0 - minScreenRem) * slope) + minMargin);

  //returns a font size clamp statement for responsive margins
  return `clamp(${minMargin}rem, ${yIntersect}rem + ${slope * 100}vw, ${maxMargin}rem)`;
  
}