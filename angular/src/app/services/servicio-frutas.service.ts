import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFrutasService {

  constructor() { }


  //metodos que generen/devuelvan datos
  getFrutas():string[]{
    let frutas:string[]=[]
    let auxiliar:string[]=["manzana","fresas","sandía"];

    for(let i:number=0;i<200;i++){
      let j= Math.floor(Math.random()*3);
      
      frutas.push(auxiliar[j]);
    }


    return frutas;

  }
}
