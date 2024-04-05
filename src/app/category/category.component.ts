import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  newCategory: Category = { id: 0, name: '' };
  isEditing = false;
  selectedCategory: Category | null = null;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  createCategory(): void {
    this.categoryService.createCategory(this.newCategory).subscribe(() => {
      this.loadCategories();
      this.newCategory = { id: 0, name: '' };
    });
  }

  startEditCategory(category: Category): void {
    this.selectedCategory = { ...category };
    this.isEditing = true;
  }

  cancelEditCategory(): void {
    this.selectedCategory = null;
    this.isEditing = false;
  }

  updateCategory(): void {
    if (this.selectedCategory) {
      this.categoryService.updateCategory(this.selectedCategory).subscribe(() => {
        this.loadCategories();
        this.selectedCategory = null;
        this.isEditing = false;
      });
    }
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.loadCategories();
    });
  }
}
