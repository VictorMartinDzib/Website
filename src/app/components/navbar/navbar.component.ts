import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faCoffee = "faCoffee";

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

  constructor() { }

  ngOnInit() {
  }

}
