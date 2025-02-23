import { Component } from '@angular/core';

@Component({
  selector: 'app-cambiar-color',
  imports: [],
  templateUrl: './cambiar-color.component.html',
  styleUrl: './cambiar-color.component.css'
})
export class CambiarColorComponent {
  colorActual: string = 'black';

  cambiarColor(nuevoColor: string) {
    this.colorActual = nuevoColor;
  }
}
