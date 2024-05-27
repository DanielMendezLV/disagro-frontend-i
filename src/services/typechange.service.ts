import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ISearchRegisters } from "src/interfaces/typechange.interface";

@Injectable({
  providedIn: 'root',
})
/* It makes requests to the server to get the survey data and the configuration for
the survey, and then it stores the data in the store */
export class TypeChangeService {

  constructor(private http: HttpClient) { }

  submitSearch(initDate: string, finishDate: string) {
    const url = environment.buildEndpoint('disagro',['']);
    return this.http.post<any>(
      url,
      { initDate, finishDate },
    );
  }

  getRegisters() {
    const url = environment.buildEndpoint('disagro',['']);
    return this.http.get<ISearchRegisters[]>(
      url
    );
  }


}
