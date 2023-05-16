import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from '../services/product.service';
import { BasketService } from '../../basket-module/services/basket.service';
import { TranslationService } from 'src/app/Services/translation.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
Allproduct:Iproduct[]=[];
  ProductBasket!: Iproduct;

  totalLength:any;
  page:number=1;

  public currentLanguage: string='';

  @Input() product!: Iproduct;
constructor(private Productservice :ProductService,
  private basket:BasketService,
  private route:Router,
  private translationService:TranslationService
  ){

}
  ngOnInit():void {
    this.Productservice.GetallProduct().subscribe(
      {
        next:(pro)=> {
          this.Allproduct=pro;
          this.totalLength=pro.length;
         }
        ,

        error:(err)=>console.log(err)

      }

    );

    this.translationService.getLanguageObservable().subscribe(language => {
      this.currentLanguage = language;
      // Do translation logic hereeeeeeee
    });

  // this.AddProductToBasket()

    ////////////////////////
    // this.basket.AddItemToBasket()
  }



//  GetProduct(pro:Iproduct)
//     {
//        this.ProductBasket=pro;
//        console.log(pro)
//     }


    AddProductToBasket(item :Iproduct)
    {
      this.basket.AddItemToBasket(item)
    }

    VeiwProduct(id :number)
    {
      this.route.navigate(["ProductDetails",id])

    }



}


