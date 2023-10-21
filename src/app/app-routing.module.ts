import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DevicesComponent } from './devices/devices.component';
import { HousesComponent } from './houses/houses.component';
import { ProducentsComponent } from './producents/producents.component';
import { DevicesListComponent } from './devices/devices-list/devices-list.component';
import { ResultsComponent } from './devices/results/results.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { DeviceNewComponent } from './devices/device-new/device-new.component';
import { fetchDevicesResolver } from './routingResolvers';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'devices', component: DevicesComponent,
    children: [
      {path: '', component: DevicesListComponent},
      {path: 'new', component: DeviceNewComponent},
      {path: ':id', component: DeviceDetailComponent, resolve: [fetchDevicesResolver]},
      {path: ':id/results', component: ResultsComponent, resolve: [fetchDevicesResolver]},
    ]
  },

  {path: 'houses', component: HousesComponent},
  {path: 'producents', component: ProducentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
