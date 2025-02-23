import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajeComponent } from "./mensaje/mensaje.component";
import { Mensaje2Component } from "./mensaje2/mensaje2.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MensajeComponent, Mensaje2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tiendaAngular';
}
