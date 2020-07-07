import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

import {  FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-reminder',
  templateUrl: './create-reminder.component.html',
  styleUrls: ['./create-reminder.component.css']
})
export class CreateReminderComponent implements OnInit {
  reminderForm = this.fb.group({
    subject : ['',Validators.required],
    description :['',Validators.required],
    start_date : ['',Validators.required],
    start_time: ['',Validators.required],
    end_date : ['',Validators.required],
    end_time: ['',Validators.required],
  })

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder){ }

  ngOnInit(): void {
  }
  reminder()
  {
    this.ds.create(this.reminderForm.value)
    .subscribe((data:any)=>
    {
      alert("Reminder created successfully");
      this.router.navigate(['']);

    },err=>
    {
      alert(err);
    })
  }
  home()
  {   
      this.router.navigate(['']);
  }
  getError(controlName)
  {
      return this.reminderForm.get(controlName).errors
  }
}
