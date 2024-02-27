const rectCanvas = document.getElementById('rectCanvas');
const ctx = rectCanvas.getContext('2d');

const rectWidth = 400;
const rectHeight = 200;

const gradientRed = ctx.createLinearGradient(0, 0, 0, rectHeight);
gradientRed.addColorStop(0, 'red');
gradientRed.addColorStop(1, 'blue');

ctx.fillStyle = gradientRed;
ctx.fillRect(50, 50, rectWidth, rectHeight);


const gradientBlue = ctx.createLinearGradient(0, rectHeight, 0, 2 * rectHeight);
gradientBlue.addColorStop(0, 'blue');
gradientBlue.addColorStop(1, 'green');


ctx.fillStyle = gradientBlue;
ctx.fillRect(50, 50 + rectHeight, rectWidth, rectHeight);


const middleRectWidth = 200;
const middleRectHeight = 100;
const middleRectX = 150;
const middleRectY = 200;


ctx.strokeStyle = 'black';
ctx.lineWidth = 5;


ctx.beginPath();
ctx.moveTo(middleRectX, middleRectY);
ctx.lineTo(middleRectX + middleRectWidth, middleRectY);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(middleRectX, middleRectY);
ctx.lineTo(middleRectX, middleRectY + middleRectHeight);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(middleRectX + middleRectWidth, middleRectY);
ctx.lineTo(middleRectX + middleRectWidth, middleRectY + middleRectHeight);
ctx.stroke();


