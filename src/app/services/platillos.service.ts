import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor(private firestore: AngularFirestore) { }

  getPlatillos(): Observable<any>{
    return this.firestore.collection('platillos').snapshotChanges();
  }
  getPlatillo(id:any): Observable<any>{
    return this.firestore.collection('platillos',ref=>ref.where('id','==',id)).snapshotChanges();
  }
  getEntradas(): Observable<any>{
    return this.firestore.collection('platillos',ref=>ref.where('categoria','==','entradas')).snapshotChanges();
  }

  getMariscos(): Observable<any>{
    return this.firestore.collection('platillos',ref=>ref.where('categoria','==','mariscos')).snapshotChanges();
  }
  getSopas(): Observable<any>{
    return this.firestore.collection('platillos',ref=>ref.where('categoria','==','sopas')).snapshotChanges();
  }
  getPescados(): Observable<any>{
    return this.firestore.collection('platillos',ref=>ref.where('categoria','==','pescado')).snapshotChanges();
  }

  getCarnes(): Observable<any>{
    return this.firestore.collection('platillos',ref=>ref.where('categoria','==','carnes')).snapshotChanges();
  }
}
