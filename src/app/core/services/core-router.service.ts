// ang
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

interface RouteSegments {
  [key: number]: string
}

// todo - function for check unique values
export enum E_ROUTE_NAMES {
  DEFAULT = '/',
  HOME = 'home',
  GUEST = 'guest',
  COMPLETE_PROFILE = 'complete-profile',
  SHOPPINGS = 'shoppings',
  LOGIN = 'login',
  REGISTRATION = 'registration',
  NOT_FOUND = '404',
}

interface Routes {
  readonly DEFAULT: RouteSegments;
  readonly COMPLETE_PROFILE: RouteSegments;
  readonly SHOPPINGS: RouteSegments;
  readonly LOGIN: RouteSegments;
  readonly REGISTRATION: RouteSegments;
}

export const APP_ROUTES: Routes = {
  DEFAULT: [E_ROUTE_NAMES.DEFAULT],
  COMPLETE_PROFILE: [E_ROUTE_NAMES.HOME, E_ROUTE_NAMES.COMPLETE_PROFILE],
  SHOPPINGS: [E_ROUTE_NAMES.HOME, E_ROUTE_NAMES.SHOPPINGS],
  LOGIN: [E_ROUTE_NAMES.GUEST, E_ROUTE_NAMES.LOGIN],
  REGISTRATION: [E_ROUTE_NAMES.GUEST, E_ROUTE_NAMES.REGISTRATION]
}

@Injectable()
export class CoreRouterService {

  constructor(private _router: Router, private _ngZone: NgZone) {}

  goToDefaultPage(): void {
    this._navigate(['/']);
  }

  goToCompleteProfilePage(): void {
    this._navigate(APP_ROUTES.COMPLETE_PROFILE);
  }

  goToShoppings(): void {
    this._navigate(APP_ROUTES.SHOPPINGS);
  }

  goToLoginPage(): void {
    this._navigate(APP_ROUTES.LOGIN);
  }

  goToRegistrPage(): void {
    this._navigate(APP_ROUTES.REGISTRATION);
  }

  private _navigate(segments: RouteSegments): void {
    this._ngZone.run(() => {
      this._router.navigate(segments as any[]);
    })
  }
}
