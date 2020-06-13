import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
//import {MatDialog} from '@angular/material'


@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
  constructor(private router: Router) { }
 
  ngOnInit(): void {
  }



  register() : void {
    
     this.router.navigate(["/register"]);
   
  }

  
}
