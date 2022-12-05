import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioPrincipal!: FormGroup;
  formUsuario!: FormControl;
  formContrasenna!: FormControl;

  constructor(private route: Router) { 

  }

  Pulsar(){
    this.route.navigate(['noticias'])
  }
  ngOnInit(): void {
    this.CrearComponentesFormularios();
    this.CrearFormulario();

    
  }
  CrearFormulario() {
    this.formularioPrincipal= new FormGroup({
        formUsuario: this.formUsuario,
        formContrasenna: this.formContrasenna
    })
  }
  CrearComponentesFormularios() {
    this.formUsuario=new FormControl('',[Validators.required]);
    this.formContrasenna=new FormControl('',[Validators.minLength(8),Validators.required]);
  }

}
