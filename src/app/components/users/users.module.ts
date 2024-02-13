import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsersService } from "../../services/users.service";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserDialogComponent } from "./user-dialog/user-dialog.component";

@NgModule({
  declarations: [UsersListComponent , ConfirmationDialogComponent, UserDialogComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers:[UsersService]
})
export class UsersModule {

  
}
