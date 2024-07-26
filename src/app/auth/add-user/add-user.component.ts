import { formatCurrency } from '@angular/common';
import { Component, OnInit, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  imgSrc : string = '';
  AddUser!:FormGroup;
  
  ngOnInit(): void {
      this.AddUser=new FormGroup({
        firstName:new FormControl(''),
        middleName:new FormControl(''),
        lastName:new FormControl(''),
        gender:new FormControl(''),
        dob:new FormControl(''),
        email:new FormControl(''),
        dateOfJoining:new FormControl(''),
        phone:new FormControl(''),
        alternatePhone:new FormControl(''),
        city:new FormControl(''),
        state:new FormControl(''),
        country:new FormControl('')
      })
  }

  onSubmit(){
    console.log(this.AddUser.value);
  }
  onFileChange(event: any) {
    
  }
}
