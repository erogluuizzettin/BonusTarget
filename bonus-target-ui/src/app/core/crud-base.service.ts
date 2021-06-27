import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

export abstract class CRUDService<T> {
    baseRoute: string;

    constructor(
        protected httpClient: HttpClient,
        protected messageService: MessageService,
        protected module: string,
        protected screen: string,
    ) {
        this.baseRoute = `${environment.baseApiRoute}/${module}/${screen}/`;
    }

    create(model: T, action = 'Create') {
        return this.httpClient.post<T>(this.baseRoute + action, model);
    }

    read(id: number, action = 'Read'): Observable<T> {
        const params = new HttpParams().set('id', id.toString());
        return this.httpClient.get<T>(this.baseRoute + action, { observe: 'body', responseType: 'json', params });
    }

    update(model: T, action = 'Update') {
        return this.httpClient.put<T>(this.baseRoute + action, model);
    }

    delete(id: number, action = 'Delete') {
        const params = new HttpParams().set('id', id.toString());
        return this.httpClient.delete(this.baseRoute + action, { params });
    }
}