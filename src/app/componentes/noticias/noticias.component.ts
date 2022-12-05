import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelo/noticias';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias!: Noticia[]

  constructor(private servicio: ServicioService) { 
    this.noticias=servicio.noticiasArray();
  }

  ngOnInit(): void {
  }

}
