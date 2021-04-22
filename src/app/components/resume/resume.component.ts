import { Component, NgZone, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  public options: AnimationOptions;
  private animationItem: AnimationItem;

  public constructor(private ngZone: NgZone) {}

  public ngOnInit(): void {
    this.options = {
      path: 'assets/json/download.json',
      autoplay: false,
      loop: false,
    };
  }

  public animationCreated(animationItem: AnimationItem){
    this.animationItem = animationItem;
  }

  public play(): void {
    this.ngZone.runOutsideAngular(() => {this.animationItem.play()})
  }

  public onComplete(): void {
    this.ngZone.runOutsideAngular(() => {this.animationItem.resetSegments(true)})
  }
}
