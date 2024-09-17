import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoPlacaService } from '../../servicios/tipo-placa.service';
import { ToastrService } from 'ngx-toastr'; // Importar ToastrService

@Component({
  selector: 'app-tipo-placa',
  templateUrl: './tipo-placa.component.html',
  styleUrl: './tipo-placa.component.css'
})
export class TipoPlacaComponent implements OnInit {
  placas: any[] = [];
  placa: any = {}; // Para el formulario
  editMode: boolean = false;
  newMode: boolean = false; // Agregado para el nuevo modo

  constructor(private tipoPlacaService: TipoPlacaService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.loadPlacas();
  }

  loadPlacas(): void {
    this.tipoPlacaService.getAll().subscribe(response  => {
      this.placas = response.data; // Cargar placas desde la API
    });
  }

   // Navegar al formulario para nuevo tipo de placa
   openNewTipoPlaca(): void {
    this.router.navigate(['/tipo-placa/form']); // Navega al formulario
  }

  edit(placa: any): void {
    this.router.navigate(['/tipo-placa/form'], { state: { placa } }); // Envía el objeto placa al formulario
  }

  delete(idTipoPlaca: string): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar esta placa?');
    if (confirmDelete) {
      this.tipoPlacaService.deleteById(idTipoPlaca).subscribe(() => {
        this.loadPlacas();
        this.toastr.success('Tipo de placa eliminado con éxito');
      });
    }
  }

  resetForm(): void {
    this.placa = {};
    this.editMode = false;
    this.newMode = false; // Desactivar modo nuevo
  }
}
