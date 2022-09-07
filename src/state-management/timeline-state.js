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
console.log(getTimeline())
console.log(getTimeline())
let timeline = getTimeline();
console.log(timeline)
console.log(timeline.checkPoint)

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