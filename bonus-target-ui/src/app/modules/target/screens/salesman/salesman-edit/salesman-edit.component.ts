import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EditDialogScreenBase } from 'src/app/core/edit-dialog-screen-base.directive';
import { UserService } from 'src/app/modules/home/services/user.service';
import { UtilityService } from 'src/app/shared/utility/utility.service';
import { Salesman } from '../../../models/salesman.model';
import { RegionService } from '../../../services/region.service';
import { SalesmanService } from '../../../services/salesman.service';

@Component({
  selector: 'bns-salesman-edit',
  templateUrl: './salesman-edit.component.html',
  styleUrls: ['./salesman-edit.component.css']
})
export class SalesmanEditComponent extends EditDialogScreenBase<Salesman> implements OnInit {

  constructor(
    messageService: MessageService,
    utilityService: UtilityService,
    private formBuilder: FormBuilder,
    public dataService: SalesmanService,
    public regionService: RegionService,
    public userService: UserService,
  ) {
    super(messageService, utilityService)
  }

  createForm(): void {
    this.formDropDownFields = [
      { fieldName: 'ManagerId', valuePropertyOfSelectedItem: 'Id', listPopulateTheDropdown: this.userService.completeList },
      { fieldName: 'RegionId', valuePropertyOfSelectedItem: 'Id', listPopulateTheDropdown: this.regionService.completeList }
    ];
    this.mainForm = this.formBuilder.group({
      Id: new FormControl({ value: 0, disabled: true }),
      FirstName: new FormControl(null),
      LastName: new FormControl(null),
      RegNum: new FormControl(null),
      ManagerId: new FormControl(null),
      RegionId: new FormControl(null),
      Wage: new FormControl(null),
      BonusRatio: new FormControl(null)
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
