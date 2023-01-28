import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private us:UserserviceService) { }

  ngOnInit(): void {
  }
  updateData(update:any){
    this.us.updateData(update.value).subscribe();
    alert("Data Updated")
  }

}
