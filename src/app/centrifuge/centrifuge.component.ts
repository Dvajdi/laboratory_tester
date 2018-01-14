import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-centrifuge',
  templateUrl: './centrifuge.component.html',
  styleUrls: ['./centrifuge.component.css']
})
export class CentrifugeComponent implements OnInit {

  radius;
  frequency;
  acceleration;

  constructor() {
  }

  ngOnInit() {
  }

  execute() {
    console.log(this.radius);
    console.log(this.frequency);
    console.log(this.acceleration);
  }
}
