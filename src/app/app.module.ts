import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DevicesComponent } from './devices/devices.component';
import { HousesComponent } from './houses/houses.component';
import { ProducentsComponent } from './producents/producents.component';
import { DevicesListComponent } from './devices/devices-list/devices-list.component';
import { ResultsComponent } from './devices/results/results.component';
import { MainPageComponent } from './main-page/main-page.component';

import { DeviceItemComponent } from './devices/devices-list/device-item/device-item.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { DeviceNewComponent } from './devices/device-new/device-new.component';

import { DeviceService } from './devices/device.service';
import { ResultService } from './devices/results/results.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';

import { ResultsGroupTemperatureComponent } from './devices/results/results-group-temperature/results-group-temperature.component';
import { ResultsGroupHumidityComponent } from './devices/results/results-group-humidity/results-group-humidity.component';


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
    DeviceNewComponent,
    ResultsGroupHumidityComponent,
    ResultsGroupTemperatureComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule
  ],
  providers: [DeviceService, HttpClientModule, ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
