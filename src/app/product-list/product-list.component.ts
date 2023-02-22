import { Component } from '@angular/core';
import { Product } from 'src/product';
import { products } from 'src/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  logEmitMessage(arg: string) {
    alert(arg);
  }
}
