import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent implements OnInit {
  public options: AnimationOptions;

  public ngOnInit(): void {
    this.options = {
      path: 'assets/json/404.json',
      autoplay: true,
      loop: true,
    };
  }



}
