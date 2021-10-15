import { Component, OnInit } from '@angular/core';
import { SucursalesService } from '../../services/sucursales.service';
import * as firebase from 'firebase';
import * as $ from 'jquery';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  empresa:any
  constructor(private sucursal: SucursalesService) { }
  sucursales:any;
  ngOnInit(): void {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    this.getSucursal();
  }

  getSucursal(){
    this.sucursal.getSucursales().subscribe(data =>{
      this.sucursales = [];
      data.forEach((element:any) => {

        this.sucursales.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    });
}

selectEmpresa (event: any) {
  //update the ui
  this.empresa = event.target.value;
  console.log(this.empresa)
}

sendContacto(user:any,last:any,email:any,asunto:any,comentario:any){
  document.getElementById("openModal")!.click();
  let data ={
      user,
      last,
      email,
      empresa:this.empresa,
      asunto,
      comentario,
    }

    let prueba =firebase.default.functions().httpsCallable("contacto");
      prueba({...data}).then(
  (res) => {
    console.log(res);
    document.getElementById("openModal")!.click();
  },
  (err) => {
    console.log(err);
  }
);

}

}
