import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AppComponent } from './app.component';
import { MyFormComponent } from './comps/my-form/my-form.component';
import { MyPrimeNGFormComponent } from './comps/my-prime-ngform/my-prime-ngform.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    MyPrimeNGFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CardModule,
    RadioButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
