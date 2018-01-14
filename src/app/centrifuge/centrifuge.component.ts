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

  constructor(private centrifugeCalcService: CentrifugeCalcService) {
  }

  ngOnInit() {

  }

  execute() {
    this.chooseTypeCalculation();
    if (this.calculationType.length === 1) {
      switch (this.calculationType[0]) {
        case 'radius': this.radius = this.calculationRadius (this.frequency, this.acceleration); break;
        case 'frequency': this.frequency = this.calculationFrequency (this.acceleration, this.radius); break;
        case 'acceleration': this.acceleration = this.calculationAcceleration (this.radius, this.frequency); break;
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

  calculationRadius(frequency: number, acceleration: number) {
    return this.centrifugeCalcService.calculationRadius(frequency, acceleration);
  }

  calculationFrequency(acceleration: number, radius: number) {
    return this.centrifugeCalcService.calculationFrequency(acceleration, radius);
  }

  calculationAcceleration(radius: number, frequency: number) {
    return this.centrifugeCalcService.calculationAcceleration(radius, frequency);
  }
}
