import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-update-reminder',
  templateUrl: './update-reminder.component.html',
  styleUrls: ['./update-reminder.component.css']
})
export class UpdateReminderComponent implements OnInit {
  updateForm = this.fb.group({
    subject : [''],
    description :[''],
    start_date : [''],
    start_time: [''],
    end_date : [''],
    end_time: [''],
  })
  id:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private fb:FormBuilder,private ds:DataService) {
    this.activatedRoute.params.subscribe((data:any)=>
   { 
     this.id=data._id;
     console.log(data)
       this.updateForm.setValue({
         subject:data.subject,
        description :data.description,
        start_date : data.start_date,
        start_time :data.start_time,
        end_date :data.end_date,
        end_time:data.end_time

       })
   })
   }

  ngOnInit(): void {
  }
  home()
  {
    this.router.navigate(['']);
  }
  update()
  {
    console.log(this.updateForm.value.status)
    this.ds.update(this.id,this.updateForm.value)
  .subscribe((data:any)=>{
    this.router.navigate(['']);  
    alert("Data Updated Successfully")
  },err=>{
    alert(err.error.message);
  })
  
  }

}
