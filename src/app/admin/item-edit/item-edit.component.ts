import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  //item!: { title: string, imgSrc: string, price: number, category: string };
  editItemForm!: FormGroup;
  id: number = 0;
  categories: string[] = [];

    constructor(private route: ActivatedRoute,
      private itemService: ItemService,
      private router: Router,
      private categoryService: CategoryService) { }
  
    ngOnInit(): void {
      this.categoryService.getCategories().subscribe(categoriesFromDb => {
        this.categoryService.categories = []; 
        for (const key in categoriesFromDb) {
          this.categories.push(categoriesFromDb[key].category);
          this.categoryService.categories.push({id: key, category: categoriesFromDb[key].category});
        }
      });
      this.id = Number(this.route.snapshot.paramMap.get("itemId"));
      // this.item = this.itemService.items[this.id];
     let item = this.itemService.items.find(item => item.id == this.id);
     
     if (item) {
      this.editItemForm = new FormGroup({
        title: new FormControl(item.title),
        price: new FormControl(item.price),
        id: new FormControl(item.id),
        imgSrc: new FormControl(item.imgSrc),
        category: new FormControl(item.category)
      });
     }


    }

    //NgForm - template driven form: tavaline vorm
    //FormGroup - ReactiveForm: saab eelnevalt  väärtusi kuvada
    onSubmit(form: FormGroup) { 
      //alert(form);
      if (form.valid) {
        //this.itemService.items.push(form.value);
        this.itemService.items[this.id] = form.value;
        this.itemService.saveItemsToDatabase().subscribe(() => {
          console.log(" ese muudetud ja ab-s");
          this.router.navigateByUrl("/admin/esemete-list");
        });
        
      } 
    }

  }

