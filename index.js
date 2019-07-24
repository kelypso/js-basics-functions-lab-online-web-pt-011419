// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  return Math.abs(distance - 42);
};

function distanceFromHqInFeet (distance) {
  distanceFromHqInBlocks(distance) * 264;
};

function distanceTravelledInFeet (start, end) {
  return Math.abs(start - end) * 264;
};

function calculatesFarePrice (start, end) {
  let distance = distanceTravelledInFeet(start, end)

  switch (true) {
    case distance < 400:
      returns 0;
      break;
    case distance > 400 && < 2000:
      returns 0.02 * distance;
      break;
    case distance > 2000 && < 2500:
      returns 0.25 * distance;
      break;
    case distance > 2500:
      return 'cannot travel that far'
    default:
  }
};
