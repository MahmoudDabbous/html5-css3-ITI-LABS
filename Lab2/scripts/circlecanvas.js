const circleCanvas = document.getElementById('circleCanvas');
const ctx = circleCanvas.getContext('2d');


const bigCircleGradient = ctx.createRadialGradient(200, 200, 0, 200, 200, 100);
bigCircleGradient.addColorStop(0, 'red'); 
bigCircleGradient.addColorStop(1, 'green'); 


ctx.beginPath();
ctx.arc(200, 200, 100, 0, 2 * Math.PI);
ctx.fillStyle = bigCircleGradient;
ctx.fill();
ctx.closePath();


const smallCircleGradient = ctx.createRadialGradient(200, 200, 0, 200, 200, 50);
smallCircleGradient.addColorStop(0, 'blue'); 
smallCircleGradient.addColorStop(1, 'white'); 


ctx.beginPath();
ctx.arc(200, 200, 50, 0, 2 * Math.PI);
ctx.fillStyle = smallCircleGradient;
ctx.fill();
ctx.closePath();


ctx.font = '200px Arial';
ctx.fillStyle = '#fff'; 
ctx.textAlign = 'center';
ctx.fillText('N', 200, 275); 
