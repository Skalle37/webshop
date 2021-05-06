import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //kooloniga annan tyypi
  //võrdusmärgiga annan väärtust ehk tyhi massiiv

  cartItems: {title: string, price: number, imgSrc: string, category: string }[] = []
  sumOfCart = 0;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.itemsInCart;
    this.calculateSumOfCart();
  }

  onEmptyCart() {
    this.cartService.itemsInCart = [];
    this.cartItems = this.cartService.itemsInCart;
    this.calculateSumOfCart();
  }

  onRemoveFromCart(i: number) {
    this.cartService.itemsInCart.splice(i, 1);
    this.calculateSumOfCart();
  }


calculateSumOfCart() {
  this.sumOfCart = 0;
  this.cartItems.forEach(cartItem => {
    this.sumOfCart = this.sumOfCart + cartItem.price;  
  });

  } 
}

// home.ts -is on items = [{item}]
// home.html: ngFor
// (click) kutsub esile funktsioon home.ts -is ja saadab selle esime millelel klikkisin sinna funktsiooni
// home.ts funktsioon, mida väla kutsuti ja võtab vastueseme, millel klikiti
// home.ts is on loodud ühendus servicega
// funktsioon loodud ühenduse kaudu annab selle eseme, mis ta vastu võttis, service sisse

// andmine tehtud, services on olemas pärast igat vajutust sobivad esemed
// cart -is välja kuvamise pool

// cart.ts ngOnInit võtab service seest kõik mis funkntsiooni kaudu lisatud
// cart.html kuvab selle ngFor -i abil välja
