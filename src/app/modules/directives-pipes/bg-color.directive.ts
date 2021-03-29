import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective implements OnInit {
  @Input() parent: HTMLElement
  constructor(private readonly elRef: ElementRef) { }
  color: string
  ngOnInit() {
    this.changeBgColor()
  }

  changeBgColor() {
    setTimeout(() => {
      const value = this.elRef.nativeElement.value

      this.color = `#${value}`

      if (this.isHexColor(value)) {
        this.parent.style.backgroundColor = this.color
      } else this.parent.style.backgroundColor = ''
    }, 0)
  }

  isHexColor(hex: string) {
    return hex.length === 6 || hex.length === 3
      && !isNaN(Number('0x' + hex))
  }

  @HostListener('input') onInput() {
    this.changeBgColor()
  }
}
