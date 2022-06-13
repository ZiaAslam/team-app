import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { TeamsService } from './Services/teams.service';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authServices:TeamsService,
    private authantication:LoginComponent,
    private router:Router
    ){
  
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       

    // return this.authantication.pipe(
    //   take(1),
    //   map(res =>{
    //     if(res){
    //       return true
    //     }
    //     return this.router.createUrlTree([''])
    //   })
    // )

    return true;
  }
  
}
