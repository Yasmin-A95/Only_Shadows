import init, { start } from './setUp';
import { main as artroomMain } from './scenes/artRoom';
import './style.css';

init();
const initialScene = artroomMain();
start(initialScene);

// TODO: make a main screen if time permits ..... lol

// TODO: to make a new game button a button on the dom maybe in the uppy nav bar kind of section would call localstorage.clear() and window.refresh or whatever to auto refresh - yeah

// TODO: now i need autosave between checkPoints 