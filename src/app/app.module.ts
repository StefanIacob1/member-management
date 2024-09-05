// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  bootstrap: [], // Remove AppComponent from here
})
export class AppModule {}
