import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  selectedWeather = new Subject();
  constructor(private http:HttpClient) {

  }
  getData() {
    return  this.http.get('https://e-commerce-da75d-default-rtdb.firebaseio.com/products.json');
  }

  getWeatherReport() {
    return this.http.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%20City%2CNY?unitGroup=us&key=DU7YAB8M5SW68KSMJUYD2DR5X&contentType=json');
  }

  setWeather(item) {
    this.selectedWeather.next(item);
  }
  getWeather() {
    
    return this.selectedWeather;
  }
}
