export function getTimeline() {
    return JSON.parse(localStorage.getItem('timeline'));
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
};

export function saveTimeline(timelinePosition) {
    localStorage.setItem('timeline', JSON.stringify(timelinePosition))
};