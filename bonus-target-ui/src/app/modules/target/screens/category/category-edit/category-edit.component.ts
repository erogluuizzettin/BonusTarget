import { CategoryService } from './../../../services/category.service';
import { EditDialogScreenBase } from 'src/app/core/edit-dialog-screen-base.directive';
import { UtilityService } from './../../../../../shared/utility/utility.service';
import { Category } from './../../../models/category.model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'bns-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent extends EditDialogScreenBase<Category> implements OnInit {

  constructor(
    messageService: MessageService,
    utilityService: UtilityService,
    private formBuilder: FormBuilder,
    public dataService: CategoryService
  ) {
    super(messageService, utilityService)
  }

  createForm(): void {
    this.formDropDownFields = [{ fieldName: 'ParentId', valuePropertyOfSelectedItem: 'Id', listPopulateTheDropdown: this.dataService.completeList }];
    this.mainForm = this.formBuilder.group({
      Id: new FormControl({ value: 0, disabled: true }),
      Title: new FormControl(null, Validators.required),
      ParentId: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.createForm();
    this.onShow$.subscribe(
      category => {
        if (category) {
          this.transferDataFromModelToForm()
        } else {
          this.mainForm.get('Id')?.patchValue(0);
        }
      }
    )
  }
}
