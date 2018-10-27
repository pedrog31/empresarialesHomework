import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMercadolibreService {
  API_URL = 'https://api.mercadolibre.com/sites/';
  TOKEN = 'APP_USR-2463149532032416-102619-e14abffc0e4418554da06a8adbca1501-370377130';

  constructor(private http: HttpClient) { }

  obtenerSitios(): Observable<any> {
    const url = `${this.API_URL}`;
    return this.http.get<any>(url).pipe();
  }

  obtenerProductos(sitio: string, query: string): Observable<any> {
    const url = `${this.API_URL}${sitio}/search?q=${query}&access_token=${this.TOKEN}`;
    return this.http.get<any>(url).pipe();
  }

  obtenerCategorias(sitio: string): Observable<any> {
    const url = `${this.API_URL}${sitio}/categories`;
    return this.http.get<any>(url).pipe();
  }

  obtenerProductosPorCategoria(sitio: string, categoria: string) {
    const url = `${this.API_URL}${sitio}/hot_items/search?limit=15&category=${categoria}&access_token=${this.TOKEN}`;
    return this.http.get<any>(url).pipe();
  }
}
