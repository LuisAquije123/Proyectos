import { Component } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService) {}
  onRegister(): void {
    const newUser = { user: this.username, password: this.password };

    this.userService.registerUser(newUser).subscribe(
      (response: any) => {
        console.log('Registro exitoso:', response);
        // Realiza acciones adicionales después del registro si es necesario
      },
      (error: any) => {
        console.error('Error al registrar:', error);
        // Maneja errores aquí, por ejemplo, muestra un mensaje al usuario
      }
    );
  }

}
