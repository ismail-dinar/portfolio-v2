import { contacts } from './../../data/contact';
import { IContact } from './../../models/contact.interface';
import { Component, OnInit, NgZone } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public readonly contacts: IContact[] = contacts;
  public options: AnimationOptions[] = [];
  private animationItems: AnimationItem[] = [];

  public constructor(private ngZone: NgZone) {}

  public ngOnInit(): void {
    this.contacts.forEach(contact => {
      this.options.push({
        path: `assets/json/${contact.icon}.json`,
        autoplay: false,
      });
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
