import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/data/person';
import { IPerson } from 'src/app/models/person.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public readonly person: IPerson = person;
}
