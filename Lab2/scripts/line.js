const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const step = 10;

let timer = null;
let xAxis = 2 * step;
let yAxis = step;

ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(0, 0);


function drawLine() {
    if (xAxis <= canvas.width && yAxis <= canvas.height) {
        ctx.lineTo(xAxis, yAxis);
        ctx.strokeStyle = "red";
        ctx.stroke();
        xAxis += 2 * step;
        yAxis += step;
    }
    else {
        clearInterval(timer);
        alert("animation end.");
    }
}

document.getElementsByTagName('button')[0].onclick = function () {
    timer = setInterval(drawLine, 100);
}