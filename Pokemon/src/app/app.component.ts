import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import {GoogleMap, MapMarker} from "@angular/google-maps";
import {observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';

  center: google.maps.LatLngLiteral = { lat: 35.71407782901707,lng: 139.81065517679536}
  zoom = 8;
  vetbuca : google.maps.MarkerOptions[];
  obsBuche: Observable<Buche>;

  constructor(public http: HttpClient) {
    this.vetbuca = [];

  }

  visbuche = (data: Buche[])=>{

    console.log(data);
    

  }




}
