const textDiv = document.getElementById('text-display');

export function hideText() {
    textDiv.classList.add('hidden');
};

export function unhideText() {
    textDiv.classList.remove('hidden');
};

export function updateText(str) {

    function clearText() {
        textDiv.innerText = "";
    }

    function replaceText(str) {
        textDiv.innerText = str;
    }

    clearText();
    replaceText(str);
};

export function autoSavetext() {
    const autoSaveText = document.getElementById('autosave');
    autoSaveText.innerText = "Auto Save ...";
    setTimeout(clearAutoSaveText, 3500);

    function clearAutoSaveText() {
        autoSaveText.innerText = "";
    };
};