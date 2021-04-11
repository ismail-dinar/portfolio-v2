import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { HireMeComponent } from './components/hire-me/hire-me.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ProvidedServicesComponent } from './components/provided-services/provided-services.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    HireMeComponent,
    CompaniesComponent,
    ProvidedServicesComponent,
    TechnologiesComponent,
    AboutMeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
