import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogService } from 'src/app/services/log.service';
import { Driver } from 'src/app/model/driver';
import { DriverService } from 'src/app/services/driver.service';
import { Router } from '@angular/router';
import { DriverViewwComponent } from '../driver-vieww/driver-view.component';

@Component({
  selector: 'app-validator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent {

  nombre: string = '';
  edad: number = 10;

  estiloLetras = {
    'color': 'red',
    'font-weight': 'normal',
    'font-size': '1rem',
  }

  esMayorDeEdad: boolean = false;
  public driverS = inject(DriverService);
  private logS = inject(LogService);
  public router = inject(Router)


  constructor() { }

  aumenta(): void {
    this.edad++;
    this.esMayorDeEdad = this.edad >= 18 ? true : false;
    this.compruebaEstilo();
  }

  compruebaEstilo() {
    this.estiloLetras = {
      'color': this.edad < 18 ? 'red' : 'green',
      'font-weight': this.edad < 18 ? 'bold' : 'normal',
      'font-size': this.edad < 18 ? '1.5ren' : '1rem',

    }
  }

  disminuye(): void {
    this.edad--;
    this.esMayorDeEdad = this.edad >= 18 ? true : false;
    this.compruebaEstilo();
  }

  resetea(): void {
    this.nombre = '';
    this.edad = 0;
  }

  inserta(): void {
    alert(`${this.nombre} ya se puede sacar la licencia`);
    this.driverS.add({
      nombre: this.nombre,
      edad: this.edad
    });
    this.resetea();
  }

  poneMayuscula(event?: Event): void {
    console.log(event);
    this.nombre = this.nombre.toUpperCase().trim();
  }

  goToDriver(name:string):void{
    if(!name) return;
    this.router.navigateByUrl("/driver/"+ name);
  }

}
