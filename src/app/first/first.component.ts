import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  constructor(private router:Router){

  }
submenu:boolean=false;
walink:string='https://wa.me/7013158366'

showSubmenu(){
  this.submenu=true;
}


}
