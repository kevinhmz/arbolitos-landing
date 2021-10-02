import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper-container', {
      speed: 400,
      spaceBetween: 100,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  }

}
