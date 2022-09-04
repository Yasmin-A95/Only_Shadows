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
        text,
        icon
    })
}

export function addImageToInventory(image, icon) {
    addImageToInventory({
        type: "image",
        image,
        icon
    })
}

export function addObjectToInventory(description, icon) {
    addImageToInventory({
        type: "object",
        description,
        icon
    })
}