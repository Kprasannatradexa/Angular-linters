import { Component, Input } from '@angular/core';
import { join, resolve } from 'path';

import { consumers,Person } from '../interface/person';
import { myProducts } from '../interface/product';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  @Input() title: string = '';

  products = myProducts;

  users: Person[] = consumers;

  // sales = monthlySales;

  // salesProducts = this.sales.map((deatils) => {
  //   return deatils.productDetails
  // }).flat();

}
