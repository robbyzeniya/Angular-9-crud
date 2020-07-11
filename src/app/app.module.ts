import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import localeId from '@angular/common/locales/id';

import {registerLocaleData} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterCreateComponent } from './register/register-create/register-create.component';
import { RegisterUpdateComponent } from './register/register-update/register-update.component';


registerLocaleData(localeId, 'id');

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        RegisterComponent,
        NotFoundComponent,
        RegisterCreateComponent,
        RegisterUpdateComponent,


    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}

