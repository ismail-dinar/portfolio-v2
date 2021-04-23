import { Component, HostListener, NgZone, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  public options: AnimationOptions;
  public showButton: boolean = false;
  private animationItem: AnimationItem;

  public constructor(private ngZone: NgZone) {}

  public ngOnInit(): void {
    this.options = {
      path: 'assets/json/arrow.json',
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

  @HostListener('window:scroll', ['$event'])
  public onscroll(event: Event): void {
    if (event.target['scrollingElement'].scrollTop) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

}
