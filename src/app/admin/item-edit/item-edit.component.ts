import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  item!: { title: string, imgSrc: string, price: number, category: string };
  editItemForm!: FormGroup;
  id: number = 0;

    constructor(private route: ActivatedRoute,
      private itemService: ItemService,
      private router: Router) { }
  
    ngOnInit(): void {
      this.id = Number(this.route.snapshot.paramMap.get("itemId"));
      
      this.item = this.itemService.items[this.id];
     

     this.editItemForm = new FormGroup({
       title: new FormControl(this.item.title),
       price: new FormControl(this.item.price),
       imgSrc: new FormControl(this.item.imgSrc),
       category: new FormControl(this.item.category)
     })
    }

    //NgForm - template driven form: tavaline vorm
    //FormGroup - ReactiveForm: saab eelnevalt  väärtusi kuvada
    onSubmit(form: FormGroup) { 
      alert(form);
      if (form.valid) {
        //this.itemService.items.push(form.value);
        this.itemService.items[this.id] = form.value;
        this.router.navigateByUrl("/admin/esemete-list");
      } 
    }

  }

