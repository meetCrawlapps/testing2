import { Country } from "../country/Countrydata";

export interface Formtype {
  heading: string;
  subheading: string;
  formname: string;
  formhelptext: string;
}

export interface Formname {
  formname: string;
  formhelptext: string;
}

export interface FormData {
  fname: string;
  lname: string;
  email: string;
  facility: string;
  faddress: string;
  phone?: string;
  message?: string;
  country?:Country;
}
