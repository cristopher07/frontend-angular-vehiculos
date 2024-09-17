import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; // Importar ToastrService
import { Router } from '@angular/router';
import { VehiculosService } from '../servicios/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.css'
})
export class VehiculosComponent {
  vehiculos: any[] = [];
  vehiculo: any = {}; // Para el formulario
  editMode: boolean = false;
  newMode: boolean = false; // Agregado para el nuevo modo

  constructor(private vehiculoService: VehiculosService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.loadVehiculos();
  }


  loadVehiculos(): void {
    this.vehiculoService.getAll().subscribe(response  => {
      this.vehiculos = response.data; // Cargar placas desde la API
    });
  }

    // Navegar al formulario para nuevo tipo de placa
    openNewVehiculo(): void {
      this.router.navigate(['/vehiculos/form']); // Navega al formulario
    }

    edit(vehiculo: any): void {
      this.router.navigate(['/vehiculos/form'], { state: { vehiculo } }); // Envía el objeto placa al formulario
    }

    delete(idVehiculo: string): void {
      const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este vehículo?');
      if (confirmDelete) {
        this.vehiculoService.deleteById(idVehiculo).subscribe(() => {
          this.loadVehiculos();
          this.toastr.success('Vehículo eliminado con éxito');
        });
      }
    }

    resetForm(): void {
      this.vehiculo = {};
      this.editMode = false;
      this.newMode = false; // Desactivar modo nuevo
    }

}
