export default (points: Array<[number, number]>): number => {
  const areas = points.reduce<Array<number>>((acc, _, idx, arr) => {
    const [yA, xA] = arr[idx];
    const [yB, xB] = arr[idx + 1] || arr[0];
    
    acc[0] += xA * yB;
    acc[1] += yA * xB
    
    return acc;
  }, [0, 0]);
  
  return Math.abs(areas[0] - areas[1]) / 2;
}