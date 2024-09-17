import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { TipoPlacaComponent } from './catalogos/tipo-placa/tipo-placa.component';
import { ColorComponent } from './catalogos/color/color.component';
import { TipoGasolinaComponent } from './catalogos/tipo-gasolina/tipo-gasolina.component';
import { MarcaComponent } from './catalogos/marca/marca.component';
import { TipoPlacaFormComponent } from './catalogos/tipo-placa-form/tipo-placa-form.component'; // Importa el nuevo componente
import { ColorFormComponent } from './catalogos/color-form/color-form.component';
import { TipoGasolinaFormComponent   } from './catalogos/tipo-gasolina-form/tipo-gasolina-form.component'
import { MarcaFormComponent } from './catalogos/marca-form/marca-form.component';
import { VehiculosFormComponent } from './vehiculos-form/vehiculos-form.component';

const routes: Routes = [
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'vehiculos/form', component: VehiculosFormComponent },
  { 
    path: 'catalogos', component: CatalogosComponent,
  },
  { path: 'tipo-placa', component: TipoPlacaComponent },
  { path: 'tipo-placa/form', component: TipoPlacaFormComponent }, // Componente de formulario
  { path:  'color/form', component: ColorFormComponent},
  { path: 'color', component: ColorComponent },
  { path: 'tipo-gasolina', component: TipoGasolinaComponent },
  { path: 'tipo-gasolina/form', component: TipoGasolinaFormComponent },
  { path: 'marca', component: MarcaComponent },
  { path: 'marca/form', component: MarcaFormComponent },
  { path: '', redirectTo: '/vehiculos', pathMatch: 'full' }, // Redirige a vehículos al cargar
  { path: '**', redirectTo: '/vehiculos' } // Manejo de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
