import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylish',
  templateUrl: './stylish.component.html',
  styleUrls: ['./stylish.component.css']
})
export class StylishComponent {
  showStyle = false;

  getBackgroundColor() {
    return this.showStyle ? 'yellow' : '';
  }
}
