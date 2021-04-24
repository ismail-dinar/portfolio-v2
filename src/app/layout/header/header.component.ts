import { links } from './../../data/links';
import {
  AfterViewInit,
  Component,
  HostListener,
  Inject,
  NgZone,
  OnInit,
} from '@angular/core';
import { ILink } from 'src/app/models/link.interface';
import { DOCUMENT } from '@angular/common';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { find } from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit, OnInit {
  public links: ILink[] = links.sort(
    (a, b) => (a.position > b.position && 1) || -1
  );
  private currentLink: Element;
  public options: AnimationOptions;
  private animationItem: AnimationItem;
  private animated: boolean = false;

  public constructor(
    @Inject(DOCUMENT) private document: Document,
    private ngZone: NgZone
  ) {}

  public ngOnInit(): void {
    this.options = {
      path: 'assets/json/menu.json',
      autoplay: false,
      loop: false,
    };
  }

  public ngAfterViewInit(): void {
    this.setLinksObserver();
    this.currentLink = this.document.querySelector(
      '.navbar-nav .nav-item a.active'
    );
  }

  @HostListener('window:scroll', ['$event'])
  onscroll(event: Event): void {
    if (event.target['scrollingElement'].scrollTop) {
      this.document.querySelector('.navbar').classList.add('glassmorphism');
    } else {
      this.document.querySelector('.navbar').classList.remove('glassmorphism');
    }
  }

  public setActiveLink(event: Event): void {
    event.preventDefault();
    const clickedLink = event.target as HTMLLinkElement;
    this.currentLink.classList.remove('active');
    clickedLink.classList.toggle('active');
    this.currentLink = clickedLink;
    this.document.querySelector(this.currentLink.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  }

  public toggleActiveLink(link: string): void {
    this.document.querySelector('.link.active').classList.remove('active');
    this.currentLink = this.document.querySelector('#link-to-' + link);
    this.currentLink.classList.toggle('active');
  }

  public changeNavbarBg(): void {
    this.document.querySelector('.navbar').classList.toggle('bg-light');
    this.document.querySelector('.navbar').classList.toggle('shadow');
  }

  public animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  public toggleAnimation(): void {
    if (!this.animated) {
      this.ngZone.runOutsideAngular(() => {
        this.animationItem.play();
      });
    } else {
      this.ngZone.runOutsideAngular(() => {
        this.animationItem.stop();
      });
    }
    this.animated = !this.animated;
  }

  private setLinksObserver(): void {
    const links = this.document.querySelectorAll('a.link');
    const io = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const visibleSection = find(entries, 'isIntersecting')?.target;
        if (visibleSection) {
          this.toggleActiveLink(visibleSection.id);
        }
      },
      { threshold: [ 1, 0.5] }
    );
    links.forEach((link) =>
      io.observe(this.document.querySelector(link.getAttribute('href')))
    );
  }
}
