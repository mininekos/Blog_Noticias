import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Noticias } from '../modelo/noticias';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  noticias: Noticias[]
  noticias$: BehaviorSubject<Noticias[]>
  constructor() { 
    this.noticias=[
      new Noticias("Titulo","contenido",new Date())
    ]

    this.noticias$=new BehaviorSubject<Noticias[]>(this.noticias);
  }
}
