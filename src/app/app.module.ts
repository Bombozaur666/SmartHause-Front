import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DevicesComponent } from './devices/devices.component';
import { HausesComponent } from './hauses/hauses.component';
import { ProducentsComponent } from './producents/producents.component';
import { DevicysListComponent } from './devices/devicys-list/devicys-list.component';
import { ResultsComponent } from './devices/results/results.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevicesComponent,
    HausesComponent,
    ProducentsComponent,
    DevicysListComponent,
    ResultsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
