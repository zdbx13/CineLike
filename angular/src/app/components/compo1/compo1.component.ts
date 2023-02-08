import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
//import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})

export class compo1Component   {
  
  //constructor (private http:HttpClient) {}

  LoginForm =new FormGroup({
  

    name:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Zç]{6,}$')
    ]),

    password:new FormControl('',[
      Validators.required,
      Validators.pattern('[a-zA-Z0-9]{8,}$')
    ])

  });

  //constructor(private ValidatorService : ValidatorService){
//    this.name = this.ValidatorService.getData();
//
//  }
}
