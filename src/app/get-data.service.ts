import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { restaurant } from './restaurant';
import { catchError } from  'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private _http: HttpClient) { }

   getData(city): Observable<restaurant[]> {
      return this._http.get<restaurant[]>('http://opentable.herokuapp.com/api/restaurants?city='+ city)
        .pipe(catchError(this.errorHandler))
   }
   errorHandler(error: HttpErrorResponse) {
     console.log(error);
      return throwError(error);
   }
}
