import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-formulario-noticias',
  templateUrl: './formulario-noticias.component.html',
  styleUrls: ['./formulario-noticias.component.css']
})
export class FormularioNoticiasComponent implements OnInit {

  formNoticia!: FormGroup;
  formTitulo!: FormControl;
  formContenido!: FormControl;
  constructor(private servicio: ServicioService) { }

  ngOnInit(): void {
    this.crearComponentesFormulario();
    this.crearFormulario();
  }

  crearComponentesFormulario(){
      this.formTitulo=new FormControl('',[Validators.required]);
      this.formContenido=new FormControl('',[Validators.required]);
  }

  crearFormulario(){
      this.formNoticia= new FormGroup({
        formTitulo: this.formTitulo,
        formContenido: this.formContenido
      })
  }

  AgregarNoticia(titulo: HTMLInputElement,contenido: HTMLInputElement) {
    this.servicio.agregarNoticias(titulo.value,contenido.value,new Date());
    titulo.value="";
    contenido.value="";
    this.formNoticia.reset();
  }
}
