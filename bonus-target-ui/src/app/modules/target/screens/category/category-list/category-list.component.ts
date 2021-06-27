import { CategoryEditComponent } from './../category-edit/category-edit.component';
import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../models/category.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ListScreenBase } from 'src/app/core/list-screen-base.directive';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
    selector: 'bns-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends ListScreenBase<Category> implements OnInit {
    @ViewChild('editForm', { static: true }) editForm: CategoryEditComponent;

    constructor(
        private messageService: MessageService,
        public dataService: CategoryService,
    ) {
        super(messageService);
    }

    ngOnInit(): void {
        this.tableColumnDefinitions = [
            { field: 'Id', header: 'Id', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'int' },
            { field: 'Title', header: 'Title', filter: { type: 'text', matchMode: 'contains', placeholder: 'contains' }, type: 'text' },
            { field: 'ParentId', header: 'Parent', filter: { type: 'int', matchMode: 'equals', placeholder: 'equals' }, type: 'parent' },
        ];
        this.refreshList();
    }

    refreshList(): void {
        this.dataService.listAll();
    }

    createEmptyModel(): Category {
        throw new Error('Method not implemented.');
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
