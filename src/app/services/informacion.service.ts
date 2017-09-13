import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info: any = {};
  cargada = true;
  carga_about = true;
  equipo: any[] = [];

  constructor( public http: Http ) {

    this.carga_info();
    this.carga_sobre_nosotrs();

  }

  public carga_info() {
    this.http.get('assets/data/info.data.json')
    .subscribe( data => {
        this.cargada = true;
        this.info = data.json();
    });
  }
  public carga_sobre_nosotrs() {
    this.http.get('https://htmltoangular-portafolio.firebaseio.com/team.json')
    .subscribe( data => {
        // console.log(data.json());
        this.carga_about = true;
        this.equipo = data.json();
    });
  }
}
