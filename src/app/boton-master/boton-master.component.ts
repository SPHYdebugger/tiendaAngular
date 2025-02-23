import { Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-boton-master',
  standalone: true,
  templateUrl: './boton-master.component.html',
  styleUrl: './boton-master.component.css',
})
export class BotonMasterComponent {
  mostrar: boolean = true;

  @Output() eventoOcultar = new EventEmitter<boolean>();

  toggleMensaje() {
    this.mostrar = !this.mostrar;
    this.eventoOcultar.emit(!this.mostrar);
  }
}
