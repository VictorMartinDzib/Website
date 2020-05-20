import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faCoffee = "faCoffee";
  p1266: boolean = false;
  p1900: boolean = false;

  grande = 'custom-select';
  chico = 'custom-select custom-select-sm';

  secciones = [
    "Renta", 
    "Venta",
    "Desarrollos",
    "Traspasos",
    "Remates",
    "Servicios",
    "Noticias",
    "Publicar"
  ]

  constructor() { 
  }

  ngOnInit() {
    this.validarPantalla();
  }

  @HostListener('window:resize', ['$event'])
  onRezise()
  {
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
