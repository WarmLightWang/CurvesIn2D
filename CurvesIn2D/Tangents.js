
/* jshint -W069, esversion:6 */

/**
 * This program implements the correct tangent vector for the parabola
 */

import { runCanvas } from "../libs/runCanvas.js";
import { functionGallery } from "./Tangents-curves.js";

window.onload = function () {
  let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById(
    "canvas1"
  ));
  let context = canvas.getContext("2d");

  function draw1(canvas, t) {
    let rx, ry;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.translate(20, 80);
    functionGallery(context, t, 0.4);
    context.restore();
  }
  runCanvas(canvas, draw1, 0, true, 0, 1, 0.02);
};
