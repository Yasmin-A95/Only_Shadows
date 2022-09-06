import gemicon from '../assets/icons/gem-icon.jpg';
import noteicon from '../assets/icons/note-icon.jpg';
import polaroidicon from '../assets/icons/polaroid-icon.jpg'

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

// inventory DOM

// so ive made a function addtoInv which takes the inventory item as an argument

// then within that function Im creating new dome nodes, one being a div, and another being an img

// I then append the img to the div

// after that I grab the dom element with the id of inventory display

// then i append the div to that



export function addToInventoryDisplay(inventoryItem) {
    // inventoryItem.icon
    const newInventoryItem = document.createElement("div");
    const newImg = document.createElement('img');
    newImg.classList.add('icon')

    // if inventory item is img, note, or object use these icons
    // img.src =
    if (inventoryItem === "object") {
        newImg.src = gemicon;
    } else if (inventoryItem === "note") {
        newImg.src = noteicon;
    } else if (inventoryItem === "image") {
        newImg.src = polaroidicon;

    }

    newInventoryItem.appendChild(newImg);

    const inventoryDisplay = document.getElementById('inventory-display');
    inventoryDisplay.appendChild(newInventoryItem);
    console.log(newImg.src)


};