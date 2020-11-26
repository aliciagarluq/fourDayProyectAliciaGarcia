import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http:HttpClient) { }

  getInfo(data:string): Promise<object>{
    return this.http.get(`${environment.url}${data}${environment.apiKey}`).toPromise();
  }
  getFilm(id:string): Promise<object>{
    return this.http.get(`${environment.url2}${id}${environment.apiKey}`).toPromise();
  }
  /*getOne(): Observable<any>{
    return this.http.get(`${environment.homeUrl}${environment.apiKey}`);
  }*/
}
