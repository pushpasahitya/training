import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
document:any;
constructor(@Inject(DOCUMENT) document:Document,private router:Router)
{
	this.document=document
}


open(){
	if(this.document.getElementById('un').value=='') {
		alert('Please enter your email id here');
		this.document.getElementById('un').focus();
		this.document.getElementById('un').email.value='please enter name here';
		// return false;
	}
	

	else{
		this.router.navigate(['mainpage']);
	}
 
}
 validateinputs(){
	
	
	
	return (true);
}





}
