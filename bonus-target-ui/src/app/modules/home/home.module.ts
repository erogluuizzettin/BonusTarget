import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RoleListComponent } from './screens/role/role-list/role-list.component';
import { RoleEditComponent } from './screens/role/role-edit/role-edit.component';
import { UserListComponent } from './screens/user/user-list/user-list.component';
import { UserEditComponent } from './screens/user/user-edit/user-edit.component';
import { LoginComponent } from './screens/login/login.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'User', component: UserListComponent, pathMatch: 'full' },
      { path: 'Role', component: RoleListComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    RoleListComponent,
    RoleEditComponent,
    UserListComponent,
    UserEditComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
