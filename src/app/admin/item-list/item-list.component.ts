import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    //this.items = this.itemService.items;
    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb => {
    this.itemService.items = [];
      for (const key in itemsFromDb) {
        this.items.push(itemsFromDb[key]);
        this.itemService.items.push(itemsFromDb[key]);
      }
      // this.items = itemsFromDb;
      // this.itemService.items = itemsFromDb;
    });
  }

  onDeleteItem(id: number) {
    let i = this.itemService.items.findIndex(item => item.id == id);
    this.items.splice(i, 1);
    this.itemService.items.splice(i, 1);
    this.onSaveItemsToDatabase();
  }

  onSaveItemsToDatabase() {
    this.itemService.saveItemsToDatabase().subscribe();
  }
// service sees ei saa funktsiooni käima panna,
// sest html on seotud ainult oma component .ts failiga

//html kutsub oma comp.ts failis funktsiooni välja ja see kutsub
// service sees oleva funktsiooni välja
}
