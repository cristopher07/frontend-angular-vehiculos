import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // Importar ToastrService
import { TipoGasolinaService} from '../../servicios/tipo-gasolina.service';

@Component({
  selector: 'app-tipo-gasolina',
  templateUrl: './tipo-gasolina.component.html',
  styleUrl: './tipo-gasolina.component.css'
})
export class TipoGasolinaComponent {
  tiposGasolinas: any[] = [];
  tipoGasolina: any = {}; // Para el formulario
  editMode: boolean = false;
  newMode: boolean = false; // Agregado para el nuevo modo

  constructor(private tipoGasolinaService: TipoGasolinaService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.loadtiposGasolinas();
  }

  loadtiposGasolinas(): void {
    this.tipoGasolinaService.getAll().subscribe(response  => {
      this.tiposGasolinas = response.data; // Cargar tiposGasolinas desde la API
    });
  }

   // Navegar al formulario para nuevo tipo de tipoGasolina
   openNewTipotipoGasolina(): void {
    this.router.navigate(['tipo-gasolina/form']); // Navega al formulario
  }

  edit(tipoGasolina: any): void {
    this.router.navigate(['tipo-gasolina/form'], { state: { tipoGasolina } }); // Envía el objeto tipoGasolina al formulario
  }

  delete(idTipoCombustible: string): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este tipo Gasolina?');
    if (confirmDelete) {
      this.tipoGasolinaService.deleteById(idTipoCombustible).subscribe(() => {
        this.loadtiposGasolinas();
        this.toastr.success('Tipo de Gasolina eliminado con éxito');
      });
    }
  }

  resetForm(): void {
    this.tipoGasolina = {};
    this.editMode = false;
    this.newMode = false; // Desactivar modo nuevo
  }
}
