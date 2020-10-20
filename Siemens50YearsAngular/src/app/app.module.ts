import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiemensInternetComponent } from './siemens-internet/siemens-internet.component';

@NgModule({
  declarations: [
    AppComponent,
    SiemensInternetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
