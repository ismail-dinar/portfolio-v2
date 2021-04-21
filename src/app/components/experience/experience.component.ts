import { Component, OnInit } from '@angular/core';
import { IExperience } from '../../models/experience.interface';
import { experiences } from '../../data/experiences';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public oddCardClasses: string = 'col-lg-5 order-lg-first order-last';
  public evenCardClasses: string = 'col-lg-5 offset-lg-2 order-last';
  public oddTitleClasses: string =
    'col-lg-5 order-lg-last order-first offset-lg-2 d-flex flex-column justify-content-center align-items-center align-items-lg-start';
  public evenTitleClasses: string =
    'col-lg-5 order-first d-flex flex-column justify-content-center align-items-center align-items-lg-end';
  public readonly experiences: IExperience[] = experiences;
  constructor() {}

  ngOnInit(): void {}
}
