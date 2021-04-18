import player from 'lottie-web';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CompaniesComponent } from './components/companies/companies.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LottieModule } from 'ngx-lottie';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SwiperModule } from 'swiper/angular';
import { TechnologiesComponent } from './components/technologies/technologies.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AboutMeComponent,
    AppComponent,
    CompaniesComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    TechnologiesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LottieModule.forRoot({ player: playerFactory }),
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
