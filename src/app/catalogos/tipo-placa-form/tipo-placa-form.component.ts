import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoPlacaService } from '../../servicios/tipo-placa.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tipo-placa-form',
  templateUrl: './tipo-placa-form.component.html',
  styleUrl: './tipo-placa-form.component.css'
})
export class TipoPlacaFormComponent {
  placa: any = {}; // Para el formulario
  editMode: boolean = false;

  constructor(private placaService: TipoPlacaService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    // Verifica si hay un objeto placa pasado desde el estado de navegación
    if (history.state.placa) {
      this.placa = history.state.placa; // Carga la placa para editar
      this.editMode = true; // Establece que está en modo edición
    }
  }

  savePlaca(): void {
    if (this.editMode) {
      this.placaService.editById(this.placa).subscribe(() => {
        this.toastr.success('Tipo de placa editado con éxito');
        this.router.navigate(['/tipo-placa']); // Regresa a la tabla
      });
    } else {
      this.placaService.save(this.placa).subscribe(() => {
        this.toastr.success('Nuevo tipo de placa guardado con éxito');
        this.router.navigate(['/tipo-placa']); // Regresa a la tabla
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/tipo-placa']); // Regresa a la tabla
  }
}
