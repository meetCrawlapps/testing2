// export interface inputtypes {
//     label: string,
//     type: string,
//     id: string,
//     placeholder: string,
//     requiredinput?: boolean | undefined,
//     classNameprops?: string,
//     boxclass?: string,
//     helptext?: string,
//     name?: string,
//     onChangeProp?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
//     error?: string

import { Country } from "../country/Countrydata";

// }

export interface inputtypes {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  requiredinput?: boolean | undefined;
  classNameprops?: string;
  boxclass?: string;
  helptext?: string;
  name?: string;
  onChangeProp?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  onBlurProp?: (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  error?: string;
  onCountrySelect?: (country: Country) => void;
}
