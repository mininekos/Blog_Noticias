import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioService } from '../Servicio/servicio.service';

@Injectable({
  providedIn: 'root'
})
export class IniciarSesionGuard implements CanActivate {

  inicioSesion!: Boolean
  
  constructor(private servicio: ServicioService,private router: Router){
    this.servicio.inicioSesion$.subscribe(ini=> this.inicioSesion=ini)
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.inicioSesion){

        return true
      }
      
      this.router.navigate(['/inicio'])
      return false;



  }
  
}
