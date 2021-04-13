import { Component, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio-v2';

  public ngAfterViewInit(): void {
    new WOW().init();
  }
}
