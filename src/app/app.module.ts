import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { VibrationComponent } from './vibration/vibration.component';
import { CentrifugeComponent } from './centrifuge/centrifuge.component';


const routes:Routes = [
  {path:"",redirectTo:"vibration",pathMatch:"full"},
  {path:"centrifuge",component:CentrifugeComponent},
  {path:"vibration",component:VibrationComponent}
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
