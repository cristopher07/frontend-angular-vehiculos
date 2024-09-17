import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; // Importar ToastrService
import { Router } from '@angular/router';
import { ColorService } from '../../servicios/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent {
  colores: any[] = [];
  color: any = {};  
  editMode: boolean = false;
  newMode:  boolean = false;

  constructor(private colorService: ColorService, private toastr: ToastrService, private router: Router) {}
  
  ngOnInit(): void {
    this.loadColores();
  }

  // Navegar al formulario para nuevo tipo de placa
  openNewColor(): void {
    this.router.navigate(['/color/form']); // Navega al formulario
  }

  edit(color: any): void {
    this.router.navigate(['/color/form'], { state: { color } }); // Envía el objeto placa al formulario
  }

    loadColores(): void {
      this.colorService.getAll().subscribe(response =>{
        this.colores = response.data;
      })
    }

    delete(idColor: string): void {
      const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este color?');
      if (confirmDelete) {
        this.colorService.deleteById(idColor).subscribe(() => {
          this.loadColores();
          this.toastr.success('Color eliminado con éxito');
        });
      }
    }

    resetForm(): void {
      this.color = {};
      this.editMode = false;
      this.newMode = false; // Desactivar modo nuevo
    }
  
}
