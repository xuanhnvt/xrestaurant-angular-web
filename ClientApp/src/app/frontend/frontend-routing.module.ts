import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CounterComponent } from './counter/counter.component'
import { FetchDataComponent } from './fetch-data/fetch-data.component'
import { FrontendComponent } from './frontend.component';

const routes: Routes = [
  { 
    path: '', component: FrontendComponent, children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
