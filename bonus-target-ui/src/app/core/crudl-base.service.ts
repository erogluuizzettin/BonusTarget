import { HttpClient } from "@angular/common/http";
import { MessageService } from "primeng/api";
import { Observable, Subject } from "rxjs";
import { CRUDService } from "./crud-base.service";
import { finalize, startWith } from 'rxjs/operators';

export abstract class CRUDLService<T> extends CRUDService<T> {
    protected fetchFailMessage = 'Server data fetch failed.';
    completeList: T[];
    completeListChanged = new Subject<T[]>();
    loading = false;

    constructor(
        httpClient: HttpClient,
        messageService: MessageService,
        module: string,
        screen: string,
    ) {
        super(httpClient, messageService, module, screen);
    }

    listAll(action = 'ListAll'): void {
        if (this.loading) {
            return;
        }

        this.loading = true;
        this.listAllAsync(action)
            .pipe(
                finalize(() => this.loading = false)
            )
            .subscribe(
                list => {
                    
                    this.completeList = list as T[];
                    this.completeListChanged.next(this.completeList);
                    console.log(this.completeList);
                }, 
                error => {
                    this.messageService.add({ severity: 'error', summary: 'fail', detail: this.fetchFailMessage });
                }
            );
    }

    listAllAsync(action = 'ListAll'): Observable<T[]> {
        return this.httpClient.get<T[]>(this.baseRoute + action, { observe: 'body', responseType: 'json'});
    }
}
