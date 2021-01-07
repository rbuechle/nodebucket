/*
============================================
; Title: NodeBucket
; Author: R. Krasso
; Date: 12-02-20
; Modified By: Becca Buechle
; Description: Node Bucket employee management app
;===========================================
*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {}

  //cookie service
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {
    const sessionUser = this.cookieService.get('session_user');

    /**
     * If the cookie is present allow the user to access the application.
     */
    if(sessionUser) {
      return true;
    } else {
      /**
       * Otherwise, the user is not signed into the system and should be redirected to the sign-in component.
       */
      this.router.navigate(['/session/signin']);
      return false;
    }
  }
}
