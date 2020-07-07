import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
const options ={
  withCredentials:true,
  params:null
} 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getReminder(value,pageno,limit)
  {
    let params=new HttpParams();
    params = params.append('search',value);
    params = params.append('page',pageno);
    params = params.append('limit',limit);
    console.log(`params:${params}`);
    options.params = params;
    return this.http.get('http://localhost:4000/users/showReminder/search',options);
  }
  create(data)
  {
    return this.http.post('http://localhost:4000/users/reminders',data,options);
  }
  update(id,data)
  {
    return this.http.put(`http://localhost:4000/users/updateReminder/${id}`,data,options);
  }
}
