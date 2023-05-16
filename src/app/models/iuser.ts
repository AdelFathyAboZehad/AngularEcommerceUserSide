export interface Iuser {
  UserName:string;
  FirstName:string;
  LastName:string;
  Email:string;
  Password:string;
}


export interface user {
  id:number;
  email : string;
  expiresOn : string;
  isAuthenticated  : string;
  roles : string;
  username  : string;
  token : string;
}

export interface Adress {
  id:number;
  userId:number;
  addressEN1:string;
  addressEN2:string;
  addressAR1:string;
  addressAR2:String;
  city:string;
  unitNumber:string;
  streetNumber:string;
  region:string;
  country:string;
  postCode:string;
}
