import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EditDialogScreenBase } from 'src/app/core/edit-dialog-screen-base.directive';
import { UtilityService } from 'src/app/shared/utility/utility.service';
import { Sales } from '../../../models/sales.model';
import { ProductService } from '../../../services/product.service';
import { SalesService } from '../../../services/sales.service';
import { SalesmanService } from '../../../services/salesman.service';

@Component({
  selector: 'bns-sales-edit',
  templateUrl: './sales-edit.component.html',
  styleUrls: ['./sales-edit.component.css']
})
export class SalesEditComponent extends EditDialogScreenBase<Sales> implements OnInit {

  constructor(
    messageService: MessageService,
    utilityService: UtilityService,
    private formBuilder: FormBuilder,
    public dataService: SalesService,
    public salesmanService: SalesmanService,
    public productService: ProductService
  ) {
    super(messageService, utilityService)
  }

  createForm(): void {
    this.formDropDownFields = [
      { fieldName: 'SalesmanId', valuePropertyOfSelectedItem: 'Id', listPopulateTheDropdown: this.salesmanService.completeList },
      { fieldName: 'ProductId', valuePropertyOfSelectedItem: 'Id', listPopulateTheDropdown: this.productService.completeList }
    ];
    this.mainForm = this.formBuilder.group({
      Id: new FormControl({ value: 0, disabled: true }),
      SalesmanId: new FormControl(null, Validators.required),
      ProductId: new FormControl(null, Validators.required),
      Term: new FormControl(null),
      Amount: new FormControl(null, Validators.required)
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
