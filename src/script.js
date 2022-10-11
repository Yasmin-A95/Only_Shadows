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
import { bathRoomFactory } from './scenes/checkpoint-0/bath-room0';
import { treadMillRoomFactory } from './scenes/checkpoint-0/treadmill-room0';
import { kitchenRoomFactory } from './scenes/checkpoint-0/kitchen-room0';

init();

const scenes = {
    'house-0': {
        'bed-room0': bedRoomFactory,
        'lounge-room0': loungeRoomFactory,
        'bath-room0': bathRoomFactory,
        'treadmill-room0': treadMillRoomFactory,
        'kitchen-room0': kitchenRoomFactory,
        'cube-room0': cubeRoomFactory
    },
    'house-1': {
        'bed-room1': bedRoom1Factory
    },
    'house-2': {
        'bed-room2': bedRoom2Factory
    }
}
// calling get timeline gets me the correct position
const position = getTimeline();
startGame(scenes[position.checkPoint][position.room]);

//startGame(loungeRoomFactory)
// TODO: make a main screen if time permits ..... lol

// TODO: Loading screen

// TODO: Show Inventory Items

// TODO: the art part 

// TODO: stupid easter eggs

// TODO: add the other bubble rooms for roaming

// TODO: fix timelines and make the storyline more tangiable

// TODO: fix the hideous CSS

// TODO: display inventory items 

// TODO: make the inventory items a meaningful means for achieving goals

// TODO: cut scenes

// TODO: better image manipulation algorithm
