import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CRUDLService } from 'src/app/core/crudl-base.service';
import { Salesman } from '../models/salesman.model';

@Injectable({
  providedIn: 'root'
})
export class SalesmanService extends CRUDLService<Salesman> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService
  ) {
    super(httpClient, messageService, 'Target', 'Salesman')
  }
}
