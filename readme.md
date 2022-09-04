# Three.js Journey

## Setup
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