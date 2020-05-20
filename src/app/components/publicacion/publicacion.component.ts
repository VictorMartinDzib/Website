import {EventEmitter, Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, OnChanges, Output, Input } from '@angular/core';

interface PublicacionI{
  urlImg: string;
  code: string;
  contenido: string;
  size: string;
}

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit, AfterViewInit{

  @Input() cambio:string = "";
  @Input() publicacion: PublicacionI;
  @Input() size: string;

  @ViewChild('pubRef', {static: false}) pubRef: ElementRef;

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
   //this.setHeight();
  }


  seleccionado(code: string)
  {
    alert("Comprar " + code + "?");
  }

  setHeight(){
    let num = this.pubRef.nativeElement.offsetWidth;
    this.pubRef.nativeElement.style.height = num+"px";
  }

}
