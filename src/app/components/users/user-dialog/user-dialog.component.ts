import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/users.model';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss',
})
export class UserDialogComponent implements OnChanges {
  @Output() saveUser = new EventEmitter<User>();
  @Input() user: User | null = null;
  @Input() editMode: boolean = false;
  @Output() close = new EventEmitter<boolean>();
  userForm: FormGroup;
  isSubmit: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && this.user) {
      this.userForm.patchValue(this.user);
    }
  }
  //generate uniqe  ID for a new user
  generateUniqueId(): string {
    const timestamp = Date.now().toString(36); 
    const randomChars = Math.random().toString(36).substring(2, 8); 
    return timestamp + randomChars; 
  }
  //For Submit Add User and Edit User
  onSubmit() {
    if (this.userForm.valid) {
      const userData: User = this.userForm.value;
      if (!this.editMode) {
        userData.id = this.generateUniqueId(); 
      }
      this.saveUser.emit(userData); 
    }
  }
  closeDialog() {
    this.close.emit(true);
  }
}
