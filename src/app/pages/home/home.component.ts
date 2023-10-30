import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorComponent } from 'src/app/components/validator/validator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ValidatorComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

  public n: number=0;

  ngOnInit(): void {
    console.log("INIT");

  }
  ngOnDestroy(): void {
    console.log("DESTROY");

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("CHANGES");

  }
  ngDoCheck(): void {
    console.log("CHECK");

  }



}
