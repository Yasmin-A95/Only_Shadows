# Only Shadows

A point-and-click adventure game based on a short story a friend of mine wrote - coincidentally, during the process of making the game I found out it's due to be published about a month from now!  

This [miro board](https://miro.com/app/board/uXjVPap0qME=/?share_link_id=24097702245) fleshes out the details, but here's a brief summary.
- A point-and-click adventure game made using Three.js in an environment made out of 3d 'bubble images' with cut scenes made from flat images stitched together. 
- I achieved this by using the bubble image camera built into google's street view app.  
- Stylistically, the images are manipulated and distorted using an algorithm I made.

## Play It
The deployed version can be played [here](https://immersive-bubble.vercel.app/). This version was a test site for proof of concept, namely working through the following: 
1. Creating 3d environments made out of images.
2. Creating objects within the environment that a player could interact with. 
3. Testing text toggling based on interactions with the environment. 
4. Inventory data storage.
5. Timelines and checkpoints to ensure that the environment can 'permanently' change. 

Coming soon: the current codebase pushed through to deployment. I'm currently working through some bugs that pop up when I try to bridge the 'cut scene' part of the game to the free-roaming part. These are the two distinct types of gameplay. The free roam gameplay has the player moving through a 3D bubble image environment. The player interacts with objects, explores the scene to achieve objectives and finds clues that help drive the narrative. The parts that act more like a cut-scene are made from flat images. In that type of game play the player is forced to go forward or do nothing, this is where the most dense storytelling will occur. 

## Setup Locally 
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

## The Process

### Development loop

#### Creating a new scene

1. Add a new scene file to `src/scenes`
2. Create a scene factory function in that file (e.g. `function bathroomFactory`)
    1. That function should create a new Three.js scene
    2. Setup all objects, interactions, etc fun three.js stuff for that scene
    3. Then return that scene
    4. When you need to move between rooms or checkpoints you need to load the new scene in the file that has the click handler

#### Inventory

1. Have an object in a scene
2. Add a click handler to it
3. From that handler call `addNoteToInventory`, `addImageToInventory`, or `addObjectToInventory` with the thing you want to add

#### Navigating between rooms

1. Have an object in the scene that will be the activation thing for the moving
2. Add a click handler to it
3. Call `changeRoom` with the scene factory to use and the name of the room to save in the state

#### Navigating between checkpoints

1. Have an object in the scene that will be the activation thing for the moving
2. Add a click handler to it
3. Call `changeCheckpoint` with the scene factory to use and the name of the checkpoint to save in the state

#### Working out when to do things based on the current game state

Use things like `getState`, `getTimeline`, or `getInventory` to make decision in your click handlers or get data to display.

## Game State

It looks like this:

```js
{
    inventory: [
        {
            type: "note",
            text: "lorem ipsum",
            icon: "some icon image imported"
        },
        {
            type: "image",
            image: "some imported image",
            icon: "some icon image imported"
        },
        {
            type: "object",
            description: "a knife",
            icon: "some icon image imported"
        }
    ],
    timeline: {
        checkPoint: "house-0",
        room: "artroom"
    }
}
```
