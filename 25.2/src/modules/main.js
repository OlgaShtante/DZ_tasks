const canvas = document.querySelector("canvas");
const canvasContext = canvas.getContext("2d");

//Full width&height of window:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const mouse = {};
mouse.x = 0;
mouse.y = 0;

addEventListener("load", event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

// Objects
class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: Math.random() - 0.5, // random x value from -0.5 to 0.5
      y: Math.random() - 0.5 // random y value from -0.5 to 0.5
    };
  }

  draw() {
    canvasContext.beginPath();
    canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    canvasContext.fillStyle = this.color;
    canvasContext.fill();
    canvasContext.closePath();
  }

  update() {
    this.x += this.velocity.x; // moving x coordinate
    this.y += this.velocity.y; // moving y coordinate
    this.draw();
  }
}

// Implementation
let circles = [];
let init = () => {
  for (let i = 0; i < 4000; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 0.5;
    const color = "lightblue";
    circles.push(new Circle(x, y, radius, color));
  }
};
// Animation Loop
let animate = () => {
  requestAnimationFrame(animate); // creating an animation loop
  canvasContext.clearRect(0, 0, canvas.width, canvas.height); // erasing the whole canvas
  circles.forEach(circle => {
    circle.update();
  });
};

init();
animate();
