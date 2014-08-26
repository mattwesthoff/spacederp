// Generated by CoffeeScript 1.7.1
var SpaceDerp;

SpaceDerp = (function() {
  function SpaceDerp(galaxy, timeUnit, getTime) {
    this.galaxy = galaxy;
    this.timeUnit = timeUnit;
    this.getTime = getTime;
  }

  SpaceDerp.prototype.travel = function(playerData, destination) {
    var curloc, destloc, distance;
    destloc = this.galaxy[destination].location;
    curloc = this.galaxy[playerData.travel.location].location;
    playerData.travel.location = destination;
    distance = Math.sqrt(Math.pow(destloc.y - curloc.y, 2) + Math.pow(destloc.x - curloc.x, 2));
    playerData.travel.eta = this.getTime() + (distance / playerData.ship.speed) * this.timeUnit;
    return playerData;
  };

  return SpaceDerp;

})();

module.exports = SpaceDerp;
