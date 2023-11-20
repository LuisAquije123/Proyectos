// toolbar.component.ts
import { Component } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private authService: AuthenticationService) {}

  onLogout(): void {
    this.authService.logout();
  }

  getLoggedInUser(): string | null {
    return this.authService.getLoggedInUser();
  }
}
