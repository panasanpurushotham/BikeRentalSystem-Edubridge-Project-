import { Component, OnInit } from '@angular/core';
import { FormControl,  Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  constructor(private router: Router,
    private ps:UserserviceService) { }

  players:any;
  loginForm= new FormGroup({
    id: new FormControl('',[Validators.required, Validators.maxLength(30)]),
    psw: new FormControl('',[Validators.required, Validators.maxLength(30)]),
  });
  login(insert:any){
    console.log(this.loginForm);
  }
  get id(){
    return this.loginForm.get('id');
  }
  get psw(){
    return this.loginForm.get('psw');
  }
 
  
  

  ngOnInit(): void {
  }
  submit(){
    if(this.id?.value?.length==0 || this.psw?.value?.length==0 || this.id?.invalid || this.psw?.invalid){ 
      alert("Enter Valid Details"); } 
      else if(this.id?.value=='7' && this.psw?.value=='admin123'){ 
        alert("Successfully Logged in")
        this.router.navigate(['/adminhome']); } 
        else{  
          this.ps.getuser(this.loginForm.value).subscribe( 
            data=>{ this.ps.getuser(this.loginForm.value).subscribe()
              localStorage.setItem('currentUser', JSON.stringify({ userid:this.id?.value }));
              alert("Successfully Logged in")
              this.router.navigate(['/userhome']);
            },
            error=>{
              alert
              ("Invalid Credential");
             
             
           }
         
         );
       }
 }
}
