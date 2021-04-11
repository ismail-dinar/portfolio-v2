import { links } from './../../data/links';
import { AfterViewInit, Component } from '@angular/core';
import { ILink } from 'src/app/models/link.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  public links: ILink[] = links.sort((a,b) => a.position > b.position && 1 || -1);
  private currentLink: Element;

  public ngAfterViewInit(): void {
    this.currentLink = document.querySelector('.navbar-nav .nav-item a.active');
  }

  public setActiveLink(event: Event): void {
    const clickedLink = event.target as HTMLLinkElement;
    this.currentLink.classList.remove('active');
    clickedLink.classList.toggle('active');
    this.currentLink = clickedLink;
  }
}
