/**
 * Created by kweku on 8/27/2016.
 */
import {Http,Response} from "@angular/http"
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
//import 'rxjs/Rx';

@Injectable()
export  class CourseList{

constructor(private http:Http){}

  private serverUrl = "http://104.131.190.2:3000/hopebible/getbible"

  getBibles (): Observable<String> {
    return this.http.get(this.serverUrl)
      .map(this.extractData);

  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  //lets return the list of courses
  getCourses(){
    var courses:string[] = ["Digital Signal","Numerical methods","Linear Circuits"]
    return courses;
  }

}
