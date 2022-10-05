const textDiv = document.getElementById('text-display');

let textDisplayTimeoutId;

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

    if (textDisplayTimeoutId) {
        clearTimeout(textDisplayTimeoutId)
    }

    // and have it go away after a sec
    textDisplayTimeoutId = setTimeout(clearText, 3500)
};

export function autoSavetext() {
    const autoSaveText = document.getElementById('autosave');
    autoSaveText.innerText = "Auto Save ...";
    setTimeout(clearAutoSaveText, 3500);

    function clearAutoSaveText() {
        autoSaveText.innerText = "";
    };
};

export function updateObjective(string) {
    const objectiveText = document.getElementById('objective');
    objectiveText.innerText = string;
};