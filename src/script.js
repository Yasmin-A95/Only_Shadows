import init, { start } from './setUp';
import { main as artroomMain } from './scenes/artRoom';
import './style.css';
import { saveInventory, saveTimeline, getInventory, getTimeline, getState } from './state-spike';

init();
const initialScene = artroomMain();
start(initialScene);

// new Game
// init the local storage
// set up the shape the data

// call all predefined localstorage functions and set the initial values

// init timeLine
saveTimeline({
    position: "house-0",
    scene: "artroom-0"
});

saveInventory([]);

console.log(getState());

// load the game

// getState();

// // click on a note


// const note = {

// }
// saveInventory(note);

// // check your inventory

// // go to a different room within the timeline node

// // advance to a different part of the timeline

// // shut down the game

// // retreive saveFile