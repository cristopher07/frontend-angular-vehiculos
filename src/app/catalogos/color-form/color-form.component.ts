import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColorService } from '../../servicios/color.service';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrl: './color-form.component.css'
})
export class ColorFormComponent {
 color: any = {};
 editMode: boolean = false;

 constructor(private colorService: ColorService, private toastr: ToastrService, private router: Router) {}

 ngOnInit(): void {
  if (history.state.color) {
    this.color = history.state.color; // Carga el color para editar
    this.editMode = true; // Establece que está en modo edición
  }
}

  saveColor(): void {
    if (this.editMode) {
      this.colorService.editById(this.color).subscribe(()=> {
        this.toastr.success('Color editado con éxito');
        this.router.navigate(['/color']); // Regresa a la tabla
      });
    } else {
      this.colorService.save(this.color).subscribe(() => {
        this.toastr.success('Nuevo color guardado con éxito');
        this.router.navigate(['/color']); // Regresa a la tabla
      })
    }
  }

  cancel(): void {
    this.router.navigate(['/color']); // Regresa a la tabla
  }
}

