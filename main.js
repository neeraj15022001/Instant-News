// let cards = document.querySelectorAll(".card");
// cards[0].addEventListener("click", (e)=> {
//     console.log(e)
// })
let cardContainer = document.querySelector(".card-container");
cardContainer.addEventListener("scroll", (e) => {
  // console.log(e.target.scrollHeight);
  let scrolled = e.target.scrollTop;
  let clientHeight = e.target.clientHeight;
  // console.log(scrolled);
  // console.log(clientHeight);
  let extra = 70;
  let percent = scrolled / clientHeight;
  let cards = document.querySelectorAll(".card");
  percent = (percent / Math.ceil(percent)).toFixed(2);
  // console.log(percent)
  cards.forEach((card, index) => {
    console.log(index + " " + card.offsetTop);
    if (card.offsetTop == card.offsetTop * index) {
      console.log(`Card ${index} found`);
    }
    // let blur = percent*2;
    // card.style.filter = `blur(${blur}px) opacity(${150 - percent*100}%)`;
  });
  // card1.style.filter = `blur(${blur}px) opacity(${150 - percent*100}%)`;
  // console.log(card1.clientWidth)
  // card1.clientWidth -= (percent * 2);
  // console.log(card1.clientWidth)
  // card1.style.transform = `translateY(-${percent*10}px)`
  // console.log(percent.toFixed(2))
});
