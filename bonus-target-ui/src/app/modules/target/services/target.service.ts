import { Target } from './../models/target.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CRUDLService } from 'src/app/core/crudl-base.service';

@Injectable({
  providedIn: 'root'
})
export class TargetService extends CRUDLService<Target> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService
  ) {
    super(httpClient, messageService, 'Target', 'Target')
  }
}
