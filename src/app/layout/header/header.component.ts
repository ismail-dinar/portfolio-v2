import { links } from './../../data/links';
import { AfterViewInit, Component, HostListener, Inject } from '@angular/core';
import { ILink } from 'src/app/models/link.interface';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  public links: ILink[] = links.sort(
    (a, b) => (a.position > b.position && 1) || -1
  );
  private currentLink: Element;

  public constructor(@Inject(DOCUMENT) private document: Document) {}

  public ngAfterViewInit(): void {
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
    const clickedLink = event.target as HTMLLinkElement;
    this.currentLink.classList.remove('active');
    clickedLink.classList.toggle('active');
    this.currentLink = clickedLink;
  }
}
