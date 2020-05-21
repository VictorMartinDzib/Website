import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-bar-left',
  templateUrl: './bar-left.component.html',
  styleUrls: ['./bar-left.component.css']
})
export class BarLeftComponent implements OnInit {

  @Output() cuadricula = new EventEmitter<string>();
  @Output() mapa = new EventEmitter<string>();
  p1266: boolean = false;
  p1900: boolean = false;

  lista_opciones = [
    {
      name: 'RENTAS',
      url: 'rentas',
      numero: 500,
      subcategoria:[],
      subs: false
    },
    {
      name: 'VENTA',
      url: 'rentas',
      numero: 500,
      subcategoria:[],
      subs: false
    },
    {
      name: 'DESARROLLOS',
      url: 'rentas',
      numero: 500,
      subcategoria: [
        {
          name: 'Casas',
          numero:25
        },
        {
          name: 'Departamentos',
          numero:15
        },
        {
          name: 'Lotes urbanos',
          numero:3
        }
      ],
      subs: true
    },
    {
      name: 'TRASPASOS',
      url: 'rentas',
      numero: 321,
      subcategoria:[],
      subs: false
    },
    {
      name: 'REMATES',
      url: 'rentas',
      numero: 0,
      subcategoria:[],
      subs: false
    },
    {
      name: 'SERVICIOS',
      url: 'rentas',
      numero: 5,
      subcategoria:[],
      subs: false
    },
    {
      name: 'NOTICIAS',
      url: 'rentas',
      numero: 35,
      subcategoria:[],
      subs: false
    }
  ];

  cuadricula_seleccionada = "";
  mapa_sel = "";

  constructor() { }

  ngOnInit() {
    this.validarPantalla();
  }

  seleccionarCuadricula(event){

    this.cuadricula.emit( this.cuadricula_seleccionada);
    this.mapa_sel = "";
  }

  mostrarMapa(event){
    this.mapa.emit( this.mapa_sel );
  }

  @HostListener('window:resize', ['$event'])
  rezize(){
    this.validarPantalla();
  } 

  async validarPantalla(){
    if(window.innerWidth >= 1366 && window.innerWidth < 1899){
      this.p1266 = true;
      this.p1900 = false;
     // alert("1366");
    }else if(window.innerWidth > 1900){
      this.p1900 = true;
      this.p1266 = false;
      //alert("1900");
    }
    //alert(this.p1266 + "  " + this.p1900);
  }
  
}
