import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  item!: Item;
// hüüumärgiga ei saa algväärtust, väärtus antakse iljem
// ActivatedRoute on node_module sees olev eriline klass, 
// misvõimaldab url-il muutuja kätte saada
  constructor(private route: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
    /* ActivatedRoute teeb pildi (snapshot), võtab võti-väärtus
    paaride seast sellise, mill võti on "itemId" 
    võti tuleb app-routing.module.ts failist, kooloni järelt*/
    let id = this.route.snapshot.paramMap.get("itemId");
    if (id) {
    // this.item = this.itemService.items[Number(id)];

    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb => {
      this.itemService.items = [];
        for (const key in itemsFromDb) {
          this.itemService.items.push(itemsFromDb[key]);
        }
  
       
let item = this.itemService.items.find(item => item.id == Number(id));
if (item) {
  this.item = item;
}
});
}
    }
  
  }

