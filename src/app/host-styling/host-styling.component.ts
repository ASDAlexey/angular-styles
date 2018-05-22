import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-host-styling',
  templateUrl: './host-styling.component.html',
  styleUrls: ['./host-styling.component.scss']
})
export class HostStylingComponent {
  @HostBinding('class.yellow-style') yellowStyle = true;
}
