const tabsContainer = document.querySelector('#tabs');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomRight = document.querySelector('#bottom-right');
const bottomLeft = document.querySelector('#bottom-left');

const topLeftValue = document.querySelector('#top-left-value');
const topRightValue = document.querySelector('#top-right-value');
const bottomRightValue = document.querySelector('#bottom-right-value');
const bottomLeftValue = document.querySelector('#bottom-left-value');

const preview = document.querySelector('#preview');
const previewButton = document.querySelector('#preview-button');
const coordinates = document.querySelector('#coordinates');

const cssCode = document.querySelector('#css-code');
const copyButton = document.querySelector('#copy-button');
const copyMessage = document.querySelector('#copy-message');

const presetForm = document.querySelector('#preset-form');
const presetName = document.querySelector('#preset-name');
const presetError = document.querySelector('#preset-error');

const scrollTopButton = document.querySelector('#scroll-top');

const backgroundColor = document.querySelector('#background-color');
const textAlign = document.querySelector('#text-align');


// hideTabs 
function hideTabs() {
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    tabContents.forEach(function (content) {
        content.classList.remove('active');
    });
}

//showTab 
function showTab(tabName) {
    const tab = document.querySelector(`[data-tab="${tabName}"]`);
    const content = document.querySelector(`[data-content="${tabName}"]`);

    if (tab) tab.classList.add('active');
    if (content) content.classList.add('active');
}

/*
tabs.forEach(function (tab) {
    tab.addEventListener('click', function (event) {
        console.log(event.type);
        console.log(event.target);
        console.log(event.currentTarget);

        const tabName = event.currentTarget.dataset.tab;

        hideTabs();
        showTab(tabName);
    });
});
*/

function generateBorderRadius() {
    // Завдання 5
    const topLeftRadius = topLeft.value;
    const topRightRadius = topRight.value;
    const bottomRightRadius = bottomRight.value;
    const bottomLeftRadius = bottomLeft.value;

    const radius = `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px`;

    preview.style.borderRadius = radius;

    topLeftValue.textContent = `${topLeftRadius} px`;
    topRightValue.textContent = `${topRightRadius} px`;
    bottomRightValue.textContent = `${bottomRightRadius} px`;
    bottomLeftValue.textContent = `${bottomLeftRadius} px`;

    cssCode.value =
        `border-radius: ${radius};\n` +
        `background-color: ${backgroundColor.value};\n` +
        `text-align: ${textAlign.value};`;
}

topLeft.addEventListener('input', generateBorderRadius);
topRight.addEventListener('input', generateBorderRadius);
bottomRight.addEventListener('input', generateBorderRadius);
bottomLeft.addEventListener('input', generateBorderRadius);

backgroundColor.addEventListener('input', function () {
    preview.style.backgroundColor = backgroundColor.value;
    generateBorderRadius();
});

textAlign.addEventListener('change', function () {
    preview.style.textAlign = textAlign.value;
    generateBorderRadius();
});

// focus та blur
function validatePresetName() {
    if (presetName.value.trim() === '') {
        presetName.classList.add('error');
        presetError.textContent = 'Введіть назву пресета';
        return false;
    }

    presetName.classList.remove('error');
    presetError.textContent = '';
    return true;
}

presetName.addEventListener('focus', function () {
    presetName.classList.add('focused');
});

presetName.addEventListener('blur', function () {
    presetName.classList.remove('focused');
    validatePresetName();
});

//submit та preventDefault
function handlePresetSubmit(event) {
    event.preventDefault();

    if (!validatePresetName()) {
        return;
    }

    console.log(`Пресет: ${presetName.value.trim()}`);
    console.log(cssCode.value);
}

presetForm.addEventListener('submit', handlePresetSubmit);


function handleKeyDown(event) {
    if (event.key === 'Escape') {
        topLeft.value = 0;
        topRight.value = 0;
        bottomRight.value = 0;
        bottomLeft.value = 0;

        generateBorderRadius();
        preview.style.borderRadius = '0px';
    }
}

document.addEventListener('keydown', handleKeyDown);


function copyCSS() {
    navigator.clipboard.writeText(cssCode.value)
        .then(function () {
            copyMessage.textContent = 'CSS-код скопійовано';
        })
        .catch(function () {
            cssCode.select();
            document.execCommand('copy');
            copyMessage.textContent = 'CSS-код скопійовано';
        });
}

copyButton.addEventListener('click', copyCSS);


tabsContainer.addEventListener('click', function (event) {
    if (!event.target.classList.contains('tab')) {
        return;
    }

    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);

    const tabName = event.target.dataset.tab;

    hideTabs();
    showTab(tabName);
});

// поширення подій 
preview.addEventListener('click', function () {
    console.log('Preview click');
});

previewButton.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('Button click');
});


preview.addEventListener('mouseover', function () {
    preview.classList.add('hovered');
});

preview.addEventListener('mouseout', function () {
    preview.classList.remove('hovered');
});


preview.addEventListener('mousemove', function (event) {
    coordinates.textContent = `X: ${event.clientX}; Y: ${event.clientY}`;

    console.log(`pageX: ${event.pageX}; pageY: ${event.pageY}`);
});



function handleScroll() {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
}

window.addEventListener('scroll', handleScroll);

// повернення нагору
scrollTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

generateBorderRadius();
