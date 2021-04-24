import { DOCUMENT } from '@angular/common';
import { Component, AfterViewInit, Inject, OnInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

declare var VanillaTilt;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit{
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
