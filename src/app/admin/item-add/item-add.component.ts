import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  constructor( private itemService: ItemService) { }

  ngOnInit(): void {
   // this.form = this.form.value; 
  }

  onSubmit(form: NgForm) { 
    alert(form);
    if (form.valid) {
      this.itemService.items.push(form.value);
    } 
  }
}
