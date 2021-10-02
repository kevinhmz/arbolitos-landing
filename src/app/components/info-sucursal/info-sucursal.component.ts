import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { SucursalesService } from '../../services/sucursales.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-info-sucursal',
  templateUrl: './info-sucursal.component.html',
  styleUrls: ['./info-sucursal.component.css']
})
export class InfoSucursalComponent implements OnInit {
  uid
  suc:any
  factura:boolean= false;
  razon: string = '';
  constructor(private firestore: AngularFirestore,
    private aRoute: ActivatedRoute, private sucursal: SucursalesService) {
    this.uid = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.uid)
   }

  ngOnInit(): void {
    this.getSucursal();
  }

  getSucursal(){
    this.sucursal.getSucursal(this.uid).subscribe(data =>{
      this.suc = [];
      data.forEach((element:any) => {

        this.suc.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })

      });
      console.log(this.suc)
    });
}
fac(){
  console.log(this.factura)
  this.factura=true;
  console.log(this.factura)
}
selectRazon (event: any) {
  //update the ui
  this.razon = event.target.value;
}

sendFak(user:any,last:any,email:any,rfc:any,direccion:any,empresa:any){

    let data ={
      user,
      last,
      email,
      rfc,
      direccion,
      razon:this.razon,
      empresa:empresa
    }

    let prueba =firebase.default.functions().httpsCallable("factura");
      prueba({...data}).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

}


}
