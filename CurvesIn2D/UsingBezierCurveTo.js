/* jshint -W069, esversion:6 */

/**
 * draw a picture that demonstrate the use of bezierCurveTo in Canvas
 **/
window.onload = function () {
  /** @type {HTMLCanvasElement} */
  let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
  let context = canvas.getContext("2d");

  // Set the image as the background
  document.getElementById("canvas1").style.background = "url('../images/water.jpg') no-repeat";

  function draw() {
    context.scale(0.6, 0.6);
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = "blue";

    context.moveTo(60, 120); // the upper curve from mouth to tail
    context.bezierCurveTo(90, 30, 200, 130, 310, 55);

    context.moveTo(60, 120); // the lower curve from mouth to tail
    context.bezierCurveTo(90, 170, 200, 110, 310, 160);

    context.moveTo(310, 55); // upper tail
    context.quadraticCurveTo(320, 80, 280, 110);

    context.moveTo(310, 160); // lower tail
    context.quadraticCurveTo(320, 120, 280, 110);

    context.moveTo(100, 100); // drawing the eye
    context.arc(100, 100, 5, 0, 2 * Math.PI);

    context.moveTo(60, 120); // drawing the mouth
    context.lineTo(80, 120);
    context.lineTo(65, 125);
    context.stroke();
  }
  for (let i = 0; i < 10; i++) {
    draw();
    context.translate(300, 300);
  }
};
