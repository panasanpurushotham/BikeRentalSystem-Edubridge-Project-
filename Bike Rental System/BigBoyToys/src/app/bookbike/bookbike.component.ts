import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-bookbike',
  templateUrl: './bookbike.component.html',
  styleUrls: ['./bookbike.component.css']
})
export class BookbikeComponent implements OnInit {

  bikeBooked(booking:any){
    alert("Bike Booked!!")
  }
  constructor(private us:UserserviceService) { }


  insertData1(insert:any){
    //document.write(insert.value);
    var user = localStorage.getItem('currentUser');
    var currentUser = JSON.parse(user?user:"1");
    var token = currentUser.userid;
    insert.value["userid"] = token; 
    this.us.insertData1(insert.value).subscribe();
  }
  ngOnInit(): void {
  }

}
