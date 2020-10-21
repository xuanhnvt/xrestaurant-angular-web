import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component'
import { CounterComponent } from './counter/counter.component'
import { FetchDataComponent } from './fetch-data/fetch-data.component'


@NgModule({
  declarations: [
    FrontendComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
