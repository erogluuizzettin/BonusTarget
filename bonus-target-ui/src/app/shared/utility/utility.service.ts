import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  colors = [
    { name: 'primary', hex: '#20a8d8' },
    { name: 'secondary', hex: '#c8ced3' },
    { name: 'success', hex: '#4dbd74' },
    { name: 'danger', hex: '#f86c6b' },
    { name: 'warning', hex: '#ffc107' },
    { name: 'info', hex: '#63c2de' },
    { name: 'light', hex: '#f0f3f5' },
    { name: 'dark', hex: '#2f353a' },
  ];

  booleanFilterOptions = [
    { value: true, text: 'Yes' },
    { value: false, text: 'No' },
  ];

  toJSONDate(value: Date): string {
    return moment(value).format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z';
  }

  formatDates(model: any, propertyNames: string[]) {
    for (const propertyName of propertyNames) {
      model[propertyName] = this.toJSONDate(model[propertyName]);
    }
  }

  /*
    exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.budgetList);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "Butce_Listesi");
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }
  */
}
