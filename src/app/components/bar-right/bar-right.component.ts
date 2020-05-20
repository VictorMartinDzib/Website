import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bar-right',
  templateUrl: './bar-right.component.html',
  styleUrls: ['./bar-right.component.css']
})
export class BarRightComponent implements OnInit, OnChanges {

  @Input() cuadriculaActual = "2";

  publicaciones = [
    {
      urlImg: 'https://www.bienesonline.com/mexico/photos/fachada-11280945132.jpg',
      code: 'DS0001',
      contenido: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dignissimos blanditiis, obcaecati'
    },
    {
      urlImg: 'https://info.promotoraresidencial.com/hs-fs/hubfs/residencial-gran-santafe-cancun.jpg?width=600&name=residencial-gran-santafe-cancun.jpg',
      code: 'DS0002',
      contenido: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dignissimos blanditiis, obcaecati'
    },
    {
      urlImg: 'https://info.promotoraresidencial.com/hs-fs/hubfs/residencial-gran-santafe-cancun.jpg?width=600&name=residencial-gran-santafe-cancun.jpg',
      code: 'DS0003',
      contenido: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dignissimos blanditiis, obcaecati'
    },
    {
      urlImg: 'https://info.promotoraresidencial.com/hs-fs/hubfs/residencial-gran-santafe-cancun.jpg?width=600&name=residencial-gran-santafe-cancun.jpg',
      code: 'DS0004',
      contenido: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dignissimos blanditiis, obcaecati'
    },
    {
      urlImg: 'https://info.promotoraresidencial.com/hs-fs/hubfs/residencial-gran-santafe-cancun.jpg?width=600&name=residencial-gran-santafe-cancun.jpg',
      code: 'DS0005',
      contenido: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dignissimos blanditiis, obcaecati'
    },
    {
      urlImg: 'https://info.promotoraresidencial.com/hs-fs/hubfs/residencial-gran-santafe-cancun.jpg?width=600&name=residencial-gran-santafe-cancun.jpg',
      code: 'DS0006',
      contenido: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dignissimos blanditiis, obcaecati'
    },
    {
      urlImg: 'https://vivo.mx/wp-content/uploads/2016/04/modelo-de-1-recamara-en-encanto-chetumal.jpg',
      code: 'DS0007',
      contenido: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dignissimos blanditiis, obcaecati'
    },
    {
      urlImg: 'https://imganuncios.mitula.net/medium/venta_de_casa_5560134573919121209.jpg',
      code: 'DS0008',
      contenido: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dignissimos blanditiis, obcaecati'
    },
    {
      urlImg: 'https://img10.naventcdn.com/avisos/18/00/50/11/61/22/1200x1200/21963433.jpg',
      code: 'DS0009',
      contenido: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dignissimos blanditiis, obcaecati'
    },
    {
      urlImg: 'https://n7t2r2r7.stackpathcdn.com/SadasiR2/wp-content/uploads/2019/01/casa-modelo-ceiba-jardines-del-sur-5.jpg',
      code: 'DS0010',
      contenido: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dignissimos blanditiis, obcaecati'
    },
  ];
  pages:any[];
  size = "32%";
  margen = "1%";
  elementos_totales = 0;
  ev = "";
  text_size = "";

  

  listado_publicaciones: boolean = true;
  mapas: boolean = false;


  constructor() { 
    this.cuadriculaActual = "2";
    this.elementos_totales = 4;
    this.size = "32%";
    this.margen = "1%";
    this.dibujarCuadriculas();
    //console.log(window.innerHeight);
    
  }

  ngOnInit() {
  }

  modificarVista()
  {
    //alert("Hola");
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
          this.margen = "1%";
          this.text_size = "medium";
        break;
      case "3":
        this.size = "32%";
        this.margen = "1%";
        this.text_size = "x-small";
        break;

      case "4":
        this.size = "24%";
        this.margen = "1%";
        this.text_size = "xx-small";
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
