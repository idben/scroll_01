const html = document.querySelector("html"); 
const main = document.querySelector("main");
const areas = document.querySelectorAll(".area");
gsap.registerPlugin(ScrollTrigger);

areas.forEach((area, index) => {
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

  ScrollTrigger.create({
    trigger: area,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      area.classList.add("active");
      console.log(`滾動到區域 ${index + 1}`);
    },
    onLeave: () => area.classList.remove("active"),
    onEnterBack: () => area.classList.add("active"),
    onLeaveBack: () => area.classList.remove("active"),
    markers: false
  });
});