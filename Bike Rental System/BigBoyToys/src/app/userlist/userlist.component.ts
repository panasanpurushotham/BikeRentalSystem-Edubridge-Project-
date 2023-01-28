import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private us:UserserviceService) { 
    this.viewusers();
  }

  ngOnInit(): void {
  }
  users:any
  viewusers(){
    this.us.viewusers().subscribe((result:any)=>{this.users=result})
  }
  deleteUser(data:any){
    this.us.deleteUser(data.value).subscribe();
    alert("User Deleted")
  }
  updateUser(update:any){
    this.us.updateUser(update.value).subscribe();
    alert("User Updated")
  }

}
