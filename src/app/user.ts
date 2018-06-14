export class User {

  /*
  id: number;
  name: string;

  constructor(id: number, name: string){
      this.id = id;
      this.name = name;

  }
*/

  constructor(
  public personID: number,
  public username: string,
  public email: string,
  public password: string,
  public address: string,
  public city: string,
  public state: string,
  public zipcode: string,



) {  }



}
