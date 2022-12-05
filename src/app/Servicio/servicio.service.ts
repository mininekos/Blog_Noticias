import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Noticia } from '../modelo/noticias';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  noticias: Noticia[]
  noticias$: BehaviorSubject<Noticia[]>
  constructor() { 
    this.noticias=[
      new Noticia("Titulo","contenido",new Date())
    ]

    this.noticias$=new BehaviorSubject<Noticia[]>(this.noticias);
  }

  agregarNoticias(titulo: string, contenido: string, fecha: Date){
    this.noticias.unshift(new Noticia(titulo, contenido, fecha))
  }

  noticiasArray(){
    return this.noticias
  }

  borrarNoticia(noticia: Noticia){
    this.noticias=this.noticias.filter(n=>n.getid() != noticia.getid());
  }
}
