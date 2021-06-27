import { RegionService } from './../../../services/region.service';
import { ListScreenBase } from 'src/app/core/list-screen-base.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Region } from '../../../models/region.model';
import { EditDialogScreenBase } from 'src/app/core/edit-dialog-screen-base.directive';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'bns-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent extends ListScreenBase<Region> implements OnInit {
  @ViewChild('editForm', { static: true }) editForm: EditDialogScreenBase<Region>;

  constructor(
    private messageService: MessageService,
    public dataService: RegionService,
  ) {
    super(messageService);
  }

  ngOnInit(): void {
    this.tableColumnDefinitions = [
      // { field: 'Id', header: 'Id', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'int' },
      { field: 'Title', header: 'Title', filter: { type: 'text', matchMode: 'contains', placeholder: 'contains' }, type: 'text' },
      { field: 'ParentId', header: 'Parent', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'parent' },
    ];
    this.refreshList();
  }

  createEmptyModel(): Region {
    throw new Error('Method not implemented.');
  }

  refreshList(): void {
    this.dataService.listAll();
  }
}
