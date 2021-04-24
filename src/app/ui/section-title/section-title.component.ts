import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
})
export class SectionTitleComponent {
  @Input() public title: string;
  @Input() public subtitle: string;
}
