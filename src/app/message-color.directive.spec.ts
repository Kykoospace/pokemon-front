import { MessageColorDirective } from './message-color.directive';
import {ElementRef} from '@angular/core';
import {async, TestBed} from '@angular/core/testing';
export class MockElementRef extends ElementRef { nativeElement = {}; }


describe('MessageColorDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useClass: MockElementRef }
      ]
    }).compileComponents();
  }));
  it('should create an instance', () => {
    const directive = new MessageColorDirective();
    expect(directive).toBeTruthy();
  });
});
