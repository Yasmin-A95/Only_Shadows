# Setup
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

## Development loop

### Creating a new scene

1. Add a new scene file to `src/scenes`
2. Create a scene factory function in that file (e.g. `function bathroomFactory`)
    1. That function should create a new Three.js scene
    2. Setup all objects, interactions, etc fun three.js stuff for that scene
    3. Then return that scene
    4. When you need to move between rooms or checkpoints you need to load the new scene in the file that has the click handler

### Inventory

1. Have an object in a scene
2. Add a click handler to it
3. From that handler call `addNoteToInventory`, `addImageToInventory`, or `addObjectToInventory` with the thing you want to add

### Navigating between rooms

1. Have an object in the scene that will be the activation thing for the moving
2. Add a click handler to it
3. Call `changeRoom` with the scene factory to use and the name of the room to save in the state

### Navigating between checkpoints

1. Have an object in the scene that will be the activation thing for the moving
2. Add a click handler to it
3. Call `changeCheckpoint` with the scene factory to use and the name of the checkpoint to save in the state

### Working out when to do things based on the current game state

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

DATA DRIVEN! 

//TODO: make game state look something like this

game = {
    rooms: {
        lounge: {
            texture: "",
            effect: "",
            exits: [
                {
                    id: "hallway-door",
                    exitTo: "hallway"
                },
            ],
            objects: [
               {
                x,y,z:
                name:  "plant",
                text: ""
               } 
            ]
        }

    }
}

game = {
    checkpoints: {
        checkpoint-0: {
            rooms: {
                bedroom: {
                    changeRoomObjects: [
                        {
                            id: "bedroom-door",
                            exitTo: "hallway",
                            xyz:
                        }
                    ],
                    updateTextObjects: [

                    ],
                    inventoryObjects: [

                    ]
                }
            }
        }
    }
}

//TODO: extract ^ objs into functions

