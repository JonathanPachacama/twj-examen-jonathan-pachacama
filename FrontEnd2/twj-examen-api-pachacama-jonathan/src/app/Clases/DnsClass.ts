/**
 * Created by visitante on 17/06/2017.
 */
export class DnsClass{

  constructor(public id?:number,
              public  Host?:string,
              public  Class?:string,
              public  Ttl?:number,
              public  Type?:string,
              public  Ip?:string,
              public createdAt?:Date,
              public updatedAt?:Date ){
  }


}
