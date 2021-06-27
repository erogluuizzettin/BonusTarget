import { Directive, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MessageService } from "primeng/api";
import { Subject, Subscription } from "rxjs";
import { UtilityService } from "../shared/utility/utility.service";
import { ListScreenBase } from "./list-screen-base.directive";

@Directive()
export abstract class EditDialogScreenBase<T> implements OnDestroy {
    public subscriptionList: Subscription[] = [];
    abstract createForm(): void;
    formActionName: string;
    mainForm: FormGroup;
    display = false;
    progressActive = false;
    submitButtonLabel = 'Submit';
    cancelButtonLabel = 'Cancel';
    initialItem: any;
    currentItem: any;
    listScreen: ListScreenBase<T>;
    mainFormInitialValues: any;

    formDropDownFields: { fieldName: string, valuePropertyOfSelectedItem: string, listPopulateTheDropdown?: any[] }[] = [];
    formDateFields: string[] = [];

    onShow$: Subject<T | null> = new Subject();
    onHide$: Subject<T | null> = new Subject();

    constructor(
        private messageService: MessageService,
        private utilityService: UtilityService
    ) { }

    ngOnDestroy(): void {
        this.subscriptionList.forEach(sb => sb.unsubscribe());
    }

    showFormDialog(selectedItem: any) {
        if (!this.mainForm) {
            console.log({ 'selectedItem': selectedItem });
            
            this.messageService.add({ severity: 'warn', summary: 'Form hazır değil', detail: 'Edit formu için veriler henüz getirilmedi birkaç saniye içinde tekrar deneyiniz' });
            return;
        }
        this.display = true;
        this.progressActive = false;
        this.assingActionButtonsLabel();
        if (this.formActionName === 'Create') {
            this.mainForm.reset(this.mainFormInitialValues);
        } else {
            this.utilityService.formatDates(selectedItem, this.formDateFields);
        }
        if (this.formActionName === 'Delete') {
            this.mainForm.disable();
        } else {
            this.mainForm.enable();
        }
        this.initialItem = selectedItem;
        this.onShow$.next(selectedItem);
    }

    assingActionButtonsLabel() {
        this.cancelButtonLabel = 'Cancel';
        switch (this.formActionName) {
            case 'Create':
                this.submitButtonLabel = 'Create';
                break;
            case 'Update':
                this.submitButtonLabel = 'Update';
                break;
            case 'Delete':
                this.submitButtonLabel = 'Delete';
                break;
            default:
                this.submitButtonLabel = 'Submit';
                this.cancelButtonLabel = 'Cancel';
        }
    }

    onSubmit() {
        if (!this.mainForm.invalid) {
            this.progressActive = true; // işleme başlıyoruz
        }
    }

    hideFormDialog() {
        this.mainForm.reset(this.mainFormInitialValues);

        this.onHide$.next(this.currentItem ? this.currentItem : null);
        this.initialItem = null;
        this.currentItem = null;
        this.display = false;

        if (this.listScreen) {
            this.listScreen.refreshList();
        }
    }

    transferDataFromModelToForm() {
        // modelden forma geçerken
        this.mainForm.patchValue(this.initialItem);
        this.formDropDownFields.forEach(f => {
            const primitiveValue = this.initialItem[f.fieldName];
            if (primitiveValue && f.listPopulateTheDropdown) {
                for (let i = 0; i < f.listPopulateTheDropdown.length; i++) {
                    if (f.listPopulateTheDropdown[i][f.valuePropertyOfSelectedItem] === primitiveValue) {
                        this.mainForm.get(f.fieldName)!.patchValue(f.listPopulateTheDropdown[i]);
                        break;
                    }
                }
            }
        });
    }

    transferDataFromFormToModel(): void {
        // formdan modele geçerken
        this.currentItem = this.mainForm.value;
        this.utilityService.formatDates(this.currentItem, this.formDateFields);
        this.formDropDownFields.forEach(f => {
            const item = this.mainForm.get(f.fieldName)!.value;
            if (item) {
                this.currentItem[f.fieldName] = item[f.valuePropertyOfSelectedItem];
            }
        });
    }

}