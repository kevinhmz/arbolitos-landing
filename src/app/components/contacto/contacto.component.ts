import { Component, OnInit } from '@angular/core';
import { SucursalesService } from '../../services/sucursales.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private sucursal: SucursalesService) { }
  sucursales:any;
  ngOnInit(): void {
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

}
