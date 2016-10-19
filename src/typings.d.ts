// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html
/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../node_modules/@types/quill/index.d.ts" />


import IAlertifyStatic = alertify.IAlertifyStatic;
import QuillStatic = QuillJS.QuillStatic;
declare var System: any;
declare var firebase:any;
declare var jQuery: JQueryStatic;
declare var alertify: IAlertifyStatic;
declare var Quill: QuillStatic;

//here we declare typings for jquery plugins - Semantic ui js
//to be specific.

  interface JQuery {
  popup(options?: any): JQuery;
  modal(options?: any): JQuery;
  dropdown(options?: any): JQuery;
  progress(options?: any): JQuery;
  shape(options?: any): JQuery;
  form(options?: any): JQuery;
  dimmer(options?: any): JQuery;
    transition(options?: any): JQuery;
  tab(options?: any): JQuery;
  glide(options?: any): JQuery;

}
