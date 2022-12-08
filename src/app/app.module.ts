import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EstiloComponent } from './componentes/estilo/estilo.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { ListaNoticasComponent } from './componentes/noticias/lista-noticas/lista-noticas.component';
import { FormularioNoticiasComponent } from './componentes/noticias/formulario-noticias/formulario-noticias.component';
import { ConvertirAMayusculasPipe } from './Pipes/convertir-amayusculas.pipe';
import { DetalleNoticiasComponent } from './componentes/detalle-noticias/detalle-noticias.component';


@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    LoginComponent,
    NoticiasComponent,
    ListaNoticasComponent,
    FormularioNoticiasComponent,
    ConvertirAMayusculasPipe,
    DetalleNoticiasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
