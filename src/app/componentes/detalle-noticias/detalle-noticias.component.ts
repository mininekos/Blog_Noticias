import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/modelo/noticias';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-detalle-noticias',
  templateUrl: './detalle-noticias.component.html',
  styleUrls: ['./detalle-noticias.component.css']
})
export class DetalleNoticiasComponent implements OnInit {

  noticia!: Noticia
  idNoticia!: number
  constructor(private servicio: ServicioService, private route: ActivatedRoute) { 
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(params=> {this.idNoticia=params['id']
          this.noticia=this.servicio.noticiasArray()[this.idNoticia]
    })
    
    
  }

}
