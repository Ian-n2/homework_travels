const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
const result = this.journeys.map(journeys => {
  return journeys.startLocation
})
return result
};

Traveller.prototype.getJourneyEndLocations = function () {
const result = this.journeys.map(journeys => {
  return journeys.endLocation
})
return result
};

Traveller.prototype.getJourneysByTransport = function (transport) {
const result = this.journeys.filter(journey => {
  return journey.transport === transport
})
return result
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
const result = this.journeys.filter(journey => {
  return journey.distance >= minDistance
})
return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function (){
const result = this.journeys.reduce((total, journey) => {
  return total += journey.distance
}, 0)
return result
};

Traveller.prototype.getUniqueModesOfTransport = function () {
const now = this.journeys.map((journey)  => {
  return journey.transport
})
const unique = new Set(now);
const result = Array.from(unique);
return result
};


module.exports = Traveller;
