import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateReminderComponent } from './create-reminder/create-reminder.component';
import { MyRemindersComponent } from './my-reminders/my-reminders.component';
import { UpdateReminderComponent } from './update-reminder/update-reminder.component';


const routes: Routes = [
  { path :'create_reminder',component: CreateReminderComponent},
  { path :'update_reminder',component: UpdateReminderComponent},
  {path :'', component: MyRemindersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
