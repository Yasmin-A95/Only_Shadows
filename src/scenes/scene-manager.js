import { advancePlot, loadRoom } from "../state-management/timeline-state";

let currentScene;

// dont use this to change rooms or advance plot
export function changeScene(sceneFactory) {
    currentScene = sceneFactory();
};

export function changeCheckpoint(sceneFactory, checkpointName, roomName) {
    changeRoom(sceneFactory, roomName);
    advancePlot(checkpointName);
};

// if it ends up being linear theres no point in this its all checkpoints.. consider deleting
export function changeRoom(sceneFactory, roomName) {
    changeScene(sceneFactory);
    loadRoom(roomName);
};

export function getCurrentScene() {
    return currentScene;
};

// when changing room on timeline-n dont use changeCheckpoint, when moving from timeline n to timeline n+1, use changeCheckpoint