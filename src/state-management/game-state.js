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

// TODO: a function to produce a room environment via this game state object

const game = {
    checkpoints: {
        "checkpoint-0": {
            rooms: {
                bedroom: {
                    geometry: [5, 32, 16],
                    meshImage: "/some/url",
                    objects:
                    {
                        changeRoomObjects: [
                            {
                                id: "bedroom-door",
                                exitTo: "hallway",
                                geometry: [2, 5, 2],
                                positionXYZ: [-2, -1.4, 3],
                                color: "pink"
                            }
                        ],
                        updateTextObjects: [
                            {
                                name: "bed",
                                text: "now's not the time...",
                                geometry: [1.3, 0.8, 0.8],
                                positionXYZ: [-1, -2.1, -4.5],
                                color: "yellow"

                            }
                        ],
                        inventoryObjects: [
                            {
                                type: "note",
                                geometry: [0.3, 0.5, 0.3],
                                positionXYZ: [4.3, -2.4, -0.1],
                                color: "yellow",
                                text: "death is imminent",
                                onAddInventory: "note reads: death is imminent",
                                onAlreadyInventory: "note still reads: death is imminent..."
                            }
                        ]
                    }
                }
            }
        },
        "checkpoint-1": {

        }
    }
}
console.log(game)
console.log(`game JSON : `, game["checkpoints"]["checkpoint-0"]["rooms"])