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
    
  }
};
