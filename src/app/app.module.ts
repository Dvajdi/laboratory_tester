
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { VibrationComponent } from './vibration/vibration.component';
import { CentrifugeComponent } from './centrifuge/centrifuge.component';
import {CentrifugeCalcService} from './centrifuge/centrifuge-calc.service';
import {VibrationCalcService} from "./vibration/vibration-calc.service";


const routes: Routes = [
  {path: '', redirectTo: 'centrifuge', pathMatch: 'full'},
  {path: 'centrifuge', component: CentrifugeComponent},
  {path: 'vibration', component: VibrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    VibrationComponent,
    CentrifugeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CentrifugeCalcService, VibrationCalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
