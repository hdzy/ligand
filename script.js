let currentState = '';
let activeCircle = document.querySelector('.circle-active');
let activeLCircle, activeText;
let activeContent = document.querySelector('.active-content');
const applicationPopup = document.getElementsByClassName('application-popup')[0];

const sectionsConfig = {
    all: ['bio-eq', 'ph-1-3', 'research', 'rwd-rwe', 'reg-create', 'docs', 'help', 'qua-mon', 'stats', 'bio-eq', 'ph-1-3', 'research', 'rwd-rwe', 'reg-create', 'docs', 'help', 'qua-mon', 'stats', 'reg-create', 'cli-help', 'lit-search', 'zo-specs', 'pres', 'qua-mon', 'module', 'ohlp', 'cli-test', 'lit-search', 'bad-crit', 'comed'],
    phase: ['bio-eq', 'ph-1-3', 'research', 'rwd-rwe', 'reg-create', 'docs', 'help', 'qua-mon', 'stats'],
    medotd: ['reg-create', 'cli-help', 'lit-search', 'zo-specs', 'pres'],
    client: ['qua-mon'],
    reg: ['module', 'ohlp', 'cli-test', 'lit-search', 'bad-crit'],
    med: ['comed'],
}

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
    updateServices();
    scrollToTitle();
}

document.querySelectorAll('.content-learnmore-button').forEach((e) => {
    e.addEventListener('click', scrollToTitle)
})

function scrollToTitle() {
    document.querySelector('.services-title').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

document.querySelectorAll('.services-tag').forEach(e => {
    e.addEventListener('click', updateState, e);
})

function updateState(el) {
    if (el.target.dataset.section !== 'all') changeCircleState(el)
    if (el.target.dataset.section != undefined) {
        currentState = el.target.dataset.section;
    } else currentState = el.target.parentNode.dataset.section;
    updateServices();
}
function updateServices() {
    let activeCards = document.querySelectorAll('.services-card-active');
    let cards = document.querySelectorAll('.services-card');

    document.querySelector('.services-tag-active').classList.remove('services-tag-active');
    document.querySelector(`.services-tag[data-section=${currentState}]`).classList.add('services-tag-active');


    cards.forEach((e) => {
        if (sectionsConfig[currentState].indexOf(e.dataset.section) !== -1) {
            e.classList.add('services-card-active');
        } else if (e.classList.contains('services-card-active')) {
            e.classList.remove('services-card-active');
        }
    })
}


document.querySelectorAll('.default-submit-button, .content-submit-button, #application-popup-close').forEach((e) => {
    e.addEventListener('click', manageApplicationPopup)
})
function manageApplicationPopup() {
    if (applicationPopup.classList.contains('hidden')) {
        document.body.style.overflow = 'hidden';
        applicationPopup.classList.remove('hidden');
    } else {
        document.body.style.overflow = 'initial';
        applicationPopup.classList.add('hidden');
    }
}

manageNumbers();

function manageNumbers() {

    const years = document.querySelectorAll('.default-huge-text')[0].innerHTML.replace('+', '');
    const research = document.querySelectorAll('.default-huge-text')[1].innerHTML.replace('+', '');
    const clients = document.querySelectorAll('.default-huge-text')[2].innerHTML.replace('+', '');

    let yearsCounter = 0, researchCounter = 0, clientsCounter = 0;

    const intervalY = setInterval(() => {
        if (years >= yearsCounter) document.querySelectorAll('.default-huge-text')[0].innerHTML = yearsCounter++ + '+';
        else  clearInterval(intervalY);
    }, 100);


    const intervalR = setInterval(() => {
        if (research >= researchCounter) document.querySelectorAll('.default-huge-text')[1].innerHTML = researchCounter++ + '+';
        else  clearInterval(intervalR);
    }, 1);


    const intervalC = setInterval(() => {
        if (clients >= clientsCounter) document.querySelectorAll('.default-huge-text')[2].innerHTML = clientsCounter++ + '+';
        else  clearInterval(intervalC);
    }, 10)

}