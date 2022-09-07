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
    // and have it go away after a sec
    setTimeout(clearText, 3500)
};

export function autoSavetext() {
    const autoSaveText = document.getElementById('autosave');
    autoSaveText.innerText = "Auto Save ...";
    setTimeout(clearAutoSaveText, 3500);

    function clearAutoSaveText() {
        autoSaveText.innerText = "";
    };
};