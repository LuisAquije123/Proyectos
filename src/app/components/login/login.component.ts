import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onLogin(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Simulación de lógica de autenticación exitosa
    if (this.authService.login(this.username, this.password)) {
      console.log('Usuario logueado');
      this.router.navigate(['/']); // Redirige a la página principal después de iniciar sesión
    } else {
      console.log('Error: Usuario no encontrado o contraseña incorrecta');
    }
  }
}
