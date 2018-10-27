import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ApiMercadolibreService} from '../../service/api-mercadolibre.service';
import {DialogComponent} from '../dialog/dialog.component';

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
  categorias: any[];

  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              private apiMercadolibreService: ApiMercadolibreService) {
    this.createForms();
  }

  ngOnInit() {
    this.sitio = 'MCO';
    this.apiMercadolibreService.obtenerSitios().subscribe(value => {
      this.sitios = value;
    });
    this.apiMercadolibreService.obtenerCategorias(this.sitio).subscribe(value => {
      this.categorias = value;
    });
  }

  buscarProductos() {
    this.cargando = true;
    this.productos = undefined;
    this.sitio = this.formBusqueda.get('sitio').value;
    this.apiMercadolibreService.obtenerCategorias(this.sitio).subscribe(value => {
      this.categorias = value;
    });
    const producto: string = this.formBusqueda.get('producto').value;
    if (producto.length > 0) {
      this.apiMercadolibreService.obtenerProductos(this.sitio, producto).subscribe(value => {
        this.productos = value.results;
        this.cargando = false;
      });
    }
  }

  mostrarDetalles(prod: any) {
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: prod
    });
  }

  private createForms() {
    this.formBusqueda = this.fb.group({
      sitio: ['MCO', Validators.required],
      producto: [undefined, [Validators.required]],
    });
  }

  obtenerProductosCategoria(categoriaId: string) {
    this.cargando = true;
    this.apiMercadolibreService.obtenerProductosPorCategoria(this.sitio, categoriaId).subscribe(value => {
      console.log(value);
      this.cargando = false;
      this.productos = value.results;
    });
  }
}
