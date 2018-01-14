import {Injectable} from '@angular/core';

@Injectable()
export class VibrationCalcService {

  constructor() {
  }

  calculationDisplacementVelocity(frequency: number, acceleration: number) {
    let velocity = (acceleration * 9.80665) / (2 * Math.PI * frequency);
    let displacement = 1000 * (acceleration * 9.80665) / (Math.pow(2 * Math.PI * frequency, 2));
    return {
      frequency,
      displacement,
      velocity,
      acceleration
    };
  }

  calculationDisplacementAcceleration(frequency: number, velocity: number) {
    let acceleration = (velocity * 2 * Math.PI * frequency) / 9.80665;
    let displacement = 1000 * velocity / (2 * Math.PI * frequency);
    return {
      frequency,
      displacement,
      velocity,
      acceleration
    };
  }

  calculationDisplacementFrequency(velocity: number, acceleration: number) {
    let frequency = (acceleration * 9.80665) / (velocity * 2 * Math.PI)
    let displacement = 1000 * velocity / (2 * Math.PI * frequency);
    return {
      frequency,
      displacement,
      velocity,
      acceleration
    };
  }

  calculationVelocityAcceleration(displacement: number, frequency: number) {
    let velocity = (displacement / 1000) * 2 * Math.PI * frequency;
    let acceleration = ((displacement / 1000) * Math.pow(2 * Math.PI * frequency, 2)) / 9.80665;
    return {
      frequency,
      displacement,
      velocity,
      acceleration
    };
  }

  calculationVelocityFrequency(displacement: number, acceleration: number) {
    let frequency = (Math.sqrt((acceleration * 9.80665) / (displacement / 1000))) / (2 * Math.PI);
    let velocity = (acceleration * 9.80665) / (2 * Math.PI * frequency);
    return {
      frequency,
      displacement,
      velocity,
      acceleration
    };
  }

  calculationAccelerationFrequency(displacement: number, velocity: number) {
    let frequency = velocity / (2 * Math.PI * (displacement / 1000));
    let acceleration = (velocity * 2 * Math.PI * frequency) / 9.80665;
    return {
      frequency,
      displacement,
      velocity,
      acceleration
    };
  }
}
