import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private us:UserserviceService) {
    this.viewBookings();
   }

  ngOnInit(): void {
  }
  bookings:any
  viewBookings(){
    this.us.viewBookings().subscribe((result:any)=>{this.bookings=result})
  }
  deleteData(data:any){
    this.us.deleteBooking(data.value).subscribe();
    alert("Booking Deleted")
  }
  updateBike(update:any){
    this.us.updateBike(update.value).subscribe();
  }

}
