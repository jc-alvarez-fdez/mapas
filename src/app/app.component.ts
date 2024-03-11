import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapScreenComponent } from './_pages/map-screen/map-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MapScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mapas';
}
