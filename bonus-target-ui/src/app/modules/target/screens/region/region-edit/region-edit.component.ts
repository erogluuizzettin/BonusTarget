import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EditDialogScreenBase } from 'src/app/core/edit-dialog-screen-base.directive';
import { UtilityService } from 'src/app/shared/utility/utility.service';
import { Region } from '../../../models/region.model';
import { RegionService } from '../../../services/region.service';

@Component({
  selector: 'bns-region-edit',
  templateUrl: './region-edit.component.html',
  styleUrls: ['./region-edit.component.css']
})
export class RegionEditComponent extends EditDialogScreenBase<Region> implements OnInit {
  constructor(
    messageService: MessageService,
    utilityService: UtilityService,
    private formBuilder: FormBuilder,
    public dataService: RegionService
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
