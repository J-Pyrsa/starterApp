import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartsPageRoutingModule } from './charts-routing.module';

import { ChartsPage } from './charts.page';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@NgModule({
  providers: [provideCharts(withDefaultRegisterables())],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsPageRoutingModule,
    
  ],
  declarations: [ChartsPage]
})
export class ChartsPageModule {}
