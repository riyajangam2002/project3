import { Component, OnInit, } from '@angular/core';
import order_json from '../../assets/order.json';

interface order {
  serialno?: number;
  product?: string;
  quantity?: number;
  order_ID?: number;
  customer_name?: string;
  customer_number?: number;
  customer_address?: string;
}

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  myorder: order[] = order_json;
  
  constructor() { }

  ngOnInit() {
    // this.myorder = order_json;
    console.log(this.myorder)
  }
}
