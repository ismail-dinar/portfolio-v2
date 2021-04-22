import { Component, OnInit } from '@angular/core';
import { technologies } from '../../data/technologies';
import { ITechnology } from '../../models/technologies.interface';
import SwiperCore, {
  Autoplay,
} from 'swiper/core';

SwiperCore.use([Autoplay]);
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  public technologies: ITechnology[] = technologies;

  constructor() { }

  ngOnInit(): void {
  }

}
