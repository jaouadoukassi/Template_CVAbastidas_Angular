import { Component, OnInit } from '@angular/core';
import { CvabastidasService } from '../services/cvabastidas.service';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: CvabastidasService) { }

  ngOnInit(): void {
    console.log("CV: ", this.chargeCV())
  }

  chargeCV(): void{
    this.cv.profesional.forEach(element => {
      console.log("element of CV: ", element)
    });
  }

}
