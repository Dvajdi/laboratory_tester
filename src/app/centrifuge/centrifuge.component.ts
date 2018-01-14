import {Component, OnInit} from '@angular/core';
import {CentrifugeCalcService} from './centrifuge-calc.service';

@Component({
  selector: 'app-centrifuge',
  templateUrl: './centrifuge.component.html',
  styleUrls: ['./centrifuge.component.css']
})
export class CentrifugeComponent implements OnInit {

  radius: number;
  frequency: number;
  acceleration: number;
  calculationType: string [];

  isNotValidTooManyValues = false;
  isNotValidTooFewValues = false;

  constructor(private centrifugeCalcService: CentrifugeCalcService) {
  }

  ngOnInit() {

  }

  execute() {
    this.isNotValidTooManyValues = false;
    this.isNotValidTooFewValues = false;
    this.chooseTypeCalculation();
    if (this.calculationType.length === 1) {
      switch (this.calculationType[0]) {
        case 'radius':
          this.radius = this.centrifugeCalcService.calculationRadius(this.frequency, this.acceleration);
          break;
        case 'frequency':
          this.frequency = this.centrifugeCalcService.calculationFrequency(this.acceleration, this.radius);
          break;
        case 'acceleration':
          this.acceleration = this.centrifugeCalcService.calculationAcceleration(this.radius, this.frequency);
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
    if (!this.radius) {
      this.calculationType.push('radius');
    }
    if (!this.acceleration) {
      this.calculationType.push('acceleration');
    }
    if (!this.frequency) {
      this.calculationType.push('frequency');
    }
  }
}
