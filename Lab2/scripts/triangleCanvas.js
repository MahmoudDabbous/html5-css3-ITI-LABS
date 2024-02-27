var canvasElement = document.getElementById('triangleCanvas');
var context = canvasElement.getContext("2d");

context.moveTo(300, 300);
context.lineTo(100, 300);
context.lineTo(300, 50);

context.strokeStyle = 'red';
context.stroke();
context.fillStyle = "red";
context.fill();

context.font = "1rem Arial";
context.fillStyle = "black";

context.fillText("c", 170, 180);
context.fillText("b", 310, 180);
context.fillText("a", 190, 320);