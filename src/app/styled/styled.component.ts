import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-styled',
  templateUrl: './styled.component.html',
  styleUrls: ['./styled.component.scss'],
  encapsulation: ViewEncapsulation.Native,
})
export class StyledComponent implements OnInit {
  data = { a: 'aaa' };

  ngOnInit() {
    console.log(_.get(this.data, 'a'));
  }
}
