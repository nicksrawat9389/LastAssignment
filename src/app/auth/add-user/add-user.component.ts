import { formatCurrency } from '@angular/common';
import { Component, OnDestroy, OnInit, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first, take, takeUntil } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  imgSrc : string = '';
  AddUser!:FormGroup;
  onUpdate:boolean=false;
  userId:number=0;
  /**
   *
   */
  constructor(private router:Router,private authService:AuthService,private activatedRoute:ActivatedRoute,private crudService:CrudService) 
  {
  }

  ngOnInit(): void {
      this.AddUser=new FormGroup({
        firstName:new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        middleName:new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        lastName:new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        gender:new FormControl('',Validators.required),
        dob:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required,Validators.email]),
        dateOfJoining:new FormControl('',[Validators.required]),
        phone:new FormControl('',[Validators.required]),
        alternatePhone:new FormControl(''),
        address1:new FormControl(''),
        city1:new FormControl(''),
        state1:new FormControl(''),
        country1:new FormControl(''),
        zipcode1:new FormControl(''),
        address2:new FormControl(''),
        city2:new FormControl(''),
        state2:new FormControl(''),
        country2:new FormControl(''),
        zipcode2:new FormControl('')
      })
      this.crudService.currentUserDetails.subscribe((userDetails:any) => {
       if(userDetails){
        this.onUpdate=true;
        this.userId=userDetails.userId;
        this.AddUser.patchValue({
          firstName:userDetails.firstName,
          middleName:userDetails.middleName,
          lastName:userDetails.lastName,
          gender:userDetails.gender,
          dob:this.formatDate(userDetails.dob),
          email:userDetails.email,
          dateOfJoining:this.formatDate(userDetails.dateOfJoining),
          phone:userDetails.phone,
          alternatePhone:userDetails.alternatePhone,
          address1:userDetails.address1,
          city1:userDetails.city1,
          state1:userDetails.state1,
          country1:userDetails.country1,
          zipcode1:userDetails.zipCode1,
          address2:userDetails.address2,
          city2:userDetails.city2,
          state2:userDetails.state2,
          country2:userDetails.country2,
          zipcode2:userDetails.zipCode2
        })
       }
      })
  }

  onSubmit(){
    
    if(this.AddUser.valid){
      console.log(this.AddUser.value);
      let id = this.activatedRoute.snapshot.params['id'];
      this.authService.addUser(this.AddUser.value,id).subscribe((response:any)=>{
        console.log("response of Add user",response);
      })
    }
  }
  
  updateUser(){
    if(this.onUpdate){
      let id = this.activatedRoute.snapshot.params['id'];
      console.log("id:",id);
      this.crudService.updateUseDetails(this.AddUser.value,id,this.userId).subscribe((response:any)=>{
        console.log("response of update user",response);
        this.router.navigate(['/wrapper/dashboard',`${id}`])
      })

    }
    this.onUpdate = false;
    this.AddUser.reset();
    
  }


  private formatDate(date:any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  
}
