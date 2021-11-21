import gaussShoelace from './gauss-shoelace';

const figures: Array<{
  points: Array<[number, number]>,
  surface: number,
}> = [
  {
    points: [
      [1, 1],
      [1, 7],
      [7, 1],
    ],
    surface: 18,
  },
  {
    points: [
      [1, 1],
      [1, 7],
      [5, 1],
    ],
    surface: 12,
  },
  {
    points: [
      [1, 1],
      [2, 7],
      [6, 1],
    ],
    surface: 15,
  },
  {
    points: [
      [1, 1],
      [3, 7],
      [5, 1],
    ],
    surface: 12,
  },
  {
    points: [
      [1, 7],
      [6, 1],
      [3, 1],
    ],
    surface: 9,
  },
  {
    points: [
      [1, 1],
      [1, 7],
      [7, 7],
      [7, 1],
    ],
    surface: 36,
  },
  {
    points: [
      [1, 1],
      [1, 7],
      [4, 7],
      [4, 1],
    ],
    surface: 18,
  },
  {
    points: [
      [1, 1],
      [3, 7],
      [7, 7],
      [5, 1],
    ],
    surface: 24,
  },
  {
    points: [
      [1, 4],
      [3, 7],
      [5, 4],
      [3, 1],
    ],
    surface: 12,
  },
  {
    points: [
      [1, 1],
      [3, 7],
      [5, 7],
      [7, 1],
    ],
    surface: 24,
  },
  {
    points: [
      [1, 1],
      [3, 4],
      [1, 7],
      [7, 7],
      [5, 4],
      [7, 1],
    ],
    surface: 24,
  },
  {
    points: [
      [1, 1],
      [1, 7],
      [4, 3],
      [7, 7],
      [7, 1],
    ],
    surface: 24,
  },
  {
    points: [
      [1, 3],
      [1, 5],
      [3, 7],
      [5, 7],
      [7, 5],
      [7, 4],
      [5, 1],
      [2, 1],
    ],
    surface: 28,
  },
  {
    points: [
      [1, 3],
      [3, 5],
      [3, 7],
      [4, 7],
      [5, 5],
      [6, 7],
      [7, 7],
      [7, 5],
      [5, 1],
      [3, 1],
    ],
    surface: 22,
  },
  {
    points: [
      [1, 4],
      [3, 5],
      [4, 7],
      [5, 5],
      [7, 4],
      [5, 3],
      [4, 1],
      [3, 3],
    ],
    surface: 12,
  },
];

console.log(`Testing ${figures.length} figures.`)

figures.forEach((figure, idx) => {
  if (figure.surface !== gaussShoelace(figure.points)) {
    console.error(`Tests failed!\nSurface area missmatch on figure #${idx + 1}`);
    process.exit(1);
  }
});

console.log('Tests passed!');