import { Directive, OnDestroy, ViewChild } from "@angular/core";
import { MessageService } from "primeng/api";
import { Table } from "primeng/table";
import { Subscription } from "rxjs";
import { EditDialogScreenBase } from "./edit-dialog-screen-base.directive";

@Directive()
export abstract class ListScreenBase<T> implements OnDestroy {
    @ViewChild('dt', { static: true }) dt: Table;
    public subscriptionList: Subscription[] = [];
    selectedRow: T;
    tableColumnDefinitions: any[];
    abstract editForm: EditDialogScreenBase<T>;

    ngOnDestroy(): void {
        this.subscriptionList.forEach(sb => sb.unsubscribe());
    }

    abstract refreshList(): void;
    abstract createEmptyModel(): T;

    constructor(
        messageService: MessageService
    ) {
    }

    openEditForm(item: any, action: string) {
        this.editForm.formActionName = action;
        this.editForm.showFormDialog(item);
    }

    applyFilterGlobal(event: any, filterMatchMode: string) {
        this.dt.filterGlobal((event.target as HTMLInputElement).value, filterMatchMode);
    }

    applyFilter(event: any, field: string, filterMatchMode: string) {
        this.dt.filter((event.target as HTMLInputElement).value, field, filterMatchMode);
    }
}