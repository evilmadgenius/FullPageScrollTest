import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { RouterModule } from '@angular/router';
import { FileService } from './services/file.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpService } from './services/HttpService.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';


@NgModule({ declarations: [
        
        AboutmeComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        RouterModule.forRoot([
            { path: '', component: AppComponent },
            { path: 'aboutme', component: AboutmeComponent },
        ]),
        BrowserAnimationsModule, MatCardModule, ReactiveFormsModule, MatInputModule,MatFormFieldModule], 
        providers: [FileService, HttpService, provideHttpClient(withInterceptorsFromDi())],
        schemas: [CUSTOM_ELEMENTS_SCHEMA] })
export class AppModule { }
