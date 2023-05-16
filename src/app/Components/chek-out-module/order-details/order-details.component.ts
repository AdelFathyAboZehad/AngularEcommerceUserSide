import { Component, OnInit } from '@angular/core';
import { Order, OrderDetails } from 'src/app/models/check-out';
import { ChekoutServicesService } from '../services/chekout-services.service';
import { UserService } from '../../user/services/user.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
 Order!: OrderDetails ;
 Orderid?: number;
  constructor(private GetOrder:ChekoutServicesService ,private user :UserService ,private Route :ActivatedRoute ){}


  ngOnInit(): void {

   this.Orderid= this.Route.snapshot.paramMap.get('Ord')?Number(this.Route.snapshot.paramMap.get('Ord')):0;
  console.log(this.Orderid)

    this.GetOrder.OrderDeatils(this.Orderid).subscribe({
      next:(ord)=>{
        if(ord!==undefined)
        this.Order=ord;
        console.log(ord)
      },
      error:(erorr)=>{
        console.log(erorr)
      }

    })


  }



}
