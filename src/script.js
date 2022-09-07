import init, { startGame } from './init';
import { bossFightFactory } from './scenes/boss-fight/stage0';
import { bossFight2Factory } from './scenes/boss-fight/stage2';
import { bossFight1Factory } from './scenes/boss-fight/stage1';
import { bedRoomFactory } from './scenes/checkpoint-0/bed-room0';
import { artRoomFactory as artRoomFactory } from './scenes/checkpoint-0/art-room';
import { cubeRoomFactory } from './scenes/checkpoint-0/cube-room';
import { loungeRoomFactory } from './scenes/checkpoint-0/lounge-room0';
import { bedRoom1Factory } from './scenes/checkpoint-1/bed-room1';
import { bedRoom2Factory } from './scenes/checkpoint-2/bed-room2';
import { getTimeline } from './state-management/timeline-state';
import './style.css';
import { bossFight3Factory } from './scenes/boss-fight/stage3';
import { bossFight4Factory } from './scenes/boss-fight/stage4';
import { bossFight5Factory } from './scenes/boss-fight/stage5';
import { bossFight6Factory } from './scenes/boss-fight/stage6';
import { bossFight7Factory } from './scenes/boss-fight/stage7';
import { bossFight8Factory } from './scenes/boss-fight/stage8';
import { bossFight9Factory } from './scenes/boss-fight/stage9';
import { bossFight10Factory } from './scenes/boss-fight/stage10';

init();

const scenes = {
    'house-0': {
        'bed-room0': bedRoomFactory,
        'lounge-room0': loungeRoomFactory
    }
}
// calling get timeline gets me the correct position
const position = getTimeline();
startGame(scenes[position.checkPoint][position.room]);

//startGame(bossFight10Factory)
// TODO: make a main screen if time permits ..... lol

// TODO: to make a new game button a button on the dom maybe in the uppy nav bar kind of section would call localstorage.clear() and window.refresh or whatever to auto refresh - yeah

// TODO: now i need autosave between checkPoints 

// TODO: Loading screen

// TODO: Show Inventory Items

// TODO: restart game button 

// TODO: the art part 