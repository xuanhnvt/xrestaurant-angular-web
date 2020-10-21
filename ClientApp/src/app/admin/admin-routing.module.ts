import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
    {
      path: '', component: AdminComponent, children:
      [
        { path: '', redirectTo: 'catalog', pathMatch: 'full' },
        { path: 'catalog', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule)}
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
