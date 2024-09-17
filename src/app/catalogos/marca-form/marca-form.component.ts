import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MarcaService } from '../../servicios/marca.service';


@Component({
  selector: 'app-marca-form',
  templateUrl: './marca-form.component.html',
  styleUrl: './marca-form.component.css'
})
export class MarcaFormComponent {

  marca: any = {}; // Para el formulario
  editMode: boolean = false;
  constructor(private marcaService: MarcaService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    // Verifica si hay un objeto  pasado desde el estado de navegación
    if (history.state.marca) {
      this.marca = history.state.marca; // Carga la marca para editar
      this.editMode = true; // Establece que está en modo edición
    }
  }

  savePlaca(): void {
    if (this.editMode) {
      this.marcaService.editById(this.marca).subscribe(() => {
        this.toastr.success('Marca editada con éxito');
        this.router.navigate(['/marca']); // Regresa a la tabla
      });
    } else {
      this.marcaService.save(this.marca).subscribe(() => {
        this.toastr.success('Nuevo Marca guardada con éxito');
        this.router.navigate(['/marca']); // Regresa a la tabla
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/marca']); // Regresa a la tabla
  }

}
