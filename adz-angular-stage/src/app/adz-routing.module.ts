import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ErrorComponent} from './component/error/error.component';
import {CatalogueFilterComponent} from './component/catalogue-filter/catalogue-filter.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogue', component: CatalogueFilterComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdzRoutingModule { }
