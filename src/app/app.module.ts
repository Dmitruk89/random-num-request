import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomNumComponent } from './random-num/random-num.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, RandomNumComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
