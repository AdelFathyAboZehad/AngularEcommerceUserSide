import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { user } from 'src/app/models/iuser';
import { BasketService } from '../../basket-module/services/basket.service';
import { Basket, BasketItem } from 'src/app/models/basket';
import { TranslationService } from 'src/app/Services/translation.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  price!: BasketItem;
  userinfo: Observable<user> | undefined;
  basketinfo: Observable<Basket | null> | undefined;

  title = 'FinalProject';
  langFlag:boolean=true;
  constructor(private user: UserService,
    private route: Router,
    private basket: BasketService,

    private translationService: TranslationService,
    private translate: TranslateService
  ) { }
  // console.log(this.user.CurrentUser$)>

  ngOnInit(): void {

    this.userinfo = this.user.account;
    this.basketinfo = this.basket.Basketid;

  }
  getcount(items: BasketItem[]) {
    // return  items.reduce((sum,item)=>sum+item.quantity,0);
    return items.reduce((sum, item) => sum + item.quantity, 0)
  }

  Logout() {
    this.user.LogOut();

  }
  switchToArabic() {
    this.translate.use('ar');
    this.langFlag=false;
    localStorage.setItem('lang', 'ar');
    this.translationService.setLanguage("ar");

  }
  switchToEnglish() {
    this.translate.use('en');
    this.langFlag=true;

    localStorage.setItem('lang', 'en');
    this.translationService.setLanguage("en");
  }

}
