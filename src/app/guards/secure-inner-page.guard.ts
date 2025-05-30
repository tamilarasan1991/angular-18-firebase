import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const SecureInnerPage: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log("authService.isLoggedIn: " + authService.isLoggedIn);
  if (authService.isLoggedIn === true) {
    //router.navigate(['/dashboard']);
  }

  return true;
};
