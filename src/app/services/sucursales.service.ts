import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private firestore: AngularFirestore) { }



  getSucursales(): Observable<any>{
    return this.firestore.collection('sucursales').snapshotChanges();
  }
  getSucursal(id:any): Observable<any>{
    return this.firestore.collection('sucursales',ref=>ref.where('id','==',id)).snapshotChanges();
  }
}
