export default function(minFontSize, fontSizeMultiplier, minScreenWidth, maxScreenWidth) {
  /**
   * Takes parameters as numbers representing the px values of each item
   * minFontSize = the smallest allowed font size on the smallest screen
   * fontSizeMultiplier = a number to multiply the minFontSize by to calculate the maximum allowed font size on any screen
   * minScreenWidth and maxScreenWidth = the screen widths at which the font size will stop growing or shrinking even if the screen width is larger/smaller
   */

  //calc max font size
  const maxFontSize = minFontSize * fontSizeMultiplier

  //get window font size
  const calculatedFontSize = window.getComputedStyle(document.documentElement).fontSize;

  //convert window font size string to a number
  const calcFontSizeNum = Number(calculatedFontSize.slice(0, calculatedFontSize.indexOf("p")));

  //Convert min/max nums to rems
  const minFontRem = minFontSize / calcFontSizeNum;
  const maxFontRem = maxFontSize / calcFontSizeNum;
  const minScreenRem = minScreenWidth / calcFontSizeNum;
  const maxScreenRem = maxScreenWidth / calcFontSizeNum;
  
  //Calcs
  const slope = (maxFontRem - minFontRem) / (maxScreenRem - minScreenRem);
  const yIntersect = (((0 - minScreenRem) * slope) + minFontRem);

  //returns a font size clamp statement for responsive font size
  return `clamp(${minFontRem}rem, ${yIntersect}rem + ${slope * 100}vw, ${maxFontRem}rem)`;
  
}