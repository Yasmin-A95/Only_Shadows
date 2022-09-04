const textDiv = document.getElementById('text-display');
const text = document.getElementById('text');


function hideText() {
    textDiv.classList.add('hidden');
}

function unhideText() {
    textDiv.classList.remove('hidden');
}

function updateText(str) {

    function clearText() {
        text.innerText = "";
    }

    function replaceText(str) {
        text.innerText = str;
    }

    clearText();
    replaceText(str);
}