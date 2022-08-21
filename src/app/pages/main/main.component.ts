import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import WOW from 'wow.js';

declare var VanillaTilt;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements AfterViewInit {
  public constructor(@Inject(DOCUMENT) private document: Document){}

  public ngAfterViewInit(): void {
    VanillaTilt.init(this.document.querySelectorAll(".tiltable-card"), {
      max: 10,
      speed: 400,
      glare: true,
    });

    new WOW().init();
  }
}
