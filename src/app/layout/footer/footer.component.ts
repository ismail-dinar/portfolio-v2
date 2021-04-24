import { Component, NgZone, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { socialMedia } from 'src/app/data/social-media';
import { ISocialMedia } from 'src/app/models/social-media.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public readonly socialMedia: ISocialMedia[] = socialMedia;
  public options: AnimationOptions[] = [];
  public year: number = new Date().getFullYear();
  private animationItems: AnimationItem[] = [];

  public constructor(private ngZone: NgZone) {}

  public ngOnInit(): void {
    this.socialMedia.forEach((item) => {
      this.options.push({
        path: `assets/json/${item.icon}.json`,
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
