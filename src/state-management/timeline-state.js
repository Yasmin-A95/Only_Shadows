import { autoSavetext } from "../dom/text-update";

export function getTimeline() {
    return JSON.parse(localStorage.getItem('timeline'));
};

export function checkTimeLine(isCheckPoint) {
    if (getTimeline().checkPoint === isCheckPoint) {
        return true;
    } else {
        return false;
    };
};

export function advancePlot(checkPoint) { 
    const currentTimeline = getTimeline();
    currentTimeline.checkPoint = checkPoint;
    saveTimeline(currentTimeline);
};

export function loadRoom(roomName) { 
    const currentTimeline = getTimeline();
    currentTimeline.room = roomName;
    saveTimeline(currentTimeline);
    autoSavetext();
};

export function saveTimeline(timelinePosition) {
    localStorage.setItem('timeline', JSON.stringify(timelinePosition))
};