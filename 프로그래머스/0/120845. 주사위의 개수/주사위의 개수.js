function solution(box, dice) {
  let widthCount = Math.floor(box[0] / dice);
  let depthCount = Math.floor(box[1] / dice);
  let heightCount = Math.floor(box[2] / dice);

  return widthCount * depthCount * heightCount;
}