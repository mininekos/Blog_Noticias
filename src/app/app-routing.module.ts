import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleNoticiasComponent } from './componentes/detalle-noticias/detalle-noticias.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { IniciarSesionGuard } from './Guards/iniciar-sesion.guard';

const routes: Routes = [
  {path:'', redirectTo:'inicio',pathMatch:'full'},
  {path:'inicio',component: LoginComponent},
  {path:'noticias', component: NoticiasComponent, canActivate: [IniciarSesionGuard]},
  {path:'detallesNoticias/:id',component: DetalleNoticiasComponent, canActivate: [IniciarSesionGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
