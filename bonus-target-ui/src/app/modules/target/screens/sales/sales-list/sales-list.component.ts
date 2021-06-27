import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { EditDialogScreenBase } from 'src/app/core/edit-dialog-screen-base.directive';
import { ListScreenBase } from 'src/app/core/list-screen-base.directive';
import { Sales } from '../../../models/sales.model';
import { SalesService } from '../../../services/sales.service';

@Component({
  selector: 'bns-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent extends ListScreenBase<Sales> implements OnInit {
  @ViewChild('editForm', { static: true }) editForm: EditDialogScreenBase<Sales>;
  @ViewChild('dt', { static: true }) dt: Table;

  constructor(
    private messageService: MessageService,
    public dataService: SalesService,
  ) {
    super(messageService);
  }

  ngOnInit(): void {
    this.tableColumnDefinitions = [
      { field: 'Id', header: 'Id', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'int' },
      { field: 'SalesmanId', header: 'Salesman', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'int' },
      { field: 'ProductId', header: 'Product', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'product' },
      { field: 'Term', header: 'Term', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'int' },
      { field: 'Amount', header: 'Amount', filter: { type: 'decimal', matchMode: 'equals', placeholder: 'equals' }, type: 'decimal' },
      // { field: 'GenerateDate', header: 'Generate Date', filter: { type: 'date', matchMode: 'equals', placeholder: 'equals' }, type: 'date' },
      // { field: 'UpdateDate', header: 'Update Date', filter: { type: 'date', matchMode: 'equals', placeholder: 'equals' }, type: 'date' },
      // { field: 'GenerateUser', header: 'Generate User', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'user' },
      // { field: 'UpdateUser', header: 'Update User', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'user' },
    ];
    this.refreshList();
  }

  createEmptyModel(): Sales {
    throw new Error('Method not implemented.');
  }

  refreshList(): void {
    this.dataService.listAll();
  }

  applyFilterGlobal(event: any, filterMatchMode: string) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, filterMatchMode);
  }

  applyFilter(event: any, field: string, filterMatchMode: string) {
    this.dt.filter((event.target as HTMLInputElement).value, field, filterMatchMode);
  }
}
