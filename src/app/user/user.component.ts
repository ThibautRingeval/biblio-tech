import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  newUser: User = { id: 0, email: '', password: '', role: 'user' };
  selectedUser: User | null = null;
  isEditing = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  createUser(): void {
    this.userService.createUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { id: 0, email: '', password: '', role: 'user' };
    });
  }

  startEditUser(user: User): void {
    this.selectedUser = { ...user };
    this.isEditing = true;
  }

  cancelEditUser(): void {
    this.selectedUser = null;
    this.isEditing = false;
  }

  updateUser(): void {
    if (this.selectedUser) {
      this.userService.updateUser(this.selectedUser).subscribe(() => {
        this.loadUsers();
        this.selectedUser = null;
        this.isEditing = false;
      });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
}
