import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { VehiculosService } from '../servicios/vehiculos.service';
import { ColorService } from '../servicios/color.service';
import { MarcaService} from '../servicios/marca.service';
import { TipoPlacaService} from '../servicios/tipo-placa.service';
import { TipoGasolinaService} from '../servicios/tipo-gasolina.service';

@Component({
  selector: 'app-vehiculos-form',
  templateUrl: './vehiculos-form.component.html',
  styleUrl: './vehiculos-form.component.css'
})
export class VehiculosFormComponent {
  vehiculo: any = {}; // Para el formulario
  editMode: boolean = false;
  colores: any[] = [];
  marcas: any[] = [];
  combustibles: any[] = [];
  tiposPlaca: any[] = [];

  constructor(private vehiculoService: VehiculosService, private toastr: ToastrService, private router: Router, 
    private colorService: ColorService, private marcaService: MarcaService,  private tipoPlacaService: TipoPlacaService, private tipoGasolinaService: TipoGasolinaService) {}

  ngOnInit(): void {
    // Verifica si hay un objeto placa pasado desde el estado de navegación
    if (history.state.vehiculo) {
      this.vehiculo = history.state.vehiculo; // Carga la placa para editar
      this.editMode = true; // Establece que está en modo edición
    }
    this.loadColores();
    this.loadMarcas();
    this.loadTipoCombustible();
    this.loadTipoPlaca();
  }



  loadColores(): void {
    this.colorService.getAll().subscribe(response =>{
      this.colores = response.data;
    })
  }

  loadMarcas(): void {
    this.marcaService.getAll().subscribe(response =>{
      this.marcas = response.data;
    })
  }

  loadTipoCombustible(): void {
    this.tipoGasolinaService.getAll().subscribe(response =>{
      this.combustibles = response.data;
    })
  }

  loadTipoPlaca(): void {
    this.tipoPlacaService.getAll().subscribe(response =>{
      this.tiposPlaca = response.data;
    })
  }

  saveVehiculo(): void {
    if (this.editMode) {
      this.vehiculoService.editById(this.vehiculo).subscribe(() => {
        this.toastr.success('Tipo de vehiculo editado con éxito');
        this.router.navigate(['/vehiculo']); // Regresa a la tabla
      });
    } else {
      this.vehiculoService.save(this.vehiculo).subscribe(() => {
        this.toastr.success('Nuevo vehiculo guardado con éxito');
        this.router.navigate(['/vehiculo']); // Regresa a la tabla
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/vehiculo']); // Regresa a la tabla
  }

}
