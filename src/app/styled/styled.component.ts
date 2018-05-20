import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-styled',
  templateUrl: './styled.component.html',
  styleUrls: ['./styled.component.css']
})
export class StyledComponent implements OnInit {
  data = { a: 'aaa' };

  ngOnInit() {
    console.log(_.get(this.data, 'a'));
  }
}
