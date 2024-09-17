import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TipoGasolinaService} from '../../servicios/tipo-gasolina.service';

@Component({
  selector: 'app-tipo-gasolina-form',
  templateUrl: './tipo-gasolina-form.component.html',
  styleUrl: './tipo-gasolina-form.component.css'
})
export class TipoGasolinaFormComponent {
  tipoGasolina: any = {}; // Para el formulario
  editMode: boolean = false;

  constructor(private tipoGasolinaService: TipoGasolinaService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    // Verifica si hay un objeto tipoGasolina pasado desde el estado de navegación
    if (history.state.tipoGasolina) {
      this.tipoGasolina = history.state.tipoGasolina; // Carga la tipoGasolina para editar
      this.editMode = true; // Establece que está en modo edición
    }
  }

  savePlaca(): void {
    if (this.editMode) {
      this.tipoGasolinaService.editById(this.tipoGasolina).subscribe(() => {
        this.toastr.success('Tipo de Gasolina editado con éxito');
        this.router.navigate(['/tipo-gasolina']); // Regresa a la tabla
      });
    } else {
      this.tipoGasolinaService.save(this.tipoGasolina).subscribe(() => {
        this.toastr.success('Nuevo tipo de Gasolina guardado con éxito');
        this.router.navigate(['/tipo-gasolina']); // Regresa a la tabla
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/tipo-gasolina']); // Regresa a la tabla
  }
}
