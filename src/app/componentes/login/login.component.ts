import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioPrincipal!: FormGroup;
  formUsuario!: FormControl;
  formContrasenna!: FormControl;

  constructor(private route: Router,private servicio: ServicioService) { 

  }

  Pulsar(){
    this.route.navigate(['noticias']);
    this.servicio.setInicioSesion$(true);
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
