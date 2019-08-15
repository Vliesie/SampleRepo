import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'
import { map, take, tap } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable()
export class DashboardGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.afAuth.user.pipe(
      take(1),
      map(user => !!!user),
      tap(canActivate => {
        if (!canActivate) this.router.navigate(['/dashboard'])
      })
    )
  }
}
