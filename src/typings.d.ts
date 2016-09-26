// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

declare var System: any;
declare var firebase:any;
declare var jQuery: JQueryStatic;

//here we declare typings for jquery plugins - Semantic ui js
//to be specific.
/// <reference path="../node_modules/@types/jquery/index.d.ts" />
interface JQuery {
  popup(options?: any): JQuery;
  modal(options?: any): JQuery;
  dropdown(options?: any): JQuery;
  progress(options?: any): JQuery;
  form(options?: any): JQuery;
}
