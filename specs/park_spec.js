const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dinosaur1
  let dinosaur2
  let dinosaur3
  let dinosaur4
  let dinosaur5
  let dinosaur6

  let dinosaurs


  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur('Stegosaurus', 'herbivore', 20)
    dinosaur3 = new Dinosaur('velociraptor', 'carnivore', 40)
    dinosaur4 = new Dinosaur('Tricerotops', 'carnivore', 60)
    dinosaur5 = new Dinosaur('Braciosauros', 'herbivore', 30)
    dinosaur6 = new Dinosaur('Mastodon', 'herbivore', 45)
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5, dinosaur6]
    park = new Park('Jurassic Park', 100, dinosaurs )

    })



  it('should have a name', function(){
    actual = park.name
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    actual = park.ticketPrice
    assert.strictEqual(actual, 100)
  });

  it('should have a collection of dinosaurs', function(){
    actual = park.dinosaurs
    assert.strictEqual(actual, dinosaurs)
  });

  it('should be able to add a dinosaur to its collection', function(){
    const dinosaur = new Dinosaur('cat', 'meow', 1)
    park.addDinosaurToPark(dinosaur)
    actual = dinosaurs.length
    assert.strictEqual(actual, 7)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeAnyOldDinosaur()
    actual = dinosaurs.length
    assert.strictEqual(actual, 5)

  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    actual = park.attractsTheMostVisitor()

    assert.deepStrictEqual(actual, dinosaur4)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    actual = park.allDinosaursOfSpecies('t-rex')
    assert.deepStrictEqual(actual, [dinosaur1])

  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.removeAllDinosaurSpeciesFromPark('Mastodon')
    actual = park.dinosaurs
    assert.deepStrictEqual(actual,[dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5, dinosaur6])
  });

  it('should Calculate the number of visitors per day', function(){
    actual = park.totalNumberOfVisitorsPerDay(dinosaurs)
    assert.strictEqual(actual, 245 )
  })

  it('should Calculate the number of visitors per year', function(){
    actual = park.totalNumberOfVisitorsPerYear(dinosaurs)
    assert.strictEqual(actual, 88200)
  })

  it('should Calculate the revenue per year', function(){
    actual = park.totalRevenueFromTickets(dinosaurs)
    assert.strictEqual(actual, 8820000)
  })

});
