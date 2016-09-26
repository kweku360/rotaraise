/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { LogoComponent } from './logo.component';

describe('Component: Logo', () => {
  it('should create an instance', () => {
    let component = new LogoComponent();
    expect(component).toBeTruthy();
  });
});
