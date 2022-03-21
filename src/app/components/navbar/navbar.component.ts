import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() paramSelected = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  consult(category: string): void {
    const param = category;
    this.paramSelected.emit(param);
  }
}
