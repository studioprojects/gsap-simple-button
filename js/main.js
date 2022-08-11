
const item = document.querySelector(".item");
gsap.defaults({ duration: 0.3 });

const tl = gsap
  .timeline({ paused: true })
  .to(".text", { color: "white", x: 10 })
  .to(".dot", { backgroundColor: "#F93", scale: 1.5 }, 0);

item.addEventListener("mouseenter", () => tl.play()); // mouse over
item.addEventListener("mouseleave", () => tl.reverse()); //mouse out