import { UserService } from './../../../../home/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EditDialogScreenBase } from 'src/app/core/edit-dialog-screen-base.directive';
import { ListScreenBase } from 'src/app/core/list-screen-base.directive';
import { Salesman } from '../../../models/salesman.model';
import { SalesmanService } from '../../../services/salesman.service';
import { RegionService } from '../../../services/region.service';

@Component({
  selector: 'bns-salesman-list',
  templateUrl: './salesman-list.component.html',
  styleUrls: ['./salesman-list.component.css']
})
export class SalesmanListComponent extends ListScreenBase<Salesman> implements OnInit {
  @ViewChild('editForm', { static: true }) editForm: EditDialogScreenBase<Salesman>;

  constructor(
    private messageService: MessageService,
    public dataService: SalesmanService,
    public userService: UserService,
    public regionService: RegionService
  ) {
    super(messageService);
  }

  ngOnInit(): void {
    this.tableColumnDefinitions = [
      { field: 'FirstName', header: 'First Name', filter: { type: 'text', matchMode: 'contains', placeholder: 'contains' }, type: 'text' },
      { field: 'LastName', header: 'Last Name', filter: { type: 'text', matchMode: 'contains', placeholder: 'contains' }, type: 'text' },
      { field: 'RegNum', header: 'Register Num', filter: { type: 'text', matchMode: 'contains', placeholder: 'contains' }, type: 'text' },
      { field: 'ManagerId', header: 'Manager', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'manager' },
      { field: 'RegionId', header: 'Region', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'region' },
      { field: 'Wage', header: 'Wage', filter: { type: 'decimal', matchMode: 'equals', placeholder: 'equals' }, type: 'decimal' },
      { field: 'BonusRatio', header: 'Bonus Ratio', filter: { type: 'decimal', matchMode: 'equals', placeholder: 'equals' }, type: 'decimal' }
    ];
    this.refreshList();
  }

  createEmptyModel(): Salesman {
    throw new Error('Method not implemented.');
  }

  refreshList(): void {
    this.dataService.listAll();
    this.userService.listAll();
    this.regionService.listAll();
  }
}
