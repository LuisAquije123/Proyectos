import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedInUserKey = 'loggedInUser';
  login(username: string, password: string): boolean {
    // Lógica de autenticación
    // ...

    // Si la autenticación es exitosa, almacena el nombre de usuario
    localStorage.setItem(this.loggedInUserKey, username);
    return true;
  }

  logout(): void {
    // Limpiar la información de la sesión del usuario al cerrar sesión
    localStorage.removeItem(this.loggedInUserKey);
  }

  getLoggedInUser(): string | null {
    // Recuperar el nombre de usuario del almacenamiento local
    return localStorage.getItem(this.loggedInUserKey);
  }
}
