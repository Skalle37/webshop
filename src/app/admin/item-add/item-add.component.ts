import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {
  categories: string[] = [];

  constructor( private itemService: ItemService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    // this.categories = this.categoryService.categories;
   // this.form = this.form.value; 
   this.categoryService.getCategories().subscribe(categoriesFromDb => { 
    for (const key in categoriesFromDb) {
      this.categories.push(categoriesFromDb[key].category);
      this.categoryService.categories.push({id: key, category: categoriesFromDb[key].category});
    }
  })
  }

  onSubmit(form: NgForm) { 
    alert(form);
    if (form.valid) {
      // this.itemService.items.push(form.value);
      this.itemService.addItemToDatabase(form.value).subscribe();
    } 
  }
}
