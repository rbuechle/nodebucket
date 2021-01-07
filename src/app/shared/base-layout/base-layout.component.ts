/*
============================================
; Title: NodeBucket
; Author: R. Krasso
; Date: 12-02-20
; Modified By: Becca Buechle
; Description: Node Bucket employee management app
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

export class BaseLayoutComponent implements OnInit {
  year: number = Date.now();
  isLoggedIn: string;
  constructor(private cookieService: CookieService, private router: Router) {
    this.isLoggedIn = this.cookieService.get('session_user');
  }
  ngOnInit() { }
  signout() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/signin']);
  }
}
