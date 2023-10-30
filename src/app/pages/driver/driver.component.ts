import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/model/driver';
import { DriverService } from 'src/app/services/driver.service';
import { DriverViewwComponent } from 'src/app/components/driver-vieww/driver-view.component';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule,DriverViewwComponent],
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {
  @Input()
  name?:string;

  driver!:Driver | null;

  private router=inject(Router);
  private driverS=inject(DriverService)

  
  constructor(private route:ActivatedRoute){
    this.route.params.subscribe(params=>console.log(params));
  }

  ngOnInit(){
    if (this.name) 
    this.driver = this.driverS.getByName(this.name);
  }

  irInicio(){
    //navegar al inicio
   this.router.navigateByUrl("/");
   //this.router.navigate['/'];
/*
  const saluda = (name:string)=>{
      console.log('Mola Mundo '+name);
  }
  saluda("Carlos");
*/
  }

  fromChild(eventinfo:string){
    alert(eventinfo);
  }



}
