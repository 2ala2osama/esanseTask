import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, HomeComponent, NavbarComponent],
  imports: [CommonModule, RouterModule.forRoot([])],
})
export class LayoutModule {}
