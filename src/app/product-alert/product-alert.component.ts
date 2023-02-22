import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/product';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css'],
})
export class ProductAlertComponent {
  @Input() product!: Product;
  @Output() notifyEvent = new EventEmitter();

  emitEvent() {
    this.notifyEvent.emit('This is Notify-Message from alert component!');
  }
}
