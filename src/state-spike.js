// const exampleState = {
//     inventory: [
//         {
//             type: "note",
//             text: "lorem ipsum",
//             icon: "some icon image imported"
//         },
//         {
//             type: "image",
//             image: "some imported image",
//             icon: "some icon image imported"
//         },
//         {
//             type: "object",
//             description: "a knife",
//             icon: "some icon image imported"
//         }
//     ],
//     timelinePosition: {
//         position: "house",
//         scene: "artroom"
//     }
// };

// save inventory takes the inventory array which exists in scrips.js, and sets it using the local storage api

export function saveInventory(inventoryArray) {
    localStorage.setItem('inventory', JSON.stringify(inventoryArray));
};

export function addInventoryItem(item) {

}

// save timeline is a function that takes the timeLinePosition object and sets it using the localstorage api
export function saveTimeline(timelinePosition) {
    localStorage.setItem('timeline', JSON.stringify(timelinePosition))
};

// get inventory is a function that retrieves the inventory from the localStorage api (which talks to disc)
export function getInventory() {
    return JSON.parse(localStorage.getItem('inventory'));
};

// timeline retreived in the same way as the above but for timeline
export function getTimeline() {
    return JSON.parse(localStorage.getItem('timeline'));
};

// this is working to glue the above together
export function getState() {
    return {
        inventory: getInventory(),
        timelinePosition: getTimeline()
    }
};
