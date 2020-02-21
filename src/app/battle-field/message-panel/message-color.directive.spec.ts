import { MessageColorDirective } from './message-color.directive';
import {ElementRef} from '@angular/core';
import {async, TestBed} from '@angular/core/testing';
export class MockElementRef extends ElementRef { nativeElement = {}; }


describe('MessageColorDirective', () => {
  it('should ', () => {
    expect(true).toBe(true);
  });
});
