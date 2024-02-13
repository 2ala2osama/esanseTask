import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/users.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  userData: User[] = [];
  filteredUsers: User[] = [];
  searchQuery: string = '';
  isConfirmationDialogVisible: boolean = false;
  userToDeleteId!: number | null;
  isDialogOpen: boolean = false;
  editMode: boolean = false;
  selectedUser: User | null = null;
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.getUserData();
  }
  // get all the data for table
  getUserData() {
    this.userService.getUserDataObservable().subscribe((res: User[]) => {
      this.users = res;
      this.filteredUsers = this.users;
    });
  }
  // delete user recorde
  deleteUserById(id: number) {
    this.isConfirmationDialogVisible = true;
    this.userToDeleteId = id;
  }
  confirmDelete() {
    this.isConfirmationDialogVisible = false;
    if (this.userToDeleteId) {
      this.userData = this.users.filter(
        (user) => user.id !== this.userToDeleteId
      );
      this.userService.updateUserData(this.userData);
      this.userToDeleteId = null;
    }
  }
  // search by name
  filterUsers() {
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

// open dialog in two modes
  openDialog(user: User | null = null) {
    this.isDialogOpen = true;
    if (user) {
      this.selectedUser = { ...user }; 
      this.editMode = true;
    } else {
      this.selectedUser = null;
      this.editMode = false;
    }
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  onSaveUser(userData: User) {
    // Edit mode
    if (this.editMode) {
      const updatedUsers = this.users.map(user => {
        if (user.id === userData.id) {
          return userData; 
        }
        return user;
      });
      this.userService.updateUserData(updatedUsers); 
    } else {
      // Add mode
      const updatedUsers = [...this.users, userData]; 
      this.userService.updateUserData(updatedUsers); 
    }
    this.closeDialog(); 
  }
  
}
