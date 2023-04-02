import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
const url = "http://localhost:3000/rebrique";

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
private data: any[]=[];
private data2:any[]=[];
private dataSubject = new BehaviorSubject<any[]>([]);
private dataSubject2 = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {

   }
  //  getProduits():Observable<[]>{
  //   return this.http.get<Produit[]>(url);
  //   }
   addData(item: any) {
    this.data.push(item);
    this.dataSubject.next(this.data);
  }

  getData() {
    return this.dataSubject.asObservable();
  }

  addData2(item: any) {
    this.data2.push(item);
    this.dataSubject2.next(this.data2);
  }

  getData2() {
    return this.dataSubject2.asObservable();
  }
   
}
