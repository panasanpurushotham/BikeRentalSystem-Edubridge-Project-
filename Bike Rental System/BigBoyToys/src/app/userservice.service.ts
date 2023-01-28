import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  url1="http://localhost:9091/insert"
  url2="http://localhost:9091/insert1"
  url3="http://localhost:9091/view1"
  url4="http://localhost:9091/update"
  url5="http://localhost:9091/delete1"
  url6="http://localhost:9091/update1"
  url7="http://localhost:9091/view"
  url8="http://localhost:9091/delete"
  url9="http://localhost:9091/insert2"
  url10="http://localhost:9091/view3"
  url11="http://localhost:9091/valid"
  url12="http://localhost:9091/viewI"

  url13="http://localhost:9091/getId"
  n:any
  getid(){
    return this.http.get(this.url13)
  }

  url14="http://localhost:9091/getRecordById"
  viewBooking(data:any){

    return this.http.post(this.url14,data)
  }
  url15="http://localhost:9091/getRecordById1"
  viewProfile(data:any){

    return this.http.post(this.url15,data)
  }






  insertData(data:any){
    return this.http.post(this.url1,data)
  }
  insertData1(data:any){
    return this.http.post(this.url2,data)
  }
  viewBookings(){
    return this.http.get(this.url3)
  }
  updateData(update:any){
    return this.http.post(this.url4,update)
  }
  deleteBooking(data:any){
    return this.http.post(this.url5,data)
  }
  updateBike(update:any){
    return this.http.post(this.url6,update)
  }
  viewusers(){
    return this.http.get(this.url7)
  }
  updateUser(update:any){
    return this.http.post(this.url4,update)
  }
  deleteUser(data:any){
    return this.http.post(this.url8,data)
  }
  insertBike(data:any){
    return this.http.post(this.url9,data)
  }
  viewBikes(){
    return this.http.get(this.url10)
  }

  get loginAuth(){
    return true;
  }
  getuser(data:any):Observable<any>{
    return this.http.post<any>(this.url11, data)
  }
  viewUser(data:any){
    return this.http.post(this.url12,data)
  }
}
