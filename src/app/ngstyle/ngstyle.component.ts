import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent {
  borderStyle = {
    border: '1px solid #000',
    borderRadius: '3px',
    'width.px': 200,
    padding: '15px',
  };

  updateStyle(width: string) {
    this.borderStyle['width.px'] = +width;
  }
}
