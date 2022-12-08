import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IniciarSesionGuard } from '../Guards/iniciar-sesion.guard';
import { Noticia } from '../modelo/noticias';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  noticias: Noticia[]
  noticias$: BehaviorSubject<Noticia[]>
  inicioSesion$: BehaviorSubject<Boolean>
  constructor() { 
    this.noticias=[
      new Noticia("Titulo","contenido",new Date())
    ]

    this.noticias$=new BehaviorSubject<Noticia[]>(this.noticias);
    this.inicioSesion$=new BehaviorSubject<Boolean>(false);
  }

  getInicioSesion$(){
    return this.inicioSesion$.asObservable();
  }

  setInicioSesion$(estado:Boolean){
    this.inicioSesion$.next(estado)
  }

  noticiasArray(){
    return [...this.noticias]
  }

  noticiasArray$(){
    return this.noticias$.asObservable();
  }

  agregarNoticias(titulo: string, contenido: string, fecha: Date){
    this.noticias.unshift(new Noticia(titulo, contenido, fecha))
    this.noticias$.next([...this.noticias]);
  }


  borrarNoticia(noticia: Noticia){
    this.noticias=this.noticias.filter(n=>n.getid() != noticia.getid());
    this.noticias$.next([...this.noticias]);
  }

}
