import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IproductDetails } from 'src/app/models/iproduct';
import { TranslationService } from 'src/app/Services/translation.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
productid :number  | undefined;
  PoductDetails!: IproductDetails;
  src!: string;

  public currentLanguage: string='';

  constructor(private Getid:ActivatedRoute ,
    private productservise:ProductService,
    private translationService:TranslationService)
  {}

  ngOnInit(): void {
    this.Getid.paramMap.subscribe(
      param=>{

      }
    )

    this.productid=Number (this.Getid.snapshot.paramMap.get("id"));

   this.productservise.GetProductById(this.productid).subscribe(
    {
      next: (pro)=>this.PoductDetails=pro


    },

   )
   this.translationService.getLanguageObservable().subscribe(language => {
    this.currentLanguage = language;
    // Do translation logic hereeeeeeee
  });

  }
   calculateDiscountedPrice(originalPrice: number, discountPercentage: number): number {
    let discountAmount = (originalPrice * discountPercentage) / 100;
    let discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
  }

  getSrc(src:string)
  {
    this.src=src;
  }

}
