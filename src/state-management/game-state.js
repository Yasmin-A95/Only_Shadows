import { getInventory, saveInventory } from "./inventory-state";
import { getTimeline, saveTimeline } from "./timeline-state";

export function getState() {
    return {
        inventory: getInventory(),
        timelinePosition: getTimeline()
    }
};

export function loadGame() {
    if (detectNewGame()) {
        initNewGameState();
    }

    return getState();
};

export function detectNewGame() {
    return !getTimeline();
};
export function initNewGameState() {
    saveTimeline({
        checkPoint: "house-0",
        room: "bed-room0"
    });

    saveInventory([]);
};


