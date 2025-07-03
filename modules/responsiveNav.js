export default function(nav, mobileNav, mobileNavIcon) {

  //get screen calcs
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const screenRes = screenWidth / screenHeight;

  //nav vs. mobile-nav-btn visibility
  if (screenRes >= 1) {
    !mobileNavIcon.classList.contains("hidden") && mobileNavIcon.classList.add("hidden");
    nav.classList.contains("hidden") && nav.classList.remove("hidden");

  } else if (screenRes < 1) {
    mobileNavIcon.classList.contains("hidden") && mobileNavIcon.classList.remove("hidden");
    !nav.classList.contains("hidden") && nav.classList.add("hidden");

    mobileNavIcon.addEventListener("click", () => {
      
      mobileNav.classList.remove("hidden");
      mobileNavIcon.style.cssText = "opacity: 0";

      [...mobileNav.children[0].children].forEach((el) => {
        el.addEventListener("click", () => {
          mobileNav.classList.add("hidden");
          mobileNavIcon.style.cssText = "opacity: 1";
        })
      })
    })
  } 
}