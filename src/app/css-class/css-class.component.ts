import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-class',
  templateUrl: './css-class.component.html',
  styleUrls: ['./css-class.component.scss']
})
export class CssClassComponent {
  isBorder = true;
  // cssClasses = 'bold hightlight strike';
  // cssClasses = ['bold', 'hightlight', 'strike'];
  // cssClasses = { 'bold': true, 'hightlight': false, 'strike': true };

  isBold = true;
  isStrike = true;
  isHightlight = true;
}
