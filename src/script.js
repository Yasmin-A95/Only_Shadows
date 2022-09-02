import init, { start } from './setUp';
import { main as artroomMain } from './scenes/artroom';

init();
const initialScene = artroomMain();
start(initialScene);