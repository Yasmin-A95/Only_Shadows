import init, { start } from './setUp';
import { main as artroomMain } from './scenes/artRoom';
import './style.css';

init();
const initialScene = artroomMain();
start(initialScene);