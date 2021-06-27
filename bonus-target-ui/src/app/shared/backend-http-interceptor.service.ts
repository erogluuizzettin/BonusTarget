import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';

const Regions =
  [
    {
      "Id": 1,
      "Title": "Marmara Bölgesi",
      "ParentId": null
    },
    {
      "Id": 2,
      "Title": "İstanbul",
      "ParentId": 1
    },
    {
      "Id": 4,
      "Title": "İstanbul Anadolu Müdürlüğü",
      "ParentId": 2
    },
    {
      "Id": 5,
      "Title": "İstanbul Avrupa Müdürlüğü",
      "ParentId": 2
    },
    {
      "Id": 3,
      "Title": "Bursa",
      "ParentId": 1
    },
    {
      "Id": 6,
      "Title": "Bursa Merkez Müdürlüğü",
      "ParentId": 3
    },
    {
      "Id": 7,
      "Title": "Kartal Şubesi",
      "ParentId": 4
    },
    {
      "Id": 8,
      "Title": "Avcılar Şubesi",
      "ParentId": 5
    },
    {
      "Id": 9,
      "Title": "Bursa Şubesi",
      "ParentId": 3
    }
  ]

const Categories =
  [
    {
      "Id": 1,
      "Title": "Elektronik",
      "ParentId": null
    },
    {
      "Id": 2,
      "Title": "Gıda",
      "ParentId": 1
    }
  ]

const Products =
  [
    {
      "Id": 1,
      "Title": "Televizyon",
      "CategoryId": 1,
    },
    {
      "Id": 2,
      "Title": "Cep Telefonu",
      "CategoryId": 1,
    },
    {
      "Id": 3,
      "Title": "Muz",
      "CategoryId": 2
    },
    {
      "Id": 4,
      "Title": "Buzdolabı",
      "CategoryId": 1,
    },
    {
      "Id": 5,
      "Title": "Monitör",
      "CategoryId": 1,
    },
    {
      "Id": 6,
      "Title": "Erik",
      "CategoryId": 2
    },
    {
      "Id": 7,
      "Title": "Klavye",
      "CategoryId": 1,
    },
    {
      "Id": 8,
      "Title": "Kulaklık",
      "CategoryId": 1,
    },
    {
      "Id": 9,
      "Title": "Şeftali",
      "CategoryId": 2
    },
    {
      "Id": 10,
      "Title": "Harddisk",
      "CategoryId": 1,
    },
    {
      "Id": 11,
      "Title": "Akıllı Saat",
      "CategoryId": 1,
    },
    {
      "Id": 12,
      "Title": "Domates",
      "CategoryId": 2
    }
  ]

const Salesmans = [
  {
    "Id": 1,
    "RegNum": "Cem123456",
    "FirstName": "Cem",
    "LastName": "Ertem",
    "ManagerId": 3,
    "RegionId": 6,
    "Wage": 20000,
    "BonusRatio": 5000,
  },
  {
    "Id": 2,
    "RegNum": "Izz123456",
    "FirstName": "İzzettin",
    "LastName": "Eroğlu",
    "ManagerId": 1,
    "RegionId": 9,
    "Wage": 15000,
    "BonusRatio": 4000,
  }
]

const Targets = [
  {
    "SalesmanId": 1,
    "ProductId": 3,
    "Term": 2021,
    "TargetAmount": 25,
    "TargetRealization": 23
  },
  {
    "SalesmanId": 1,
    "ProductId": 2,
    "Term": 2021,
    "TargetAmount": 15,
    "TargetRealization": 15
  },
  {
    "SalesmanId": 2,
    "ProductId": 1,
    "Term": 2021,
    "TargetAmount": 30,
    "TargetRealization": 26
  }
]

const Sales = [
  {
    "Id": 1,
    "ProductId": 3,
    "SalesmanId": 2021,
    "Amount": 25,
  },
  {
    "Id": 2,
    "ProductId": 5,
    "SalesmanId": 2021,
    "Amount": 25,
  },
  {
    "Id": 3,
    "ProductId": 1,
    "SalesmanId": 2021,
    "Amount": 25,
  }
]

const Roles = [
  {
    "Id": 1,
    "Description": "Admin",
    "Type": 2021
  },
  {
    "Id": 2,
    "Description": "Standart User",
    "Type": 2021
  }
]

const Users = [
  {
    "Id": 1,
    "UserName": "custaf",
    "FirstName": "Mustafa Cem",
    "LastName": "Ertem",
    "RoleId": 1
  },
  {
    "Id": 2,
    "UserName": "redfavor",
    "FirstName": "İzzettin",
    "LastName": "Eroğlu",
    "RoleId": 2
  },
  {
    "Id": 3,
    "UserName": "abdullah",
    "FirstName": "Abdullah",
    "LastName": "Aktaş",
    "RoleId": 1
  }
]

@Injectable({
  providedIn: 'root'
})
export class BackendHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === "GET") {
      switch (request.url) {
        case "http://localhost:4200/Target/Region/ListAll":
          return of(new HttpResponse({ status: 200, body: Regions }));
        case "http://localhost:4200/Target/Product/ListAll":
          return of(new HttpResponse({ status: 200, body: Products }));
        case "http://localhost:4200/Target/Category/ListAll":
          return of(new HttpResponse({ status: 200, body: Categories }));
        case "http://localhost:4200/Target/Salesman/ListAll":
          return of(new HttpResponse({ status: 200, body: Salesmans }));
        case "http://localhost:4200/Target/Sales/ListAll":
          return of(new HttpResponse({ status: 200, body: Sales }));
        case "http://localhost:4200/Target/Target/ListAll":
          return of(new HttpResponse({ status: 200, body: Targets }));
        case "http://localhost:4200/Home/User/ListAll":
          return of(new HttpResponse({ status: 200, body: Users }));
        case "http://localhost:4200/Home/Role/ListAll":
          return of(new HttpResponse({ status: 200, body: Roles }));
      }
    } else {
      console.log(request.url);
    }
    return next.handle(request)
  }
}
