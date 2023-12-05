const RocketLauncher = require("./RocketLauncher");

class Rocket {
  constructor(name) {
    this.name = name;
    this.engineStatus = "inactive";
  }
}

// const nasaRocket = new Rocket("Nasa");
// const spaceXRocket = new Rocket("SpaceX");
// const rocketLauncher = new RocketLauncher([nasaRocket, spaceXRocket]);
// console.log(rocketLauncher.launchAllRockets());

module.exports = Rocket;
