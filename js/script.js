const slideInterval = 3500;
function getFigures() {
    return document.getElementById('carousel').getElementsByTagName('figure');
}
function moveForward() {
    let pointer;
    let figures = getFigures();
    for (let i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}
function startPlayback() {
    setTimeout(moveForward, slideInterval);
}
startPlayback();
