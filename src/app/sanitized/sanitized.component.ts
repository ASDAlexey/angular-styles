import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sanitized',
  templateUrl: './sanitized.component.html',
  styleUrls: ['./sanitized.component.scss'],
})
export class SanitizedComponent {
  constructor(private sanitizer: DomSanitizer) {

  }

  getStyle() {
    const gravatarUrl = 'https://downloader.disk.yandex.ru/preview/e901c055c1dbfeefec4ea920e24890a37b1bead980a0e45cc508c3d0497270aa/5b04a397/vUEvt3FcsGGd9G0iYbn2QZeQvYS4HmFruve6R3M8lI5h_MUgflMhh4kqj8AqucDXRM3DD8qnrCBsLcdlhWmGug%3D%3D?uid=0&filename=medium_f1357fbfec55a045f655cade248fa3da.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048';
    const style = `background-image: url(${gravatarUrl}); width: 150px; height: 150px; border: 1px solid #000;`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
