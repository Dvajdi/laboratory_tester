import {Injectable} from '@angular/core';

@Injectable()
export class CentrifugeCalcService {

  constructor() {
  }

  calculationRadius(frequency: number, acceleration: number) {
    return this.round((acceleration * 9.80665) / Math.pow(frequency * Math.PI * 2 / 60, 2));
  }

  calculationFrequency(acceleration: number, radius: number) {
    return this.round(Math.sqrt((3600 * acceleration * 9.80665) / (Math.pow(2 * Math.PI, 2) * radius)));
  }

  calculationAcceleration(radius: number, frequency: number) {
    return this.round((Math.pow(frequency * Math.PI * 2 / 60, 2) * radius) / 9.80665);
  }

  round(value: number) {
    return Math.round(value * 1000) / 1000;
  }
}
