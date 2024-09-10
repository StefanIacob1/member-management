// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/Shared/Header/Header';
import { FooterComponent } from './Components/Shared/Footer/Footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true, // Indicates this is a standalone component
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // Import other components
})
export class AppComponent {
  title = 'member-management';
}
