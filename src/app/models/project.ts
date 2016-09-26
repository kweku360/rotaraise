/**
 * Created by kweku on 9/21/2016.
 */
export class ProjectModel{

  constructor(
    public id: number,
    public Uuid: string = "",
    public urlcode: string = "",
    public name: string = "",
    public tagline: string = "",
    public clubuuid: string = "",
    public fundstart: string = "",
    public fundend: string = "",
    public category: string = "",
    public location: string = "",

    public targetamt: number = 0,
    public currentamt: number = 0,
    public percentvalue: number = 0,
    public amtoffsite: number = 0,
    public currency: string = "",
    public donorcount: number = 0,
    public funduuid: string = ""

  ) {  }
}
