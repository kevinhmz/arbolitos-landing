import { Component, OnInit } from '@angular/core';
import { SucursalesService } from '../../services/sucursales.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {
sucursales:any;
coor:any;
lng:any;
  constructor(private sucursal: SucursalesService, private router: Router) {

   }

  ngOnInit(): void {
    this.getSucursal()
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

        if(this.sucursales.length === 1){
          window.location.reload();

        }
        for(let i=0;i<=this.sucursales.length;i++){
         this.coor =[]
          this.coor= this.sucursales[i].lat
          this.mapa()
        }
      });

  }



  mapa(){


  const loc = { lat: 23.634501, lng: -102.55278399999997}

           let   map = new google.maps.Map(document.getElementById("map")!, {
                center: loc,
                zoom: 4,
                gestureHandling: "cooperative",
              })
              var a= [-102.52,-108]
              for(let i=0;i<=this.sucursales.length;i++){
                this.coor =[]
                 this.coor= this.sucursales[i].lat
                 this.lng =[]
                 this.lng=this.sucursales[i].lng
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
}
