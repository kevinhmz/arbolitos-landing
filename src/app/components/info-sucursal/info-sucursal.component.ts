import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { SucursalesService } from '../../services/sucursales.service';
import * as firebase from 'firebase';
import * as $ from 'jquery';
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
  coor:any;
  lng:any;
  constructor(private firestore: AngularFirestore,
    private aRoute: ActivatedRoute, private sucursal: SucursalesService,private router: Router) {
    this.uid = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.uid)
   }

  ngOnInit(): void {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
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
     this.mapa()
    });
}
fac(){
  this.factura=true;
}
selectRazon (event: any) {
  //update the ui
  this.razon = event.target.value;
}

sendFak(user:any,last:any,email:any,rfc:any,direccion:any,empresa:any){
  document.getElementById("openModal")!.click();
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
    document.getElementById("openModal")!.click();
  },
  (err) => {
    console.log(err);
  }
);

}

mapa(){
console.log(this.suc[0].lat)


    const loc = { lat: 23.634501, lng: -102.55278399999997}
              console.log(loc)

             let   map = new google.maps.Map(document.getElementById("map")!, {
                  center: loc,
                  zoom: 4,
                  gestureHandling: "cooperative",
                })
                var a= [-102.52,-108]
                  this.coor =[]
                   this.coor= this.suc[0].lat
                   this.lng =[]
                   this.lng=this.suc[0].lng
                   console.log(this.coor)
                   const location ={lat: this.coor, lng: this.lng}
                   const iconBase =
                   "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

                 const icons: Record<string, { icon: string }> = {
                   parking: {
                     icon:  "arrRight.png",
                   },
                 };
                   const marker = new google.maps.Marker({
                     position: location,
                     map: map,
                     animation:google.maps.Animation.DROP,

                   });
                   marker.addListener("click", () => {
                     map.setZoom(14);
                     map.setCenter(marker.getPosition() as google.maps.LatLng);
                   });


    }
}
