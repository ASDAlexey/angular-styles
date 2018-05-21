import { Component, OnInit } from '@angular/core';
import get from 'lodash/get';

@Component({
  selector: 'app-styled',
  templateUrl: './styled.component.html',
  styleUrls: ['./styled.component.scss'],
})
export class StyledComponent implements OnInit {
  data = { a: 'aaa' };

  ngOnInit() {
    console.log(get(this.data, 'a'));
  }
}
