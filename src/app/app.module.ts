import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { RouterModule } from '@angular/router';
import { FileService } from './services/file.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpService } from './services/HttpService.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {ReactiveFormsModule } from '@angular/forms';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';

@NgModule({ declarations: [
        AppComponent,
        AboutmeComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        RouterModule.forRoot([
            { path: '', component: AppComponent },
            { path: 'aboutme', component: AboutmeComponent },
        ]),
        BrowserAnimationsModule, MatCardModule, ReactiveFormsModule, MatInputModule], providers: [FileService, HttpService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
