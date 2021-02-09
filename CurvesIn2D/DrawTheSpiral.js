/* jshint -W069, esversion:6 */

/**
 * The program drawes the spiral and control the drawing - account for the checkbox and slider
 **/
window.onload = function () {
    let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
    let context = canvas.getContext("2d");
    let checkBox = document.getElementById("myCheck");
    let slider = document.getElementById("myRange");

    let F = function () {
        context.clearRect(0, 0, 400, 400);
        let v = Number(slider.value);

        if (checkBox.checked == true) {
            context.beginPath();
            context.strokeStyle = "blue";
            context.lineWidth = 4;
            context.moveTo(200, 200);

            for (let j = 0; j < v; j++) {
                context.lineTo(200 + j / v * 180 * Math.cos(8 * Math.PI * j / v), 200 + j / v * 180 * Math.sin(8 * Math.PI * j / v));
            }
            context.stroke();
        } else {
            for (let i = 0; i < v; i++) {
                context.fillStyle = "blue";
                context.fillRect(200 + i / v * 180 * Math.cos(8 * Math.PI * i / v), 200 + i / v * 180 * Math.sin(8 * Math.PI * i / v), 4, 4);
            }
        }
    };
    slider.oninput = F;
    checkBox.onclick = F;
    F();
};
