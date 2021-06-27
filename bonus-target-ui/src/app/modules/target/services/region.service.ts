import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CRUDLService } from 'src/app/core/crudl-base.service';
import { Region } from '../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService extends CRUDLService<Region> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService
  ) {
    super(httpClient, messageService, 'Target', 'Region')
  }
}
