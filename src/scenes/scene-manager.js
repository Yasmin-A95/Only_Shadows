import { advancePlot, loadRoom } from "../state-management/timeline-state";

let currentScene;

export function changeScene(sceneFactory) {
    currentScene = sceneFactory();
};

export function changeCheckpoint(sceneFactory, checkpointName) {
    changeScene(sceneFactory);
    advancePlot(checkpointName);
};

export function changeRoom(sceneFactory, roomName) {
    changeScene(sceneFactory);
    loadRoom(roomName);
};

export function getCurrentScene() {
    return currentScene;
};