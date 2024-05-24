import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import * as geojson from 'geojson';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private map: any;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [44.815733, 20.495854],
      zoom: 10,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(this.map);

    const icon = L.icon({
      iconSize: [38, 38],
      iconUrl: 'assets/images/love.png',
    });
    const geojsonPoint: geojson.Point = {
      coordinates: [20.495854, 44.815733],
      type: 'Point',
    };
    const marker = L.geoJSON(geojsonPoint, {
      pointToLayer: (point, latlon) => {
        return L.marker(latlon, { icon: icon });
      },
    });
    //Add popup message
    marker.bindPopup('Я верю в твои идеи и сильно люблю!');
    marker.addTo(this.map);
  }

  private openPopup(layer: any, feature: any): void {
    const popupContent = `
      <strong>Country:</strong> ${feature.properties.name}<br>
      <form>
        <label for="info">Info:</label>
        <textarea id="info" name="info"></textarea><br>
        <button type="button" onclick="saveData()">Save</button>
      </form>
    `;
    layer.bindPopup(popupContent).openPopup();
  }
}
