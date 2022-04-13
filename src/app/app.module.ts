import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AppComponent } from './app.component';
import { MyFormComponent } from './comps/my-form/my-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RadioButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
