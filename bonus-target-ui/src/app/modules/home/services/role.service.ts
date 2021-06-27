import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CRUDLService } from 'src/app/core/crudl-base.service';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends CRUDLService<Role> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService
  ) {
    super(httpClient, messageService, 'Home', 'Role')
  }
}
