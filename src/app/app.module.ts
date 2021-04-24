import player from 'lottie-web';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
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
import { SectionTitleComponent } from './ui/section-title/section-title.component';
import { ScrollToTopComponent } from './ui/scroll-to-top/scroll-to-top.component';
import { ErrorComponent } from './pages/error/error.component';
import { MainComponent } from './pages/main/main.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AboutMeComponent,
    AppComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    ResumeComponent,
    TechnologiesComponent,
    SectionTitleComponent,
    ScrollToTopComponent,
    ErrorComponent,
    MainComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LottieModule.forRoot({ player: playerFactory }),
    SwiperModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
