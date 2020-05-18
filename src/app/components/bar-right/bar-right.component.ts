import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bar-right',
  templateUrl: './bar-right.component.html',
  styleUrls: ['./bar-right.component.css']
})
export class BarRightComponent implements OnInit, OnChanges {

  @Input() cuadriculaActual = "2";

  publicaciones = new Array(30);
  pages:any[];
  size = "32%";
  padding = "10px";
  elementos_totales = 0;

  listado_publicaciones: boolean = true;
  mapas: boolean = false;


  constructor() { 
    this.cuadriculaActual = "2";
    this.elementos_totales = 4;
    this.size = "32%";
    this.dibujarCuadriculas();
  }

  ngOnInit() {
  }

  modificarVista()
  {
    alert("Hola");
  }

  ngOnChanges(changes: SimpleChanges) {
   
    // changes.prop contains the old and the new value...
    this.dibujarCuadriculas();
  }

  dibujarCuadriculas()
  {
    switch(this.cuadriculaActual){
      case "2":
          this.size = "48%";
        break;
      case "3":
        this.size = "32%";
        break;

      case "4":

        this.size = "24%";
        break;
      default:
        //alert("nada");
    }

    if(this.cuadriculaActual === "MP"){
        this.mapas = true;
        this.listado_publicaciones = false;
    }else{
      this.mapas = false;
      this.listado_publicaciones = true;
    }
    
      this.elementos_totales = Math.pow(Number(this.cuadriculaActual),2);
      let size = this.publicaciones.length;
      console.log(Math.round(size/this.elementos_totales));
      
      this.pages = new Array(2);
      for(let i; i < this.pages.length; i++){
        this.pages[i] = this.publicaciones.slice(0, 8);
      }
      
  }

}
