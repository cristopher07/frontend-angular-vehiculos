import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // Importar ToastrService
import { MarcaService } from '../../servicios/marca.service';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.css'
})
export class MarcaComponent {
  marcas: any[] = [];
  marca: any = {}; // Para el formulario
  editMode: boolean = false;
  newMode: boolean = false; // Agregado para el nuevo modo

  constructor(private marcaService: MarcaService, private toastr: ToastrService, private router: Router) {}


  ngOnInit(): void {
    this.loadMarcas();
  }

  loadMarcas(): void {
    this.marcaService.getAll().subscribe(response  => {
      this.marcas = response.data; // Cargar placas desde la API
    });
  }

     // Navegar al formulario para nuevo tipo de placa
     openNewMarca(): void {
      this.router.navigate(['marca/form']); // Navega al formulario
    }
  
    edit(marca: any): void {
      this.router.navigate(['marca/form'], { state: { marca } }); // Envía el objeto placa al formulario
    }
  
    delete(idMarca: string): void {
      const confirmDelete = confirm('¿Estás seguro de que deseas eliminar esta marca?');
      if (confirmDelete) {
        this.marcaService.deleteById(idMarca).subscribe(() => {
          this.loadMarcas();
          this.toastr.success('Marca eliminado con éxito');
        });
      }
    }
  
    resetForm(): void {
      this.marca = {};
      this.editMode = false;
      this.newMode = false; // Desactivar modo nuevo
    }

}
