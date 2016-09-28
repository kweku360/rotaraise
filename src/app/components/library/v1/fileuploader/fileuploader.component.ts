import {Component, OnInit, NgZone, Input} from '@angular/core';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit {

  private zone:NgZone;
  private basicOptions:Object;
  private progress:number = 0;
  private response:any = {};
  private previewData:any = {};
  private filebox:boolean = true;

  @Input() simplefile:boolean;

  public documentfile:boolean = false;


  constructor() {
  }

  ngOnInit() {
    this.ngUpload()
  }

  ngUpload() {
    //binds to onchange event of your input field
    jQuery('#file').bind('change', function() {
      //this.files[0].size gets the size of your file.
      alert(this.files[0].size);
    });
    this.zone = new NgZone({enableLongStackTrace: false});
    this.basicOptions = {
      url: 'http://localhost/rotaraise/v1/upload.php',
      previewUrl: true,
      data: {
        "title": "cover",
        "description": "cover",
        "type": "cover",
        "filename": "00904",
        "ext": "jpg",
        "uuid": "45564",
        "mime": "image/x",
        "size": 0,
      },
    };
  }

  handleUpload(data:any):void {
    this.zone.run(() => {
      this.response = data;
      this.progress = data.progress.percent;

      if(this.response.response == 200){
        //save successfull
        this.filebox = false
      }else{
        console.log("loading:"+ this.progress)
      }

    });
  }

  fileInfo(evt){
    console.log(evt)
    evt.target.files[0].title = "kankam"
  }

  handlePreviewData(data: any): void {
    this.previewData = data;
  }

  showFileInput(){
    this.filebox = true
  }
}
