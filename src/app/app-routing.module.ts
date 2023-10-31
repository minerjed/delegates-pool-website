import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelegateDetailsComponent } from './pages/delegate-details/delegate-details.component';

const routes: Routes = [
  { path: '', 
    component: DelegateDetailsComponent,
    pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }