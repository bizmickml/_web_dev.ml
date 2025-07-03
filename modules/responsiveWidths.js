export default function(el, minElWidth, maxElWidth, minScreenWidth, maxScreenWidth) {
  /**
   * Takes parameters as numbers representing the px values of each item
   * minElWidth = the size of the El on the smallest screen
   * maxElWidth = the size of the El on the largest screen
   * minScreenWidth and maxScreenWidth = the screen widths at which the El will stop growing or shrinking even if the screen width is larger/smaller
   */

  //get window font size
  const calculatedFontSize = window.getComputedStyle(document.documentElement).fontSize;

  //convert window font size string to a number
  const calcFontSizeNum = Number(calculatedFontSize.slice(0, calculatedFontSize.indexOf("p")));

  //Convert min/max nums to rems
  const minElRem = minElWidth / calcFontSizeNum;
  const maxElRem = maxElWidth / calcFontSizeNum;
  const minScreenRem = minScreenWidth / calcFontSizeNum;
  const maxScreenRem = maxScreenWidth / calcFontSizeNum;
  
  //Calcs
  const slope = (maxElRem - minElRem) / (maxScreenRem - minScreenRem);
  const yIntersect = (((0 - minScreenRem) * slope) + minElRem);

  //sets the element's width for responsive page design
  el.setAttribute("style", `width: clamp(${minElRem}rem, ${yIntersect}rem + ${slope * 100}vw, ${maxElRem}rem)`)
}
