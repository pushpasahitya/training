import { Component } from '@angular/core';
import { User } from '../user';
import { ContaaserviceService } from '../contaaservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  user:User=new User();

  constructor(private http:HttpClient,private testserv:ContaaserviceService) {
  
  }

  ngOnInit(): void {
  }

  openaccount(){
      console.log("user in ts",this.user);
      this.testserv.saveuser(this.user).subscribe((user: any)=>{
        console.log(user);
     });
      alert("Data posted ")
     }

}
