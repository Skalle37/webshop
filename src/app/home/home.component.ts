import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from '../admin/carousel-settings/carousel.service';
import { CarouselImage } from '../models/carousel-image.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[] = [];
  pauseOnHover = false;
  //images = [700, 533, 807, 124, 545, 131].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images: CarouselImage[] = [];
  kuupaev = new Date();
  arv = 0.5;
  suurarv = 500000;

  constructor(private cartService: CartService, 
    private itemService: ItemService,
    private config: NgbCarouselConfig,
    private carouselService: CarouselService)
   { 

   }
  // kaks komponenti ei saa omavahel suhelda

  ngOnInit(): void { 
    this.images = this.carouselService.images;
    // this.items = this.itemService.items;
    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb => {
      this.itemService.items = [];
      for (const key in itemsFromDb) {
        this.items.push(itemsFromDb[key]);
        this.itemService.items.push(itemsFromDb[key]);
      }
      // this.items = itemsFromDb;
      // this.itemService.items = itemsFromDb;
    });
    this.config.interval = this.carouselService.carouselSettings.interval;
    this.config.wrap = this.carouselService.carouselSettings.wrap;
    this.config.keyboard = this.carouselService.carouselSettings.keyboard;
    this.config.pauseOnHover = this.carouselService.carouselSettings.pauseOnHover;
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
