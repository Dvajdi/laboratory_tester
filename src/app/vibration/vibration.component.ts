import {Component, OnInit} from '@angular/core';
import {VibrationCalcService} from './vibration-calc.service';

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.component.html',
  styleUrls: ['./vibration.component.css']
})
export class VibrationComponent implements OnInit {
  frequency: number;
  displacement: number;
  velocity: number;
  acceleration: number;
  calculationType: string [];
  isNotValidTooManyValues = false;
  isNotValidTooFewValues = false;

  vibrationParameters: {
    frequency: number,
    displacement: number,
    velocity: number,
    acceleration: number
  };

  constructor(private vibrationCalcService: VibrationCalcService) {
  }

  ngOnInit() {
  }

  execute() {
    this.isNotValidTooManyValues = false;
    this.isNotValidTooFewValues = false;
    this.chooseTypeCalculation();
    if (this.calculationType.length === 2) {
      switch (this.calculationType.toString()) {
        case 'displacement,velocity':
          this.vibrationParameters =
            this.vibrationCalcService.calculationDisplacementVelocity(this.frequency, this.acceleration);
          this.displacement = this.vibrationParameters.displacement;
          this.velocity = this.vibrationParameters.velocity;
          break;
        case 'displacement,acceleration':
          this.vibrationParameters =
            this.vibrationCalcService.calculationDisplacementAcceleration(this.frequency, this.velocity);
          this.displacement = this.vibrationParameters.displacement;
          this.acceleration = this.vibrationParameters.acceleration;
          break;
        case 'displacement,frequency':
          this.vibrationParameters =
            this.vibrationCalcService.calculationDisplacementFrequency(this.velocity, this.acceleration);
          this.displacement = this.vibrationParameters.displacement;
          this.frequency = this.vibrationParameters.frequency;
          break;
        case 'velocity,acceleration':
          this.vibrationParameters =
            this.vibrationCalcService.calculationVelocityAcceleration(this.displacement, this.frequency);
          this.velocity = this.vibrationParameters.velocity;
          this.acceleration = this.vibrationParameters.acceleration;
          break;
        case 'velocity,frequency':
          this.vibrationParameters =
            this.vibrationCalcService.calculationVelocityFrequency(this.displacement, this.acceleration);
          this.velocity = this.vibrationParameters.velocity;
          this.frequency = this.vibrationParameters.frequency;
          break;
        case 'acceleration,frequency':
          this.vibrationParameters =
            this.vibrationCalcService.calculationAccelerationFrequency(this.displacement, this.velocity);
          this.acceleration = this.vibrationParameters.acceleration;
          this.frequency = this.vibrationParameters.frequency;
          break;
      }
    } else {
      if (this.calculationType.length < 2) {
        this.isNotValidTooManyValues = true;
      } else {
        this.isNotValidTooFewValues = true;
      }
    }
  }

  chooseTypeCalculation() {
    this.calculationType = [];
    if (!this.displacement) {
      this.calculationType.push('displacement');
    }
    if (!this.velocity) {
      this.calculationType.push('velocity');
    }
    if (!this.acceleration) {
      this.calculationType.push('acceleration');
    }
    if (!this.frequency) {
      this.calculationType.push('frequency');
    }
  }
}
