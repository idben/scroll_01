const html = document.querySelector("html"); 
const main = document.querySelector("main");
const areas = document.querySelectorAll(".area");
let isScrolling;

areas.forEach(area => {
  const imgURL = area.dataset.image;
  const title = area.dataset.title;
  let node;
  node = document.createElement("div");
  node.classList.add("photo");
  node.style.backgroundImage = `url(${imgURL})`;
  area.append(node);
  const block = area.querySelector(".block")
  node = document.createElement("div");
  node.classList.add("text");
  node.innerHTML = title;
  block.append(node);
});

document.addEventListener('scroll', function () {
  areas.forEach(area => area.classList.remove("active"));
  clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {
    console.log('捲動停止');
    let area = getArea();
    document.querySelector(`.area${area}`).classList.add("active");
  }, 200);
});

function getArea() {
  let currentArea = null;
  areas.forEach((area, index) => {
    const rect = area.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      console.log(`滾動到區域 ${index + 1}`);
      currentArea = index + 1;
    }
  });

  return currentArea;
}

// function getArea() {
//   let scrollNum = 0;
//   const scrollPosition = html.scrollTop;
//   console.log(scrollPosition);
  
//   if (scrollPosition >= 0 && scrollPosition < window.innerHeight) {
//     console.log('滾動到區域 1');
//     scrollNum = 1;
//   } else if (scrollPosition >= window.innerHeight && scrollPosition < window.innerHeight * 2) {
//     console.log('滾動到區域 2');
//     scrollNum = 2;
//   } else if (scrollPosition >= window.innerHeight * 2 && scrollPosition < window.innerHeight * 3) {
//     console.log('滾動到區域 3');
//     scrollNum = 3;
//   } else if (scrollPosition >= window.innerHeight * 3 && scrollPosition < window.innerHeight * 4) {
//     console.log('滾動到區域 4');
//     scrollNum = 4;
//   } else if (scrollPosition >= window.innerHeight * 4 && scrollPosition < window.innerHeight * 5) {
//     console.log('滾動到區域 5');
//     scrollNum = 4;
//   } else if (scrollPosition >= window.innerHeight * 5) {
//     console.log('滾動到區域 6');
//     scrollNum = 6;
//   }
// }