export const states = {
//   STANDING_RIGHT: 0,
  SITTING_RIGHT: 0,
  RUNNING_LEFT: 1,
  RUNNING_RIGHT: 2,
  JUMPING_RIGHT: 3,
  FALLING_RIGHT: 4,
};

class State {
  constructor(state) {
    this.state = state;
  }
}
// export class StandingRight extends State {
//   constructor(player) {
//     super("STANDING RIGHT");
//     this.player = player;
//   }
//   enter() {
//     this.player.frameY = 0;
//     this.player.speed = 0;
//     this.player.maxFrame = 6;
//   }
//   handleInput(input) {
//     if (input === "PRESS left") this.player.setState(states.RUNNING_LEFT);
//     else if (input === "PRESS right")
//       this.player.setState(states.RUNNING_RIGHT); // set state to StandingLeft
//     else if (input === "PRESS down") this.player.setState(states.SITTING_RIGHT);
//     else if (input === "PRESS up") this.player.setState(states.JUMPING_RIGHT);
//   }
// }
export class SittingRight extends State {
  constructor(player) {
    super("SITTING RIGHT");
    this.player = player;
  }
  enter() {
    this.player.frameY = 11;
    this.player.speed = this.player.maxSpeed;
    this.player.maxFrame = 4;
  }
  handleInput(input) {
    if (input === "RELEASE down") this.player.setState(states.RUNNING_RIGHT);
  }
}
 export class RunningLeft extends State {
   constructor(player) {
     super("RUNNING LEFT");
     this.player = player;
  }
   enter() {
     this.player.frameY = 7;
     this.player.speed = -this.player.maxSpeed;
     this.player.maxFrame = 8;
   }
  handleInput(input) {
    if (input === "PRESS right") this.player.setState(states.RUNNING_RIGHT); // set state to StandingLeft
   }
 }
export class RunningRight extends State {
  constructor(player) {
    super("RUNNING RIGHT");
    this.player = player;
  }
  enter() {
    this.player.frameY = 6;
    // this.player.speed = this.player.maxSpeed;
    this.player.maxFrame = 8;
  }
  handleInput(input) {
    // if (input === "RELEASE right") this.player.setState(states.RUNNING_RIGHT);
    if(input === "PRESS left") this.player.setState(states.RUNNING_LEFT)
    else if(input === "PRESS up") this.player.setState(states.JUMPING_RIGHT)
    else if (input === "PRESS down") this.player.setState(states.SITTING_RIGHT);
  }
}
export class JumpingRight extends State {
  constructor(player) {
    super("JUMPING RIGHT");
    this.player = player;
  }
  enter() {
    this.player.frameY = 2;
    if (this.player.onGround()) this.player.vy -= 10;
    this.player.speed = this.player.maxSpeed * 0.5 
    this.player.maxFrame = 6;
  }
  handleInput(input) {
    if (this.player.onGround()) this.player.setState(states.RUNNING_RIGHT);
    else if(input === "PRESS up") this.player.setState(states.JUMPING_RIGHT)
    else if (this.player.vy > 0) this.player.setState(states.FALLING_RIGHT);
  }
}
export class FallingRight extends State {
  constructor(player) {
    super("FALLING LEFT");
    this.player = player;
  }
  enter() {
    this.player.frameY = 4;
    this.player.maxFrame = 6;
  }
  handleInput(input) {
    if (this.player.onGround())
      this.player.setState(states.RUNNING_RIGHT);
  }
}
