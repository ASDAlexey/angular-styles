import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyled]'
})
export class StyledDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.elementRef.nativeElement.style.backgroundColor = 'yellow'; // no in server
    renderer.setStyle(elementRef.nativeElement, 'background-color', 'green'); // work and browser and non dom api
    renderer.setStyle(elementRef.nativeElement, 'margin-top', '10px');
  }
}
