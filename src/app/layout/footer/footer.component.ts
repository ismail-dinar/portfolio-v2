import { Component, NgZone, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  private animationItem: AnimationItem;
  public socialMedia: string[] = ['facebook', 'linkedin', 'github', 'twitter'];
  public options: AnimationOptions[] = [];
  private animationItems: AnimationItem[] = [];
  public year: number = new Date().getFullYear();

  public constructor(private ngZone: NgZone) {}

  public ngOnInit(): void {
    this.socialMedia.forEach((item) => {
      this.options.push({
        path: `assets/json/${item}.json`,
        autoplay: false
      })
    });
  }

  public animationCreated(animationItem: AnimationItem, index: number): void {
    this.animationItems[index] = animationItem;
  }

  public play(index: number): void {
    this.ngZone.runOutsideAngular(() => this.animationItems[index].play());
  }

  public stop(index: number): void {
    this.ngZone.runOutsideAngular(() => this.animationItems[index].stop());
  }
}
