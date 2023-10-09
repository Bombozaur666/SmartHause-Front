import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DevicesComponent } from './devices/devices.component';
import { HausesComponent } from './hauses/hauses.component';
import { ProducentsComponent } from './producents/producents.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'devices', component: DevicesComponent,
  },
  {
    path: 'hauses', component: HausesComponent,
  },
  {
    path: 'producents', component: ProducentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
