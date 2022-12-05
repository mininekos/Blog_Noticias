import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-noticias',
  templateUrl: './formulario-noticias.component.html',
  styleUrls: ['./formulario-noticias.component.css']
})
export class FormularioNoticiasComponent implements OnInit {
  formNoticia!: FormGroup;
  formTitulo!: FormControl;
  formContenido!: FormControl;

  constructor() { }

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
}
