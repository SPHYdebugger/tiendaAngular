import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  imports: [],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css',
  standalone: true
})
export class MensajeComponent {
  mensaje: string = "¡Hola, bienvenido a Angular!";

  cambiarMensaje(){
    this.mensaje="Has pulsado al botón"
  }

  reiniciarMensaje(){
    this.mensaje="¡Hola, bienvenido a Angular!";
  }
}
