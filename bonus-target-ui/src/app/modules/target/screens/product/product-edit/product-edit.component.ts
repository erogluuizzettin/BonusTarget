import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EditDialogScreenBase } from 'src/app/core/edit-dialog-screen-base.directive';
import { UtilityService } from 'src/app/shared/utility/utility.service';
import { Product } from '../../../models/product.model';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'bns-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent extends EditDialogScreenBase<Product> implements OnInit {

  constructor(
    messageService: MessageService,
    utilityService: UtilityService,
    private formBuilder: FormBuilder,
    public dataService: ProductService,
    public categoryService: CategoryService
  ) {
    super(messageService, utilityService)
  }

  createForm(): void {
    this.formDropDownFields = [{ fieldName: 'CategoryId', valuePropertyOfSelectedItem: 'Id', listPopulateTheDropdown: this.categoryService.completeList }];
    this.mainForm = this.formBuilder.group({
      Id: new FormControl({ value: 0, disabled: true }),
      Title: new FormControl(null, Validators.required),
      CategoryId: new FormControl(null, Validators.required),
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
