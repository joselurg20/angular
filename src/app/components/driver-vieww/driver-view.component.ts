import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Driver } from 'src/app/model/driver';

@Component({
  selector: 'app-driver-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver-view.component.html',
  styleUrls: ['./driver-view.component.css']
})
export class DriverViewwComponent {

  @Input({ required: true })
  driver!: Driver | null;

  @Output()
  evento = new EventEmitter<string>();

  ngOnInit() {
    console.log(this.driver);
  }

  ngOnchanges(changes: any): void {
    console.log(changes);
  }

  comunicate() {
    this.evento.emit(this.driver?.nombre)
  }

}
