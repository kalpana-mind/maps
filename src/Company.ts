import { faker } from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhrasse: string;
  location: {
    lat: number;
    lng: number;
  };

constructor(){
  this.companyName = faker.company.name();
  this.catchPhrasse = faker.company.catchPhrase();
  this.location ={
    lat: parseFloat(faker.address.latitude()),
    lng: parseFloat(faker.address.longitude())
  };
}
markerContent(): string {
  return `
  <div>
  <h1>Company Name: ${this.companyName}</h1>
      <h3>Catchphrase: ${this.catchPhrasse}</h3>
          </div>`;
}
}