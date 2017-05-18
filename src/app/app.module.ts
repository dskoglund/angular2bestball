import 'hammerjs';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { MaterialModule }           from '@angular/material';
import { RouterModule }             from '@angular/router';

import { DashboardComponent }       from './dashboard.component';
import { NavbarComponent }          from './navbar.component';
import { GolferDetailComponent }    from './golfer-detail.component';
import { AppComponent }             from './app.component';
import { GolfersComponent }         from './golfers.component';
import { GolferService }            from './golfer.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'detail/:id',
        component: GolferDetailComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'golfers',
        component: GolfersComponent
      }
    ])
  ],
  declarations: [
    DashboardComponent,
    NavbarComponent,
    AppComponent,
    GolferDetailComponent,
    GolfersComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ GolferService ]
})
export class AppModule { }
