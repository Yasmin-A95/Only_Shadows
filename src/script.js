import init, { startGame } from './init';
import { bedRoomFactory } from './scenes/checkpoint-0/bed-room0';
// import { artRoomFactory as artRoomFactory } from './scenes/checkpoint-0/art-room';
import { cubeRoomFactory } from './scenes/checkpoint-0/cube-room';
import { getTimeline } from './state-management/timeline-state';
import './style.css';

init();

// const scenes = {
//     'house-0': {
//         'artroom-0': artRoomFactory,
//         'cuberoom-0': cubeRoomFactory
//     }
// }
// // calling get timeline gets me the correct position
// const position = getTimeline();
// startGame(scenes[position.checkPoint][position.room]);

startGame(bedRoomFactory)
// TODO: make a main screen if time permits ..... lol

// TODO: to make a new game button a button on the dom maybe in the uppy nav bar kind of section would call localstorage.clear() and window.refresh or whatever to auto refresh - yeah

// TODO: now i need autosave between checkPoints 

// TODO: Loading screen

// TODO: Show Inventory Items

// TODO: restart game button 

// TODO: the art part 