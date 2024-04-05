import { Component, OnInit } from '@angular/core';
import { Page } from '../models/pages.model';
import { Category } from '../models/category.model';
import { PageService } from './pages.service';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  pages: Page[] = [];
  categories: Category[] = []; 
  newPage: Page = { id: 0, title: '', content: '', bookId: 0, categories: [] }; 
  selectedPage: Page | null = null;
  isEditing = false;

  constructor(
    private pageService: PageService,
    private categoryService: CategoryService 
  ) { }

  ngOnInit(): void {
    this.loadPages();
    this.loadCategories();
  }

  loadPages(): void {
    this.pageService.getAllPages().subscribe(pages => {
      this.pages = pages;
    });
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  createPage(): void {
    this.pageService.createPage(this.newPage).subscribe(() => {
      this.loadPages();
      this.newPage= { id: 0, title: '', content: '', bookId: 0, categories: [] }; 
    });
  }

  startEditPage(page: Page): void {
    this.selectedPage = { ...page };
    this.isEditing = true;
  }

  cancelEditPage(): void {
    this.selectedPage = null;
    this.isEditing = false;
  }

  updatePage(): void {
    if (this.selectedPage) {
      this.pageService.updatePage(this.selectedPage).subscribe(() => {
        this.loadPages();
        this.selectedPage = null;
        this.isEditing = false;
      });
    }
  }

  deletePage(id: number): void {
    this.pageService.deletePage(id).subscribe(() => {
      this.loadPages();
    });
  }
}
