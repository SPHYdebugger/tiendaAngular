import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MensajeComponent } from "./mensaje/mensaje.component";
import { Mensaje2Component } from "./mensaje2/mensaje2.component";
import { BotonMasterComponent } from "./boton-master/boton-master.component";
import { CambiarColorComponent } from './cambiar-color/cambiar-color.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MensajeComponent, Mensaje2Component, BotonMasterComponent, NgIf, CambiarColorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tiendaAngular';
  ocultarTodo: boolean = false;

  manejarOcultar(event: boolean) {
    this.ocultarTodo = event;
  }
  
}
