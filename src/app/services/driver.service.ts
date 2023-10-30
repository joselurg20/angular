import { Injectable, inject } from '@angular/core';
import { Driver } from '../model/driver';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private _data: Driver[] = [];
  private logS = inject(LogService)
  constructor() {
    const data =localStorage.getItem("data");
    if (data) 
      this._data=JSON.parse(data);
    
   }

  add(driver: Driver): void {
    this._data.push(driver);
    localStorage.setItem("data",JSON.stringify(this._data));
    this.logS.log("Se ha insertado un nuevo driver");

  }


  get data() {
    return this._data;
  }
  getByName(name: string): Driver | null {
    let result = null;
    const coincidences: Driver[] = this._data.filter(elemento => elemento.nombre === name);
    result = coincidences.length > 0 ? coincidences[0] : null;

    return result;

  }

}
