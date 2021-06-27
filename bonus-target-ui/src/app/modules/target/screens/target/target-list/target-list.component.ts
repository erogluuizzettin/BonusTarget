import { Target } from './../../../models/target.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EditDialogScreenBase } from 'src/app/core/edit-dialog-screen-base.directive';
import { MessageService } from 'primeng/api';
import { TargetService } from '../../../services/target.service';
import { SalesmanService } from '../../../services/salesman.service';
import { ProductService } from '../../../services/product.service';
import { ListScreenBase } from 'src/app/core/list-screen-base.directive';

@Component({
  selector: 'bns-target-list',
  templateUrl: './target-list.component.html',
  styleUrls: ['./target-list.component.css']
})
export class TargetListComponent extends ListScreenBase<Target> implements OnInit {
  @ViewChild('editForm', { static: true }) editForm: EditDialogScreenBase<Target>;

  constructor(
    private messageService: MessageService,
    public dataService: TargetService,
    public salesmanService: SalesmanService,
    public productService: ProductService
  ) {
    super(messageService);
  }

  ngOnInit(): void {
    this.tableColumnDefinitions = [
      { field: 'SalesmanId', header: 'Salesman', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'salesman' },
      { field: 'ProductId', header: 'Product', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'product' },
      { field: 'Term', header: 'Term', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'int' },
      { field: 'TargetAmount', header: 'Target Amount', filter: { type: 'decimal', matchMode: 'equals', placeholder: 'equals' }, type: 'decimal' },
      { field: 'TargetRealization', header: 'Target Realization', filter: { type: 'decimal', matchMode: 'equals', placeholder: 'equals' }, type: 'decimal' }
    ];
    this.refreshList();
  }

  createEmptyModel(): Target {
    throw new Error('Method not implemented.');
  }

  refreshList(): void {
    this.dataService.listAll();
    this.salesmanService.listAll();
    this.productService.listAll();
  }
}
