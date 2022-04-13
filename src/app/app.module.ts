import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AppComponent } from './app.component';
import { MyFormComponent } from './comps/my-form/my-form.component';
import { MyPrimeNGFormComponent } from './comps/my-prime-ngform/my-prime-ngform.component';
import { DraftFormNdzComponent } from './comps/draft-form-ndz/draft-form-ndz.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    MyPrimeNGFormComponent,
    DraftFormNdzComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ToolbarModule,
    CardModule,
    RadioButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
