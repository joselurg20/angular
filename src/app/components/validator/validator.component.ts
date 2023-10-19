import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent {

  nombre:string='';
  edad: number = 10;

  estiloLetras={
    'color':'red',
    'font-weight': 'normal',
    'font-size' : '1rem',
  }

  constructor(){}

  aumenta ():void{
    this.edad++;

    this.compruebaEstilo();
  }

  compruebaEstilo(){
    this.estiloLetras = {
        'color': this.edad < 18 ? 'red' : 'green',
        'font-weight' : this.edad < 18 ? 'bold' : 'normal',
        'font-size' :  this.edad < 18 ? '1.5ren' : '1rem',

    }
  }

  disminuye(): void {
    this.edad--;
    this.compruebaEstilo();
  }

  resetea(): void{
    this.nombre='';
    this.edad = 0;
  }

  inserta():void{
    alert(`${this.nombre} ya se puede sacar la licencia`);
    this.resetea();
  }

  poneMayuscula(event?:Event): void {
    console.log(event);
    this.nombre = this.nombre.toUpperCase().trim();
  }
  
}
