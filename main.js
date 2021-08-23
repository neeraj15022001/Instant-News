let cardContainer = document.querySelector(".card-container");
let oldValue = 0;
cardContainer.addEventListener("scroll", (e) => {
  let scrolled = e.target.scrollTop;
  let clientHeight = e.target.clientHeight;
  let extra = 70;
  let percent = scrolled / clientHeight;
  let cardNumber = Math.ceil(percent);
  percent = parseFloat((percent / Math.ceil(percent)).toFixed(2));
  console.log(scrolled, clientHeight, cardNumber, percent);
  let cards = document.querySelectorAll(".card");
  let prevCard = cards[cardNumber - 1];
  if (cardNumber > 0) {
    let scaledValue = 1;
    if (oldValue < scrolled) {
      console.log("Up", scaledValue);
      if (scaledValue > 0.9) {
        scaledValue -= 0.1;
        prevCard.style.transform = `scale(${scaledValue})`;
        prevCard.style.opacity = 1 - percent;
      }
      if (percent > 0.95 && percent < 1) {
        prevCard.style.visibility = "hidden";
      }
    } else if (oldValue > scrolled) {
      console.log("Down", scaledValue);
      scaledValue = 0.9;
      prevCard.style.visibility = "visible";
      if (scaledValue < 1) {
        scaledValue += 0.1;
        prevCard.style.transform = `scale(${scaledValue})`;
        prevCard.style.opacity = percent + 1;
      }
    }
    oldValue = scrolled;
  }
  //   console.log(percent);
});
