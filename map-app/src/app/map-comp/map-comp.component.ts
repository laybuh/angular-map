import { Component } from '@angular/core';

@Component({
  selector: 'app-map-comp',
  imports: [],
  templateUrl: './map-comp.component.html',
  styleUrl: './map-comp.component.css'
})
export class MapCompComponent {

  selectedCountryData: any = {
    name: 'Australia',
    capitalCity: 'Canberra',
    region: 'East Asia & Pacific',
    incomeLevel: 'High income',
    longitude: '149.129',
    latitude: '-35.282'
  };
  handleClick(event: any) {
    const clicked = event.target;
    if (clicked.tagName === 'path') {
      const id = clicked.id;
      const name = clicked.getAttribute('name');
      console.log('Clicked:', id, name);
    }
  }

}
