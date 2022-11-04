# Only Shadows


A point-and-click adventure game based on a short story a friend of mine wrote - coincidentally, during the process of making the game I found out it's due to be published about a month from now!  

## Play It
[here](https://immersive-bubble.vercel.app/) WSAD controls 

## Other Repos Relevant to the Project
- https://github.com/Yasmin-A95/cut_scene 

This [miro board](https://miro.com/app/board/uXjVPap0qME=/?share_link_id=24097702245) fleshes out the details, but here's a brief summary.
- A point-and-click adventure game made using Three.js in an environment made out of 3d 'bubble images' with cut scenes made from flat images stitched together. 
- I achieved this by using the bubble camera built into google's street view app.  
- Stylistically, the images are manipulated and distorted using an algorithm I made.


Coming soon: 
- Cut Scenes made from flat images targeted with more interesting distorting algorithms. 
- Check out [this](https://github.com/Yasmin-A95/Only_Shadows_Cut_Scene) repo to see that code!
- Better and more tangible plot 
- Inventory display
- Boss fight

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
## Game State take Two

### For ~DATA DRIVEN~ re Josh's Suggestions! 

//TODO: make game state look something like this

game = {
    checkpoints: {
        checkpoint-0: {
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
                                type: note,
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
        checkpoint-1: {
            ... etc
        }
    }
}

// TODO: make a function that can read said state and test it out 
