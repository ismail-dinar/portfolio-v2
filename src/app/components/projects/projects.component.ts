import { Component, OnInit } from '@angular/core';
import { projects } from '../../data/projects';
import { IProject } from '../../models/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public readonly projects: IProject[] = projects.sort((a, b) => (a.position > b.position && 1) || -1);

  constructor() { }

  ngOnInit(): void {
  }

}
