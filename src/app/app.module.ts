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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './app-config';

import { MenuComponent } from './views/menu/menu.component';
import { ClientComponent } from './views/client/client.component';
import { PolicyComponent } from './views/policy/policy.component';
import { NotificationComponent } from './components/notification/notification.component';
import { GoogleloginComponent } from './components/googlelogin/googlelogin.component';
import { DialogComponent, DialogOverviewPolicy } from './components/dialog/dialog.component';

import { ClientService } from './services/client.service';
import { PolicyService } from './services/policy.service';
import { PubSubService } from './services/pubsub.service';

import { Policy } from '../app/model/policy'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClientComponent,
    PolicyComponent,
    NotificationComponent,
    GoogleloginComponent,
    DialogComponent,
    DialogOverviewPolicy
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
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [
    AppConfig,
    ClientService,
    PolicyService,
    PubSubService,
    ErrorStateMatcher,
    { provide: MatDialogRef, useValue: {} },
    { provide: Policy, useValue: {} }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogOverviewPolicy
  ]
})
export class AppModule{}