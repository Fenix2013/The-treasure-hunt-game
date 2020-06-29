const WIDTH = 560;
const HEIGHT = 560;

let target = {
  x:getRandomNumber(WIDTH),
  y:getRandomNumber(HEIGHT)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 20) {
    alert(`Found the treasure in ${clicks} clicks!`);
    location.reload();
  }
})
