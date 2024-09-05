// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/Shared/Header/Header';
import { FooterComponent } from './Components/Shared/Footer/Footer';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // Include other components and modules here
})
export class AppComponent {
  title = 'member-management';
}
