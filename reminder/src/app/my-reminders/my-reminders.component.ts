import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router'; 
import { DataService } from '../services/data.service';

export interface UserData {
  'subject': String;
  'description': String;
  'start_date':Date;
  'start_time': String;
  'end_date': Date;
  'end_time': String;
}



@Component({
  selector: 'app-my-reminders',
  templateUrl: './my-reminders.component.html',
  styleUrls: ['./my-reminders.component.css']
})



export class MyRemindersComponent {
  displayedColumns: string[] = ['Subject', 'Start_Date', 'Start_Time', 'End_Date','End_Time','Description'];
  reminder: MatTableDataSource<UserData>;
  filterValue: string="";
  total=0;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private dataservice:DataService,private router:Router) {

    this.reminder = new MatTableDataSource([]);
  
  }
  ngOnInit(): void {
    this.reminder.paginator = this.paginator;  
    this.paginator.pageSize=5;
    this.reminder.sort = this.sort;  
    this.search();
  
  }

  changePage(event:any){
    this.search();
  }

  search()
  {

    this.dataservice.getReminder(this.filterValue, this.paginator.pageIndex, this.paginator.pageSize)
    .subscribe((d:any)=>{
      console.log(d);
       this.total=d.total;
      this.reminder = new MatTableDataSource(d.data);
     
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
      this.filterValue=filterValue;
      console.log(this.paginator.pageSize);
      this.search();
   
  }
  create()
  {
     this.router.navigate(['/create_reminder']);
  }
  getRecord(data)
  {
    
    this.router.navigate(['/update_reminder',data]);
  }
}






