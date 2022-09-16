import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , Resolve<any>{
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return false;

    let role= 2;

    //admin =1;
    //student =2;
    //staff =3;

    if (role == 1 || role == 3){
      return true;
    }
    else{ 
      return false;
    }
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('This is resolver')
    return false;
  }


  CanActivate( route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      alert('Request denied!')
    }

  
  
}
