import { Component } from '@angular/core';
import { projects } from '../../data/projects';
import { IProject } from '../../models/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public readonly projects: IProject[] = projects.sort(
    (a, b) => (a.position > b.position && 1) || -1
  );
}
