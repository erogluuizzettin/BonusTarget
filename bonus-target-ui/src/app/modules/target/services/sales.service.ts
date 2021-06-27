import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CRUDLService } from 'src/app/core/crudl-base.service';
import { Sales } from '../models/sales.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService extends CRUDLService<Sales> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService
  ) {
    super(httpClient, messageService, 'Target', 'Sales')
  }
}
