import { Component } from '@angular/core';
import { person } from 'src/app/data/person';
import { IPerson } from 'src/app/models/person.interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  public readonly person: IPerson = person;
  public fullName: string;
  public constructor() {
    this.fullName = this.person.firstName + ' ' + this.person.lastName;
  }
}
