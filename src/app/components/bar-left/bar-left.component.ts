import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bar-left',
  templateUrl: './bar-left.component.html',
  styleUrls: ['./bar-left.component.css']
})
export class BarLeftComponent implements OnInit {

  @Output() cuadricula = new EventEmitter<string>();
  @Output() mapa = new EventEmitter<string>();

  lista_opciones = [
    {
      name: 'RENTAS',
      url: 'rentas'
    },
    {
      name: 'VENTA',
      url: 'rentas'
    },
    {
      name: 'DESARROLLOS',
      url: 'rentas'
    },
    {
      name: 'TRASPASOS',
      url: 'rentas'
    },
    {
      name: 'REMATES',
      url: 'rentas'
    },
    {
      name: 'SERVICIOS',
      url: 'rentas'
    },
    {
      name: 'NOTICIAS',
      url: 'rentas'
    }
  ];

  cuadricula_seleccionada = "";
  mapa_sel = "";

  constructor() { }

  ngOnInit() {
  }

  seleccionarCuadricula(event){

    this.cuadricula.emit( this.cuadricula_seleccionada);
    this.mapa_sel = "";
  }

  mostrarMapa(event){
    this.mapa.emit( this.mapa_sel );
  }

}
