import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Noticia } from 'src/app/modelo/noticias';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-lista-noticas',
  templateUrl: './lista-noticas.component.html',
  styleUrls: ['./lista-noticas.component.css']
})
export class ListaNoticasComponent implements OnInit {

  @Input() noticia!: Noticia

  constructor(private servicio: ServicioService, private router: Router) { }

  ngOnInit(): void {

  }

  eliminarNoticia(){
    this.servicio.borrarNoticia(this.noticia);
  }

  mostrarDetalles(){
    this.router.navigate(['detallesNoticias',this.noticia.getid()])
  }
}
