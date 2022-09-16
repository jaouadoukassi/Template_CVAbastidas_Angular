import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvabastidasService {

  profesional: any[] = [];
  informacion: any[] = [];
  licencias: any[] = [];
  experiencia: any[] = [];
  blog: any[] = [];

  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarLicencias();
    this.CargarExperiencia();
    //this.CargarBlog();
  }

   CargarProfesional(){
    this.http.get('https://portfoliojaouad-default-rtdb.europe-west1.firebasedatabase.app/Profesional.json')
      .subscribe((resp: any[]) => {
        this.profesional = resp;
        console.log(resp);
    });
  }

   CargarEducacion(){
    this.http.get('https://portfoliojaouad-default-rtdb.europe-west1.firebasedatabase.app/Informacion.json')
      .subscribe((resp: any[]) => {
        this.informacion = resp;
        console.log(resp);
    });
  }

  private CargarLicencias(){
    this.http.get('https://portfoliojaouad-default-rtdb.europe-west1.firebasedatabase.app/LicenciasYCertificadores.json')
      .subscribe((resp: any[]) => {
        this.licencias = resp;
        console.log("licencias: ", resp);
    });
  }

   CargarExperiencia(){
    this.http.get('https://portfoliojaouad-default-rtdb.europe-west1.firebasedatabase.app/Experiencia.json')
      .subscribe((resp: any[]) => {
        this.experiencia = resp;
        console.log(resp);
    });
  }

  // private CargarBlog(){
  //   this.http.get('https://cv-tutorial-70504.firebaseio.com/Blog.json')
  //     .subscribe((resp: any[]) => {
  //       this.blog = resp;
  //       console.log(resp);
  //   });
  // }
}
