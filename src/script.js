import init, { startGame } from './init';
import { artRoomFactory as artRoomFactory } from './scenes/checkpoint-0/art-room';
import './style.css';

init();
startGame(artRoomFactory);

// TODO: make a main screen if time permits ..... lol

// TODO: to make a new game button a button on the dom maybe in the uppy nav bar kind of section would call localstorage.clear() and window.refresh or whatever to auto refresh - yeah

// TODO: now i need autosave between checkPoints 

// TODO: Loading screen

// TODO: Show Inventory Items

// TODO: restart game button 

// TODO: the art part 