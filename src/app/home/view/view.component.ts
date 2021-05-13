import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  item!: {title: string, imgSrc: string, price: number, category: string};
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
    this.item = this.itemService.items[Number(id)];

    }
  }

}
