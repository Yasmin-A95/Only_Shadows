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

// TODO autosave text update function

// TODO call it from the relevent places i.e. when changing timeline stuff so loadRoom changeCheckpoint should trigger autosave

export function autoSavetext() {
    const autoSaveText = document.getElementById('autosave');
    autoSaveText.innerText = "Auto Save ...";
    // use a settimeout to have it deleted after like 10 seconds or like two or something
    setTimeout(clearAutoSaveText, 3500);

    function clearAutoSaveText() {
        autoSaveText.innerText = "";
    };
};