import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[] = [];
  pauseOnHover = false;
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  kuupaev = new Date();
  arv = 0.5;
  suurarv = 500000;

  constructor(private cartService: CartService, 
    private itemService: ItemService,
    private config: NgbCarouselConfig)
   { 

   }
  // kaks komponenti ei saa omavahel suhelda

  ngOnInit(): void { 
    this.items = this.itemService.items;
    this.config.interval = 10000;
    this.config.wrap = true;
    this.config.keyboard = true;
    this.config.pauseOnHover = true; 
  }

  // onSaveChanges() {
  //   this.items = this.itemService.items;
  //   this.config.interval = 100;
  //   this.config.wrap = true;
  //   this.config.keyboard = true;
  //   this.config.pauseOnHover = this.pauseOnHover; 
  // }
onAddToCart(item: any) {
  // this.items = [];
  // this.items.push(item);
  this.cartService.addToCart(item);
  console.log("lisasin korvi");
  this.cartService.cartChanged.next()
}

}
