import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductModuleRoutingModule } from './product-module-routing.module';
import { FilterAsideComponent } from './filter-aside/filter-aside.component';
import { IndexComponent } from './index/index.component';
import { FilterByCategoryComponent } from './filter-by-category/filter-by-category.component';
import { AppModule } from 'src/app/app.module';
import { sharedmodule } from 'src/app/app-shared-module';
import { share } from 'rxjs';
import { sahreddd } from './shared';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from "@angular/forms";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LayoutModuleModule } from '../layout-module/layout-module.module';
import { FilterByBrandComponent } from './filter-by-brand/filter-by-brand.component';
// import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    ProductsComponent,
    FilterAsideComponent,
    IndexComponent,
    FilterByCategoryComponent,
    ProductDetailsComponent,
    FilterByBrandComponent,

  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule,
    FormsModule,

     LayoutModuleModule


  ],
  exports:[

  ]
})
export class ProductModuleModule { }
