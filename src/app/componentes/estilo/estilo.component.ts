import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-estilo',
  templateUrl: './estilo.component.html',
  styleUrls: ['./estilo.component.css']
})
export class EstiloComponent implements OnInit {

  oscuro!: Boolean;
  @Output() cambiarFondo = new EventEmitter<Boolean>();

  constructor() { 
    
  }

  ngOnInit(): void {
    this.oscuro=false
  }

    cambiarEstado(){
      this.oscuro=!this.oscuro
      this.cambiarFondo.emit(this.oscuro)
      
    }
}
