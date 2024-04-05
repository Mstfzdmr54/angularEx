import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperExampleComponent } from './swiper-example.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SwiperExampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'', component: SwiperExampleComponent }
    ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SwiperExampleModule { }
