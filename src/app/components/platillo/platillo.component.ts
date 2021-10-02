import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { PlatillosService } from '../../services/platillos.service';
import Swiper, { SwiperOptions } from 'swiper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent implements OnInit {
  uid:any
  pto:any
  ptos: any[] = [];
  constructor(private firestore: AngularFirestore,
    private aRoute: ActivatedRoute,private platillo: PlatillosService) {
      this.uid = this.aRoute.snapshot.paramMap.get('id');
     }
     gallery_config: SwiperConfigInterface = {
      speed: 400,
      observer: true,
      direction: 'horizontal',
      observeParents: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
};
  ngOnInit(): void {


    this.getPtllo();
    this.getPtllos();
    const swiper = new Swiper('.swiper-container', {
      speed: 400,
      observer: true,
      direction: 'horizontal',
      observeParents: true,
      spaceBetween: 30,
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
    swiper.update()
  }
  getPtllo(){
    this.platillo.getPlatillo(this.uid).subscribe(data =>{
      this.pto = [];
      data.forEach((element:any) => {

        this.pto.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })

      });
    });
}

getPtllos(){
  this.platillo.getPlatillos().subscribe(data =>{
    this.ptos = [];
    data.forEach((element:any) => {

      this.ptos.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })

    });
  });
}
}
