const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');
const colorText = document.getElementById('colorText');

function updateColor() {
    const red = redRange.value;
    const green = greenRange.value;
    const blue = blueRange.value;

    colorText.style.color = `rgb(${red}, ${green}, ${blue})`;
}

redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);