import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import firebase from 'firebase/app';
import { HomeComponent } from './components/home/home.component';
import { NavbarInicioComponent } from './share/navbar-inicio/navbar-inicio.component';
import { NavbarRestComponent } from './share/navbar-rest/navbar-rest.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FooterComponent } from './share/footer/footer.component';
import { InfoSucursalComponent } from './components/info-sucursal/info-sucursal.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlatilloComponent } from './components/platillo/platillo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UneteComponent } from './components/unete/unete.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarInicioComponent,
    NavbarRestComponent,
    SucursalesComponent,
    FooterComponent,
    InfoSucursalComponent,
    MenuComponent,
    PlatilloComponent,
    ContactoComponent,
    UneteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFirestoreModule,ReactiveFormsModule,SwiperModule,
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  ]
})
export class AppModule { }
