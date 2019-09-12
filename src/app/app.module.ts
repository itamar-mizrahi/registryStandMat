import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatButtonToggleModule, MatProgressBarModule, MatDialogModule, MatStepperModule, MatFormFieldModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  entryComponents:[
    DialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
