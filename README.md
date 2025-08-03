# canvas-flatten

Flatten canvas image data with transparency on a solid background

## Differences of this fork

This is a fork of [NielsLeenheer/CanvasFlatten](https://github.com/NielsLeenheer/CanvasFlatten) which is published on NPM as [canvas-flatten](https://www.npmjs.com/package/canvas-flatten).

* Developed in TypeScript instead of JavaScript
* No longer returns the ImageData, because the input parameter is mutated. Returning the same object gave me the false assumption that the functions would creat a copy of the ImageData.
* Exports individual functions instead of a class object to allow for tree shaking.
* Fixed function description in JSDocs: [PR #10](https://github.com/NielsLeenheer/CanvasFlatten/pull/10)
* Published on JSR.io instead of npm
* Developed using Deno instead of NodeJs
* Changed the default branch from "master" to "main"

## Usage

First, install the package. Find the instructions on: https://jsr.io/@jaller94/canvas-flatten/

Then, require the package and use it like so:

```ts
import { flatten } from '@jaller94/canvas-flatten';

// Assume we have an existing canvas element with a 2D context
// Retrieve the image data of the canvas
let image = context.getImageData(0, 0, canvas.width, canvas.height);

// Flatten the transparency on a white background
flatten(image, [ 0xff, 0xff, 0xff ]);

// Place the image data back on the canvas
context.putImageData(image, 0, 0);
```

## License

MIT
