# Gauss Shoelace

## 🎓 [Wikipedia](https://en.wikipedia.org/wiki/Shoelace_formula)

This implementation of Gauss Shoelace algorythm to calculate polygonal area
surface using points on the Cartesian plane.

## Usage

### First

`npm install gauss-shoelace`

### Then

```typescript
import gaussShoelace from 'gauss-shoelace';


/**
 * Hexagon figure like:
 *
 *  ##############
 *   #          #
 *    #        #
 *     #      #
 *    #        #
 *   #          #
 *  ##############
 *
 **/

const points: Array<[number, number]> = [
  [1, 1],
  [3, 4],
  [1, 7],
  [7, 7],
  [5, 4],
  [7, 1],
];

const S = gaussShoelace(points);

console.log(S) // 24
```
