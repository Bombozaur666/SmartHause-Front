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
import { HousesListComponent } from './houses/houses-list/houses-list.component';
import { HouseItemComponent } from './houses/houses-list/house-item/house-item.component';

import { fetchDevicesResolver, fetchHouseResolver } from './routingResolvers';
import { HousesDetailComponent } from './houses/houses-detail/houses-detail.component';
import { HousesEditComponent } from './houses/houses-edit/houses-edit.component';
import { DeviceEditComponent } from './devices/device-edit/device-edit.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'devices', component: DevicesComponent,
    children: [
      {path: '', component: DevicesListComponent, resolve: [fetchDevicesResolver]},
      {path: 'new', component: DeviceNewComponent},
      {path: ':id', component: DeviceDetailComponent, resolve: [fetchDevicesResolver]},
      {path: ':id/results', component: ResultsComponent, resolve: [fetchDevicesResolver]},
      {path: ':id/edit', component: DeviceEditComponent, resolve: [fetchDevicesResolver]},
    ]
  },

  {path: 'houses', component: HousesComponent,
  children: [
    {path: '', component: HousesListComponent, resolve: [fetchHouseResolver]},
    {path: ':id', component: HousesDetailComponent, resolve: [fetchHouseResolver]},
    {path: ':id/edit', component: HousesEditComponent, resolve: [fetchHouseResolver]},
  ]},
  {path: 'producents', component: ProducentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
