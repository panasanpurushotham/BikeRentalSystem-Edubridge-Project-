import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  constructor(private us:UserserviceService) { 
  this.viewBikes();
  }

  ngOnInit(): void {
  }
  bikes:any
  viewBikes(){
    this.us.viewBikes().subscribe((result:any)=>{this.bikes=result})
  }

}
