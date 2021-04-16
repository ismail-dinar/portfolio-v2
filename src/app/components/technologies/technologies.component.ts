import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
