import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {DockModule} from 'primeng/dock';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimelineModule } from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext'
import { ExperienceComponent } from "./experience/experience.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from '@angular/forms';

import { SharedComponentModule } from './shared.module';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SpeedDialModule } from 'primeng/speeddial';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
    imports: [
        FontAwesomeModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HomeComponent,
        ExperienceComponent,
        EducationComponent,
        ProjectsComponent,
        ContactComponent,
        AboutComponent,
        SharedComponentModule,
        SpeedDialModule    
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
