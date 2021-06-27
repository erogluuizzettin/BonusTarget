import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EditDialogScreenBase } from 'src/app/core/edit-dialog-screen-base.directive';
import { ListScreenBase } from 'src/app/core/list-screen-base.directive';
import { Product } from '../../../models/product.model';
import { CategoryService } from '../../../services/category.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'bns-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends ListScreenBase<Product> implements OnInit {
  @ViewChild('editForm', { static: true }) editForm: EditDialogScreenBase<Product>;

  constructor(
    private messageService: MessageService,
    public dataService: ProductService,
    public categoryService: CategoryService
  ) {
    super(messageService);
  }

  ngOnInit(): void {
    this.tableColumnDefinitions = [
      { field: 'Title', header: 'Title', filter: { type: 'text', matchMode: 'contains', placeholder: 'contains' }, type: 'text' },
      { field: 'CategoryId', header: 'Category', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'category' },
    ];
    this.refreshList();
  }

  createEmptyModel(): Product {
    throw new Error('Method not implemented.');
  }

  refreshList(): void {
    this.dataService.listAll();
    this.categoryService.listAll();
  }
}
