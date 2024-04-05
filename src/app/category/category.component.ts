<div *ngFor="let category of categories">
    <span>{{ category.name }}</span>
    <button (click)="startEditCategory(category)">Modifier</button>
    <button (click)="deleteCategory(category.id)">Supprimer</button>
  </div>
  
  <div *ngIf="isEditing">
    <form (submit)="updateCategory()">
      <input type="text" [(ngModel)]="selectedCategory.name">
      <button type="submit">Enregistrer</button>
      <button type="button" (click)="cancelEditCategory()">Annuler</button>
    </form>
  </div>
  
  <form (submit)="createCategory()">
    <input type="text" [(ngModel)]="newCategory.name" placeholder="Nouvelle Catégorie">
    <button type="submit">Ajouter</button>
  </form>
