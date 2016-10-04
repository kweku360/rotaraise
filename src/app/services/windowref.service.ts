import { Injectable } from '@angular/core';

function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable()
export class WindowrefService {

  constructor() { }
  get nativeWindow() : any {
    return _window();
  }
  
  scrollTo(x:number,y:number){
    return window.scroll(x,y)
  }

}
