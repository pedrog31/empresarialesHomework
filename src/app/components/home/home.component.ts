import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ApiMercadolibreService} from '../../service/api-mercadolibre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formBusqueda: FormGroup;
  cargando: boolean;
  sitios: any[];
  sitio: string;
  productos: any[];

  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private apiMercadolibreService: ApiMercadolibreService) {
    this.createForms();
  }

  ngOnInit() {
    this.apiMercadolibreService.obtenerSitios().subscribe(value => {
      this.sitios = value;
    });
  }

  buscarEstudiante() {
    this.cargando = true;
    this.productos = undefined;
    this.sitio = this.formBusqueda.get('sitio').value;
    const producto: string = this.formBusqueda.get('producto').value;
    console.log(this.sitio);
    console.log(producto);
    if (producto.length > 0) {
      this.apiMercadolibreService.obtenerProductos(this.sitio, producto).subscribe(value => {
        this.productos = value.results;
        console.log(this.productos)
        this.cargando = false;
      });
    }
  }

  private createForms() {
    this.formBusqueda = this.fb.group({
      sitio: ['MCO', Validators.required],
      producto: [undefined, [Validators.required]],
    });
  }

}
