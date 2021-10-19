import { Component, OnInit } from '@angular/core';
import { SucursalesService } from '../../services/sucursales.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-unete',
  templateUrl: './unete.component.html',
  styleUrls: ['./unete.component.css']
})
export class UneteComponent implements OnInit {
  sucursales:any;
  empresa:any
  school:any
  interest:any
  constructor(private sucursal: SucursalesService) { }

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

selectEmpresa (event: any) {
  //update the ui
  this.empresa = event.target.value;
  console.log(this.empresa)
}
selectSchool (event: any) {
  //update the ui
  this.school = event.target.value;
}
selectInt (event: any) {
  //update the ui
  this.interest = event.target.value;
}

sendHire(user:any,last:any,email:any,tel:any,cp:any,years:any,perfil:any){
  document.getElementById("openModal")!.click();
  let data ={
      user,
      last,
      email,
      tel,
      cp,
      years,
      school:this.school,
      interest:this.interest,
      perfil,
      empresa:this.empresa,
    }

    let prueba =firebase.functions().httpsCallable("hire");
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
