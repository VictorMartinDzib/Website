import { Component, OnInit, Input } from '@angular/core';

interface CategoryI{
  name: string;
  numero: number;
  url: string;
  subcategoria: SubCategoryI;
  subs: boolean;
}

interface SubCategoryI{
  name: string;
  numero: number;
}

@Component({
  selector: 'app-accordeon-element',
  templateUrl: './accordeon-element.component.html',
  styleUrls: ['./accordeon-element.component.css']
})
export class AccordeonElementComponent implements OnInit {

  @Input() data: CategoryI;
  constructor() { }

  ngOnInit() {
  }

}
