const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaurToPark = function (dinosaur) {
  this.dinosaurs.push(dinosaur)
};

Park.prototype.removeAnyOldDinosaur = function () {
  this.dinosaurs.pop()
};

Park.prototype.attractsTheMostVisitor = function () {
  const mostPopularDinosaurArray = this.dinosaurs.sort(function(a, b){
    return a.guestsAttractedPerDay - b.guestsAttractedPerDay
  })
  return mostPopularDinosaurArray.pop()
  }

Park.prototype.allDinosaursOfSpecies = function(species){
  const speciesOfDinosaur = []
  for(dino of this.dinosaurs){
    if(dino.species === species){
      speciesOfDinosaur.push(dino)
    }
  }
  return speciesOfDinosaur
}

Park.prototype.removeAllDinosaurSpeciesFromPark = function (species) {
  dinosaursInPark = this.dinosaurs
  for(dino of this.dinosaurs){
    if(dino.species === species){
      delete dino
    }
  }
  return this.dinosaurs
}

Park.prototype.totalNumberOfVisitorsPerDay =  function(dinosaurs){
  let dailyVisitors = 0;
  for(dino of this.dinosaurs){
    dailyVisitors += dino.guestsAttractedPerDay
  }
  return dailyVisitors
}

Park.prototype.totalNumberOfVisitorsPerYear =  function(dinosaurs){
  let dailyVisitors = 0;
  for(dino of this.dinosaurs){
    dailyVisitors += dino.guestsAttractedPerDay
  }
  return dailyVisitors * 360
}

Park.prototype.totalRevenueFromTickets = function(dinosaurs){
let dailyVisitors = 0
let revenue = 0
  for(dino of this.dinosaurs){
    dailyVisitors += dino.guestsAttractedPerDay
    revenue = dailyVisitors * 360 * this.ticketPrice
  }
  return revenue
}


module.exports = Park;
