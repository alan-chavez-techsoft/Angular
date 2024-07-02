import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: false
})
export class HoverDirective {

  constructor(private ele:ElementRef) { }
  @HostListener('mouseenter') onMouseMove(){
    this.ele.nativeElement.style.backgroundColor = 'blue'
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.ele.nativeElement.style.backgroundColor = 'white'
  }

}
