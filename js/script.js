var slideInterval = 3500;

/*New Function-retrieves all of the figure elements within the section element using the id of carousel.
Returns the resulting array as the result of this function.*/
function getFigures() {
    return document.getElementById('carousel').getElementByTagName('figure');
}

function moveForward() {
    var pointer;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
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
