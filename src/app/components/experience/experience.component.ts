import { Component } from '@angular/core';
import { IExperience } from '../../models/experience.interface';
import { experiences } from '../../data/experiences';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  public oddCardClasses: string = 'order-lg-first';
  public evenCardClasses: string = 'offset-lg-2';
  public oddTitleClasses: string =
    'order-lg-last offset-lg-2 align-items-lg-start';
  public evenTitleClasses: string = 'align-items-lg-end';
  public readonly experiences: IExperience[] = experiences;
}
