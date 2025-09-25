const canvas = document.getElementById('myCanvas')
const clrBtn = document.getElementById('clearCanvas')
const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');

const brush = canvas.getContext('2d')

let painting = false;
let currentColor = "#000000";
let currentSize = 5;

function startPosition(e){
    if (e.target.id !== "myCanvas") return;
    painting = true;
}
function endPosition(){
    painting = false;
    brush.beginPath();
}


function draw(e){
    if(!painting) return;

    brush.lineWidth = currentSize;
    brush.lineCap = 'round';
    brush.strokeStyle = currentColor;

    brush.lineTo(e.offsetX, e.offsetY);
    brush.stroke();
    brush.beginPath();
    brush.moveTo(e.offsetX, e.offsetY)
}

function clearCanvas(){
    brush.clearRect(0, 0, canvas.width, canvas.height);
}

colorPicker.addEventListener('input', (e) => {
    currentColor = e.target.value;
});
brushSize.addEventListener('mousedown', () => {
    painting = false;
});
brushSize.addEventListener('input', (e) => {
    currentSize = e.target.value;
});

document.addEventListener('mousedown', startPosition)
document.addEventListener('mouseup', endPosition)
document.addEventListener('mouseleave', endPosition)
document.addEventListener('mousemove', draw);

clrBtn.addEventListener('click', clearCanvas)