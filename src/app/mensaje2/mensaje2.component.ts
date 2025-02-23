import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje2',
  imports: [],
  templateUrl: './mensaje2.component.html',
  styleUrl: './mensaje2.component.css'
})
export class Mensaje2Component {

  mensaje: string = "¡Escribe algo en el input!";

  actualizarMensaje(event: Event) {
    const input = event.target as HTMLInputElement;
    this.mensaje = input.value;
    if (input.value==""){
      this.mensaje="¡Escribe algo en el input!";
    }
  }

  limpiarMensaje(input: HTMLInputElement) {
    input.value = "";
    this.mensaje = "¡Escribe algo en el input!";
  }
}
