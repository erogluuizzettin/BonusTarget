import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CRUDLService } from 'src/app/core/crudl-base.service';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CRUDLService<Product> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService
  ) {
    super(httpClient, messageService, 'Target', 'Product')
  }
}
