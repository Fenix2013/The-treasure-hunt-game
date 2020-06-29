let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
  if (distance < 30) {
    return "Boiling Hot!";
  } else if (distance < 50) {
    return "Very Hot";
  } else if (distance < 80) {
    return "Hot";
  } else if (distance < 140) {
    return "Warm";
  } else if (distance < 280) {
    return "Cold";
  } else if (distance < 520) {
    return "Very Cold";
  } else {
    return "Freezing!";
  }
}
