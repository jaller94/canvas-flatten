import { assertEquals } from "@std/assert";
import { flatten } from "./canvas-flatten.ts";

const testCases: Array<{
  input: number[];
  background: [number, number, number];
  expected: number[];
}> = [
  {
    input: [0, 0, 0, 255],
    background: [255, 255, 255],
    expected: [0, 0, 0, 255],
  },
  {
    input: [0, 0, 0, 80],
    background: [255, 255, 255],
    expected: [175, 175, 175, 255],
  },
  {
    input: [0, 0, 0, 0],
    background: [255, 255, 255],
    expected: [255, 255, 255, 255],
  },
  {
    input: [255, 255, 255, 255],
    background: [0, 0, 0],
    expected: [255, 255, 255, 255],
  },
  {
    input: [255, 255, 255, 0],
    background: [0, 0, 0],
    expected: [0, 0, 0, 255],
  },
  {
    input: [255, 255, 255, 80],
    background: [0, 0, 0],
    expected: [80, 80, 80, 255],
  },
  {
    input: [0, 0, 0, 80],
    background: [0, 0, 0],
    expected: [0, 0, 0, 255],
  },
  {
    input: [255, 0, 0, 128],
    background: [0, 255, 0],
    expected: [128, 127, 0, 255],
  },
];

for (const { input, background, expected } of testCases) {
  Deno.test(`flattening [ ${input.join(", ")} ] on [ ${background.join(", ")} ] becomes [ ${expected.join(", ")} ]`, () => {
    const imageData = new ImageData(1, 1);
    imageData.data.set(input);

    flatten(imageData, background);
    assertEquals(new Uint8ClampedArray(expected), imageData.data);
  });
}
