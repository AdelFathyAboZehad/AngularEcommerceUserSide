import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModuleModule } from '../layout-module/layout-module.module';
import { BasketModuleRoutingModule } from './basket-module-routing.module';
import { BasketComponent } from './basket/basket.component';


@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    BasketModuleRoutingModule,
    LayoutModuleModule
  ]
})
export class BasketModuleModule { }
