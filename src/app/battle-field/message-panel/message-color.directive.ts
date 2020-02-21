import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMessageColor]'
})
export class MessageColorDirective {

  @Input() appMessageColor: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.appMessageColor);
  }
}
