import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DevicesComponent } from './devices/devices.component';
import { HousesComponent } from './houses/houses.component';
import { ProducentsComponent } from './producents/producents.component';
import { DevicysListComponent } from './devices/devicys-list/devicys-list.component';
import { ResultsComponent } from './devices/results/results.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DeviceService } from './devices/device.service';
import { HttpClientModule } from '@angular/common/http';
import { DeviceItemComponent } from './devices/devicys-list/device-item/device-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevicesComponent,
    HousesComponent,
    ProducentsComponent,
    DevicysListComponent,
    ResultsComponent,
    MainPageComponent,
    DeviceItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
