import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { InfoSucursalComponent } from './components/info-sucursal/info-sucursal.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlatilloComponent } from './components/platillo/platillo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UneteComponent } from './components/unete/unete.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'inicio', component: HomeComponent},
  { path: 'sucursales', component: SucursalesComponent},
  { path: 'Sucursal/:id', component: InfoSucursalComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'Platillo/:id', component: PlatilloComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'unete', component: UneteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
