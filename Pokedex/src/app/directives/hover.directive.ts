import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: false
})
export class HoverDirective {

  constructor(private ele: ElementRef) { }
  @HostListener('onmouseenter') onMouseMove() {
    this.ele.nativeElement.style.backgroundColor = 'blue';
  }
  @HostListener('onmouseleave') onMouseLeave() {
    this.ele.nativeElement.style.backgroundColor = 'white';
  }
}
