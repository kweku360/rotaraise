/**
 * Created by kweku on 8/27/2016.
 */
import { Component } from '@angular/core';
import { CourseList } from './courselist.service';
//import { AutoGrowDirective } from '../directives/autogrow/auto-grow.directive';

@Component({
  // //moduleId : module.id,
  selector : "courses",
 // template : "<h1>high praise</h1>"
   templateUrl: 'courses.component.html',
   styleUrls: ['courses.component.css'],
  providers : [CourseList],
 // directives : [AutoGrowDirective]
})

export  class CoursesComponent{
  studentname:string = "kweku kankam"
  courses;
  constructor(courselist: CourseList){
    this.courses = courselist.getBibles().subscribe();
  }
}
