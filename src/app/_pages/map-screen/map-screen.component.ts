import { Component } from '@angular/core';
import { PlacesService } from '../../_services/places.service';

@Component({
  selector: 'app-map-screen',
  standalone: true,
  imports: [],
  templateUrl: './map-screen.component.html',
  styleUrl: './map-screen.component.css'
})
export class MapScreenComponent {

  constructor (private _placesService: PlacesService) {

  }

}
