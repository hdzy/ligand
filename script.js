let currentState = '';
let activeCircle = document.querySelector('.circle-active');
let activeLCircle, activeText;
let activeContent = document.querySelector('.active-content');


document.querySelectorAll('#circle-client,' +
    ' #circle-med,' +
    ' #circle-phase,' +
    ' #circle-medotd,' +
    ' #circle-reg, ' +
    ' #circle-l-client,' +
    ' #circle-l-med,' +
    ' #circle-l-phase,' +
    ' #circle-l-medotd,' +
    ' #circle-l-reg,' +
    ' #info-client,' +
    ' #info-med,' +
    ' #info-phase,' +
    ' #info-medotd,' +
    ' #info-reg').forEach(e => {
        e.addEventListener('click', changeCircleState, e.target)
})

function changeCircleState(el) {
    let elementType;

    if (el.target.dataset.section !== undefined) {
        elementType = el.target.dataset.section;

    } else elementType = el.target.parentNode.dataset.section;

    currentState = elementType;

    if (activeCircle != null) {
        activeCircle.classList.remove('circle-active');
    }

    activeCircle = document.getElementById(`circle-${elementType}`);
    activeCircle.classList.add('circle-active');

    if (activeLCircle != null) {
        activeLCircle.classList.remove('circle-l-active');
    }

    activeLCircle = document.getElementById(`circle-l-${elementType}`);
    activeLCircle.classList.add('circle-l-active');

    if (activeText != null) {
        activeText.classList.remove('text-active');
    }

    activeText = document.getElementById(`info-${elementType}`);
    activeText.classList.add('text-active');

    if (activeContent != null) {
        activeContent.classList.remove('active-content');
    }

    activeContent = document.getElementsByClassName(`${elementType}-content`)[0];
    activeContent.classList.add('active-content');


}