import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatToolbarModule } from '@angular/material/';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout/';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroupDirective, NgForm, Validators, NgModel, FormsModule, FormGroup , ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './app-config';

import { MenuComponent } from './menu/menu.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './services/client.service';
import { PolicyComponent } from './policy/policy.component';
import { NotificationComponent } from './notification/notification.component';
import { SnackComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClientComponent,
    PolicyComponent,
    NotificationComponent,
    SnackComponent
  ],
  exports: [ RouterModule ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    AppConfig,
    ClientService,
    ErrorStateMatcher
  ],
  bootstrap: [AppComponent],
  entryComponents: [SnackComponent]
})
export class AppModule{}