import { SalesmanService } from './services/salesman.service';
import { SalesService } from './services/sales.service';
import { CategoryService } from './services/category.service';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetComponent } from './target.component';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import { CategoryListComponent } from './screens/category/category-list/category-list.component';
import { CategoryEditComponent } from './screens/category/category-edit/category-edit.component';
import { ProductListComponent } from './screens/product/product-list/product-list.component';
import { ProductEditComponent } from './screens/product/product-edit/product-edit.component';
import { RegionListComponent } from './screens/region/region-list/region-list.component';
import { RegionEditComponent } from './screens/region/region-edit/region-edit.component';
import { SalesListComponent } from './screens/sales/sales-list/sales-list.component';
import { SalesEditComponent } from './screens/sales/sales-edit/sales-edit.component';
import { SalesmanListComponent } from './screens/salesman/salesman-list/salesman-list.component';
import { SalesmanEditComponent } from './screens/salesman/salesman-edit/salesman-edit.component';
import { TargetListComponent } from './screens/target/target-list/target-list.component';
import { TargetEditComponent } from './screens/target/target-edit/target-edit.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ProductService } from './services/product.service';
import { RegionService } from './services/region.service';
import { TargetService } from './services/target.service';
import { UserService } from '../home/services/user.service';

const targetRoutes: Routes = [
  {
    path: '',
    component: TargetComponent,
    children: [
      { path: 'Category', component: CategoryListComponent, pathMatch: 'full' },
      { path: 'Product', component: ProductListComponent, pathMatch: 'full' },
      { path: 'Region', component: RegionListComponent, pathMatch: 'full' },
      { path: 'Sales', component: SalesListComponent, pathMatch: 'full' },
      { path: 'Salesman', component: SalesmanListComponent, pathMatch: 'full' },
      { path: 'Target', component: TargetListComponent, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  declarations: [
    TargetComponent,
    CategoryListComponent,
    CategoryEditComponent,
    ProductListComponent,
    ProductEditComponent,
    RegionListComponent,
    RegionEditComponent,
    SalesListComponent,
    SalesEditComponent,
    SalesmanListComponent,
    SalesmanEditComponent,
    TargetListComponent,
    TargetEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(targetRoutes),
    ToastModule,
    SharedModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    DialogModule,
    FormsModule,
    DropdownModule,
    InputNumberModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MessageService,
    CategoryService,
    ProductService,
    RegionService,
    TargetService,
    SalesService,
    SalesmanService,
    UserService
  ]
})
export class TargetModule { }
