const textDiv = document.getElementById('text-display');

export function hideText() {
    textDiv.classList.add('hidden');
}

export function unhideText() {
    textDiv.classList.remove('hidden');
}

export function updateText(str) {

    function clearText() {
        textDiv.innerText = "";
    }

    function replaceText(str) {
        textDiv.innerText = str;
    }

    clearText();
    replaceText(str);
}
