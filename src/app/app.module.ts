import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DevicesComponent } from './devices/devices.component';
import { HousesComponent } from './houses/houses.component';
import { ProducentsComponent } from './producents/producents.component';
import { DevicesListComponent } from './devices/devices-list/devices-list.component';
import { ResultsComponent } from './devices/results/results.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DeviceService } from './devices/device.service';
import { HttpClientModule } from '@angular/common/http';
import { DeviceItemComponent } from './devices/devices-list/device-item/device-item.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { DeviceNewComponent } from './devices/device-new/device-new.component';
import { ResultService } from './devices/results/results.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevicesComponent,
    HousesComponent,
    ProducentsComponent,
    DevicesListComponent,
    ResultsComponent,
    MainPageComponent,
    DeviceItemComponent,
    DeviceDetailComponent,
    DeviceNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [DeviceService, HttpClientModule, ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
