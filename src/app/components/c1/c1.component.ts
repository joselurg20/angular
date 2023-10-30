import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-c1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {

  constructor(private logS:LogService){
    this.logS.log("Creando componente 1");
  };
  
}

