import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DairyComponent } from './dairy/dairy.component';
import { DailyExpComponent } from './daily-exp/daily-exp.component';

const routes: Routes = [
  { path: 'd', component: DairyComponent },
  { path: '**', component: DailyExpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
