import { Component, OnInit } from '@angular/core';
import { PlatillosService } from '../../services/platillos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  todo:boolean=true
  entradas:boolean=false
  sopas:boolean=false
  mariscos:boolean=false
  pescado:boolean=false
  carnes:boolean=false
  platillo:any;
  Ent:any
  Mar:any
  Soup:any
  pez:any
  meat:any
  constructor(private platillos: PlatillosService) { }

  ngOnInit(): void {
    this.getPlatillo();
    this.getEntrada();
    this.getMarisco();
    this.getSopa();
    this.getFish();
    this.getMeat();
  }

    todos(){
      this.todo=true;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=false;
    }
    entrada(){
      this.todo=false;
      this.entradas=true;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=false;
    }

    sopa(){
      this.todo=false;
      this.entradas=false;
      this.sopas=true;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=false;
    }

    marisco(){
      this.todo=false;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=true;
      this.pescado=false;
      this.carnes=false;
    }

    pescados(){
      this.todo=false;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=true;
      this.carnes=false;
    }

    carne(){
      this.todo=false;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=true;
    }


    getPlatillo(){
      this.platillos.getPlatillos().subscribe(data =>{
        this.platillo = [];
        data.forEach((element:any) => {

          this.platillo.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
      });
  }
  getEntrada(){
    this.platillos.getEntradas().subscribe(data =>{
      this.Ent = [];
      data.forEach((element:any) => {

        this.Ent.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    });
}
getMarisco(){
  this.platillos.getMariscos().subscribe(data =>{
    this.Mar = [];
    data.forEach((element:any) => {

      this.Mar.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
  });
}
getSopa(){
  this.platillos.getSopas().subscribe(data =>{
    this.Soup = [];
    data.forEach((element:any) => {

      this.Soup.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
  });
}
getFish(){
  this.platillos.getPescados().subscribe(data =>{
    this.pez = [];
    data.forEach((element:any) => {

      this.pez.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
  });
}
getMeat(){
  this.platillos.getCarnes().subscribe(data =>{
    this.meat = [];
    data.forEach((element:any) => {

      this.meat.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
  });
}
}
