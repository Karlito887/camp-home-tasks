import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {
  constructor(private elRef: ElementRef) { }

  get color() {
    const textArr: string[] = this.elRef.nativeElement.textContent.split(' ')
    return textArr[textArr.length - 1]
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elRef.nativeElement.style.color = (this.isHexColor(this.color.substring(1)) ? this.color : 'red')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elRef.nativeElement.style.color = ''
  }

  isHexColor(hex: string) {
    return hex.length === 6 || hex.length === 3
      && !isNaN(Number('0x' + hex))
  }
}
