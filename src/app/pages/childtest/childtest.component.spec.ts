/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ChildtestComponent } from './childtest.component';

describe('Component: Childtest', () => {
  it('should create an instance', () => {
    let component = new ChildtestComponent();
    expect(component).toBeTruthy();
  });
});
