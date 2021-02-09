/* jshint -W069, esversion:6 */

import { draggablePoints } from "../libs/dragPoints.js";

/**
 * Use this UI code!
 * With dragPoint, click near a point to drag it. Shift-Click to add a new point. 
 * Ctrl-Click (or Meta-Click on a Mac) to delete a point. 
 **/
window.onload = function () {
  /** @type {HTMLCanvasElement} */
  let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById(
    "canvas1"
  ));
  let context = canvas.getContext("2d");
  let thePoints = [
    [100, 100],
    [150, 70],
    [200, 100],
    [200, 160],
    [150, 190],
    [100, 160]
  ];

  function draw() {
    context.clearRect(0, 0, 400, 400);
    context.beginPath();
    context.strokeStyle = "blue";
    context.lineWidth = 4;
    context.moveTo(thePoints[thePoints.length - 1][0], thePoints[thePoints.length - 1][1]);

    for (let j = 0; j < thePoints.length; j++) {
      context.lineTo(thePoints[j][0], thePoints[j][1]);

    }
    context.stroke();

    for (let i = 0; i < thePoints.length; i++) {
      context.fillStyle = "red";
      context.beginPath();
      context.arc(thePoints[i][0], thePoints[i][1], 6, 0, 2 * Math.PI);
      context.fill();
    }
  }
  draggablePoints(canvas, thePoints, draw);
  draw();
};
