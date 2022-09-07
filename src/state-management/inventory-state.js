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

// grab inventory using the function I already made!

// display the icon located within! 



///////// all the code below this line is utter trash lets try again

// export function addToInventoryDisplay(inventoryItem, itemID) {
//     // inventoryItem.icon
//     const newInventoryItem = document.createElement("div");
//     const newImg = document.createElement('img');
//     newImg.classList.add('icon');
//     newImg.classList.add(itemID);

//     // if inventory item is img, note, or object use these icons
//     // img.src =
//     if (inventoryItem === "object") {
//         newImg.src = gemicon;
//     } else if (inventoryItem === "note") {
//         newImg.src = noteicon;
//     } else if (inventoryItem === "image") {
//         newImg.src = polaroidicon;

//     }

//     newInventoryItem.appendChild(newImg);

//     const inventoryDisplay = document.getElementById('inventory-display');
//     inventoryDisplay.appendChild(newInventoryItem);

// };

// function handleClickInventoryItems() {
    
// };

// console.log(getInventory())
// // TODO consider updating the split up inventory adding functions to just use id and therefore not need to be all split up like that

// // TODO undo all the stupid fuckups I made when dealing with icons and the dom omg i can't belive i did that 

// function handleInventory() {
//     addObjectToInventory("heater, rip", "none")
// }

// function generateIdHolder() {
//     let id = 0
//     return function() {
//         id++;
//         return id;
//     };
// }
// let increment = generateIdHolder();
