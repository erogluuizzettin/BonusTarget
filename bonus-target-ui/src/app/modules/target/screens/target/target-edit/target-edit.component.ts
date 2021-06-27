import { UtilityService } from './../../../../../shared/utility/utility.service';
import { Target } from './../../../models/target.model';
import { Component, OnInit } from '@angular/core';
import { EditDialogScreenBase } from 'src/app/core/edit-dialog-screen-base.directive';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TargetService } from '../../../services/target.service';
import { SalesmanService } from '../../../services/salesman.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'bns-target-edit',
  templateUrl: './target-edit.component.html',
  styleUrls: ['./target-edit.component.css']
})
export class TargetEditComponent extends EditDialogScreenBase<Target> implements OnInit {

  constructor(
    messageService: MessageService,
    utilityService: UtilityService,
    private formBuilder: FormBuilder,
    public dataService: TargetService,
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
      TargetAmount: new FormControl(null),
      TargetRealization: new FormControl(null)
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
