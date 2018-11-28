const bearings = ['north', 'south', 'east', 'west'];

class Robot {
  constructor(coordinates = [0, 0], bearing = 'north'){
    this.coordinates = coordinates
    this.bearing = bearing;
  }

  setCoordinates(){
    //this function will set the final coordinates after the robot receives its commands
  }

  setBearing(bearing){
    const invalidBearing = new Error('Invalid Robot Bearing');
    if (bearings.includes(bearing) === false){
      return invalidBearing;
    } else {
      this.bearing = bearing;
    };
  }

  place(){
    //sets the robots coordinates and orientation after it receives its commands
  }

  turnRight(){
    if (this.bearing === 'north'){
      this.bearing = 'east';
    } else if (this.bearing === 'east'){
      this.bearing = 'south';
    } else if (this.bearing === 'south'){
      this.bearing = 'west';
    } else if (this.bearing === 'west'){
      this.bearing = 'north';
    };
  }

  turnLeft(){
    if (this.bearing === 'north'){
      this.bearing = 'west';
    } else if (this.bearing === 'west'){
      this.bearing = 'south';
    } else if (this.bearing === 'south'){
      this.bearing = 'east';
    } else if (this.bearing === 'east'){
      this.bearing = 'north';
    };
  }
}
