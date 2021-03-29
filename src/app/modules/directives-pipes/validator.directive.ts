import { Directive, ElementRef, HostListener, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appValidator]'
})
export class ValidatorDirective implements OnInit {

  constructor(private readonly input: ElementRef) { }

  ngOnInit() {
    this.input.nativeElement.addEventListener('keydown', this.keyValidate)
  }

  keyValidate(event) {
    if (!event.key.match(/^[a-zA-Z0-9_ ]*$/)) {
      event.preventDefault()
    }
  }
}
