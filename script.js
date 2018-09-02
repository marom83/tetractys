$(function () {
    canvas = document.getElementById('MyCanvas');
    context = canvas.getContext('2d');
     function tetractys(x, y, a) {
        context.moveTo(x + a / 2, y);
        context.lineTo(x - a / 2, y);
        context.lineTo(x, y - (Math.sqrt(Math.pow(a, 2) - Math.pow(a / 2, 2))));
        context.lineTo(x + a / 2, y);
         context.fill();
     }
    context.fillStyle = "#e36266";
    context.beginPath();
    tetractys(160, 180, 70);
    context.closePath();
    context.fill();
     context.fillStyle = "#26ad49";
    context.beginPath();
    tetractys(125, 240, 70);
    tetractys(195, 240, 70);
    context.closePath();
    context.fill();
     context.fillStyle = "#238180";
    context.beginPath();
    tetractys(230, 300, 70);
    tetractys(160, 300, 70);
    tetractys(90, 300, 70);
    context.closePath();
    context.fill();
 });