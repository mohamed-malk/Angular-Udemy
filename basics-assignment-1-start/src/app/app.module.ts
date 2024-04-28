import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarnningComponent } from './warnning/warnning.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    WarnningComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
