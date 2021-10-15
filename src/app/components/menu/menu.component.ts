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
  tostada:boolean=false
  taco:boolean=false
  molcajete:boolean=false
  ensalada:boolean=false
  machaca:boolean=false
  pulpo:boolean=false
  filete:boolean=false
  camaron:boolean=false

  tost:any
  tacos:any
  molca:any
  salat:any
  oct:any
  Filete:any
  shrimp:any
  constructor(private platillos: PlatillosService) { }

  ngOnInit(): void {
    this.getPlatillo();
    this.getEntrada();
    this.getMarisco();
    this.getSopa();
    this.getFish();
    this.getMeat();
    this.getTostada();
    this.getTaco();
    this.getMolcajete();
    this.getSalat();
    this.getOct();
    this.getFilete();
    this.getCamaron();
  }

    todos(){
      this.todo=true;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=false;
      this.tostada=false;
      this.taco=false;
      this.molcajete=false;
      this.ensalada=false;
      this.machaca=false;
      this.pulpo=false;
      this.camaron=false;
      this.filete=false
    }
    entrada(){
      this.todo=false;
      this.entradas=true;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=false;
      this.tostada=false;
      this.taco=false;
      this.molcajete=false;
      this.ensalada=false;
      this.machaca=false;
      this.pulpo=false;
      this.camaron=false;
      this.filete=false
    }

    sopa(){
      this.todo=false;
      this.entradas=false;
      this.sopas=true;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=false;
      this.tostada=false;
      this.taco=false;
      this.molcajete=false;
      this.ensalada=false;
      this.machaca=false;
      this.pulpo=false;
      this.camaron=false;
      this.filete=false
    }

    marisco(){
      this.todo=false;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=true;
      this.pescado=false;
      this.carnes=false;
      this.tostada=false;
      this.taco=false;
      this.molcajete=false;
      this.ensalada=false;
      this.machaca=false;
      this.pulpo=false;
      this.camaron=false;
      this.filete=false
    }

    pescados(){
      this.todo=false;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=true;
      this.carnes=false;
      this.tostada=false;
      this.taco=false;
      this.molcajete=false;
      this.ensalada=false;
      this.machaca=false;
      this.pulpo=false;
      this.camaron=false;
      this.filete=false
    }

    carne(){
      this.todo=false;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=true;
      this.tostada=false;
      this.taco=false;
      this.molcajete=false;
      this.ensalada=false;
      this.machaca=false;
      this.pulpo=false;
      this.camaron=false;
      this.filete=false
    }
    tostadas(){
      this.todo=false;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=false;
      this.tostada=true;
      this.taco=false;
      this.molcajete=false;
      this.ensalada=false;
      this.machaca=false;
      this.pulpo=false;
      this.camaron=false;
      this.filete=false
    }
    Tacos(){
      this.todo=false;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=false;
      this.tostada=false;
      this.taco=true;
      this.molcajete=false;
      this.ensalada=false;
      this.machaca=false;
      this.pulpo=false;
      this.camaron=false;
      this.filete=false
    }
    Molca(){
      this.todo=false;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=false;
      this.tostada=false;
      this.taco=false;
      this.molcajete=true;
      this.ensalada=false;
      this.machaca=false;
      this.pulpo=false;
      this.camaron=false;
      this.filete=false
    }
    Ensalada(){
      this.todo=false;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=false;
      this.tostada=false;
      this.taco=false;
      this.molcajete=false;
      this.ensalada=true;
      this.machaca=false;
      this.pulpo=false;
      this.camaron=false;
      this.filete=false
    }
    Pulpo(){
      this.todo=false;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=false;
      this.tostada=false;
      this.taco=false;
      this.molcajete=false;
      this.ensalada=false;
      this.machaca=false;
      this.pulpo=true;
      this.camaron=false;
      this.filete=false
    }
    Filetes(){
      this.todo=false;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=false;
      this.tostada=false;
      this.taco=false;
      this.molcajete=false;
      this.ensalada=false;
      this.machaca=false;
      this.pulpo=false;
      this.camaron=false;
      this.filete=true
    }
    Shrimp(){
      this.todo=false;
      this.entradas=false;
      this.sopas=false;
      this.mariscos=false;
      this.pescado=false;
      this.carnes=false;
      this.tostada=false;
      this.taco=false;
      this.molcajete=false;
      this.ensalada=false;
      this.machaca=false;
      this.pulpo=false;
      this.camaron=true;
      this.filete=false;
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
getTostada(){
  this.platillos.getTostadas().subscribe(data =>{
    this.tost = [];
    data.forEach((element:any) => {

      this.tost.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
  });
}
getTaco(){
  this.platillos.getTacos().subscribe(data =>{
    this.tacos = [];
    data.forEach((element:any) => {

      this.tacos.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
  });
}
getMolcajete(){
  this.platillos.getMolca().subscribe(data =>{
    this.molca = [];
    data.forEach((element:any) => {

      this.molca.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
  });
}
getSalat(){
  this.platillos.getEnsalada().subscribe(data =>{
    this.salat = [];
    data.forEach((element:any) => {

      this.salat.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()


      })
    });
  });
}

getOct(){
  this.platillos.getOctopus().subscribe(data =>{
    this.oct = [];
    data.forEach((element:any) => {

      this.oct.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
  });
}
getFilete(){
  this.platillos.getFiletes().subscribe(data =>{
    this.Filete = [];
    data.forEach((element:any) => {

      this.Filete.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
  });
}
getCamaron(){
  this.platillos.getShrimp().subscribe(data =>{
    this.shrimp = [];
    data.forEach((element:any) => {

      this.shrimp.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })
    });
  });
}




}
