import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[] = [];
  kuupaev = new Date();
  arv = 0.5;
  suurarv = 500000;

  constructor(private cartService: CartService, 
    private itemService: ItemService)
   { }
  // kaks komponenti ei saa omavahel suhelda

  ngOnInit(): void { 
    this.items = this.itemService.items; 
  }

onAddToCart(item: any) {
  // this.items = [];
  // this.items.push(item);
  this.cartService.addToCart(item);
}

}
