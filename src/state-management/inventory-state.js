export function getInventory() {
    return JSON.parse(localStorage.getItem('inventory'));
};

export function saveInventory(inventoryArray) {
    localStorage.setItem('inventory', JSON.stringify(inventoryArray));
};

export function addInventoryItem(item) {
    const currentInventory = getInventory();
    currentInventory.push(item);
    saveInventory(currentInventory);
};

export function addNoteToInventory(text, icon) {
    addInventoryItem({
        type: "note",
        text: text,
        icon: icon
    });
};

export function addImageToInventory(image, icon) {
    addInventoryItem({
        type: "image",
        image: image,
        icon: icon
    });
};

export function addObjectToInventory(description, icon) {
    addInventoryItem({
        type: "object",
        description: description,
        icon: icon
    });
};

export function isObjectInInventory(inventoryDescription) {
    const index = getInventory().findIndex((inventoryItem) => {
        return inventoryItem.description === inventoryDescription;
    });

    return index > -1; // true or false
};

export function isImageInInventory(image) {
    const index = getInventory().findIndex((inventoryItem) => {
        return inventoryItem.image === image;
    });
    return index > -1;
};

export function isNoteInInventory(noteText) {
    const index = getInventory().findIndex((inventoryItem) => {
        return inventoryItem.text === noteText;
    });
    return index > -1;
};