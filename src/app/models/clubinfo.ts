/**
 * Created by kweku on 9/21/2016.
 */
export class ClubInfo{

  constructor(
    public id: number,
    public president: string,
    public clubname: string,
    public country: string,
    public city: string,
    public countrycode: string,
    public district: string,
   
    public sponsor: string,
    public intro: string,
    public useruuid: string,
    public created: string,
    public modified: string,
   public contact1?: number,
   public contact2?: number
  ) {  }
}

