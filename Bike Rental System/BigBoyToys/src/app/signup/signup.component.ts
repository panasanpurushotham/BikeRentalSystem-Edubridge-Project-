import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any;

  
  

  constructor(private us:UserserviceService) { }

  insertData(insert:any){
    this.us.insertData(insert.value).subscribe();
    this.us.getid().subscribe((result:any)=>{this.user=result;
    alert("Please note your User ID: "+(result.id+1))});
  }

  ngOnInit(): void {
  }

}
