import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Iuser, user } from 'src/app/models/iuser';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private CurrentUserSource: BehaviorSubject<user>;
  // CurrentUser$=this.CurrentUserSource.asObservable();
  public account: Observable<user>;

 Httpheader={};

  test!: user | null;

  constructor(private http:HttpClient , private route :Router)
   {
//! or as String with local storage
this.CurrentUserSource= new BehaviorSubject<user>(JSON.parse(localStorage.getItem('user')!));
this.account=this.CurrentUserSource.asObservable();
    this.Httpheader={
      Headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }
  public get userValue(): user {
    return this.CurrentUserSource.value;
  }

Register(value:any):Observable<user>
{
  return this.http.post<user>(`${environment.APIURL}/api/UserAccount/Register`,value).pipe(
    map(
      user=>{
        localStorage.setItem('token',user.token);
        localStorage.setItem('user', JSON.stringify(user));
        this.CurrentUserSource.next(user);
        return user;
      }
    )

  )



}

LoginUser(value:any):Observable<user>
{
  return this.http.post<user>(`${environment.APIURL}/api/UserAccount/Login`,value).pipe(
    map(
      user=>{
        localStorage.setItem('token',user.token);
        localStorage.setItem('user', JSON.stringify(user));
        // let data = JSON.parse(localStorage.getItem('user')!)
        // localStorage.setItem('username', JSON.stringify(user.username));
        this.CurrentUserSource.next(user);


        return user;
      }
    )

  )



}

LogOut()
{
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  window.location.reload();


}


// get GetToken():user|null
// {
//   const check= (localStorage.getItem('token'));
//   if(check)
//   return this.CurrentUserSource
//   else{
//     return null
//   }
// }
// getusername()
// {
// return  this.CurrentUser$.pipe()
// }
// checkemailexists(email :string )
// {
//   return this.http.get<boolean>(`${environment.APIURL}/`+email)

// }


}
