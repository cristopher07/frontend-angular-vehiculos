import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { TipoPlacaComponent } from './catalogos/tipo-placa/tipo-placa.component';
import { ColorComponent } from './catalogos/color/color.component';
import { TipoGasolinaComponent } from './catalogos/tipo-gasolina/tipo-gasolina.component';
import { MarcaComponent } from './catalogos/marca/marca.component';

// Cliente HTTP
import { provideHttpClient } from '@angular/common/http';
import { TipoPlacaFormComponent } from './catalogos/tipo-placa-form/tipo-placa-form.component';
import { ColorFormComponent } from './catalogos/color-form/color-form.component';
import { TipoGasolinaFormComponent } from './catalogos/tipo-gasolina-form/tipo-gasolina-form.component';
import { MarcaFormComponent } from './catalogos/marca-form/marca-form.component';
import { VehiculosFormComponent } from './vehiculos-form/vehiculos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    CatalogosComponent,
    TipoPlacaComponent,
    ColorComponent,
    TipoGasolinaComponent,
    MarcaComponent,
    TipoPlacaFormComponent,
    ColorFormComponent,
    TipoGasolinaFormComponent,
    MarcaFormComponent,
    VehiculosFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // Importar BrowserAnimationsModule
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right', // Posición del toast en la parte inferior izquierda
      timeOut: 3000, // Duración en milisegundos
      preventDuplicates: true, // Evitar duplicados
      closeButton: true, // Mostrar botón de cerrar
      progressBar: true, // Mostrar barra de progreso
    }),
  ],
  providers: [provideHttpClient()], // Registramos el cliente HTTP
  bootstrap: [AppComponent]
})
export class AppModule { }
