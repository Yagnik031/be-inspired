import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ByIdPageRoutingModule } from './by-id-routing.module';

import { ByIdPage } from './by-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByIdPageRoutingModule
  ],
  declarations: [ByIdPage]
})
export class ByIdPageModule {}
