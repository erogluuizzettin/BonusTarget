import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { HomeComponent } from './home.component';
import { RoleListComponent } from './screens/role/role-list/role-list.component';
import { RoleEditComponent } from './screens/role/role-edit/role-edit.component';
import { UserListComponent } from './screens/user/user-list/user-list.component';
import { UserEditComponent } from './screens/user/user-edit/user-edit.component';
import { LoginComponent } from './screens/login/login.component';
import { MessageService } from 'primeng/api';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'User', component: UserListComponent, pathMatch: 'full' },
      { path: 'Role', component: RoleListComponent, pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent, pathMatch: 'full' }
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
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule
  ],
  providers: [
    MessageService
  ]
})
export class HomeModule { }
