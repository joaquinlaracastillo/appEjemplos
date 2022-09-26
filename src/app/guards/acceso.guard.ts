import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoGuard implements CanActivate {
  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


     // Obtenemos la hora actual
      const hora = new Date().getHours();

    // Comparamos la hora con el máximo permitido
    // Esto sería en caso de que no queremos que
    // pueda entrar a la página después de las 10:00 pm
    
    if (hora >= 19) {
  
      // Si la hora es mayor o igual redireccionamos al homeComponent
      console.log('no puede entrar déspues de las '+ hora+ ' horas');
       this.router.navigate(['login']);
      // Si devolvemos FALSE no de permitirá el acceso
      return false;
    }

    // Si devolvemos TRUE si se permitirá el acceso.
    return true;
 }
}