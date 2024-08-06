'use client';
import React, { useState } from 'react';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import getValidationSchema from '@/utils/yupschema';
import { FormData, Formname } from '@/types/form/formTypes';
import { Country } from '@/types/country/Countrydata';

const Form = ({ formname, formhelptext }: Formname) => {
  const [formdata, setFormData] = useState<FormData>({
    fname: '',
    lname: '',
    email: '',
    facility: '',
    faddress: '',
    phone: '',
    message: '',
    country:{
      id: 1,
      img: '/Images/flag/us.svg',
      name: 'United States',
      code: '+1',
    }
  });

  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});

  // form validation schema
  const formValidationSchema = getValidationSchema(formname);

  // submit button handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({
      fname: true,
      lname: true,
      email: true,
      facility: formname === 'Grow your private practice',
      faddress: formname === 'Grow your private practice',
      phone: formname === 'Grow your private practice',
      message: formname === 'Contact us',
    });

    try {
      await formValidationSchema.validate(formdata, { abortEarly: false });
    } catch (err: any) {
      const validationErrors: any = {};
      err.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };
  // input field onChange handler
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  // onBlur handler for display error message
  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });

    formValidationSchema
      .validateAt(name, formdata)
      .then(() => {
        setErrors((prevErrors: any) => ({ ...prevErrors, [name]: '' }));
      })
      .catch((err: any) => {
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          [name]: err.message,
        }));
      });
  };
  const handleCountrySelect = (country: Country) => {
    setFormData({ ...formdata,country: country });
    // Further logic with selected country data
  };
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col mb-10">
          <h2 className="heading3">{formname}</h2>
          <span className="heading-medium text-gray-500">{formhelptext}</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex sm:flex-row xs:flex-col mb-6">
            <CommonInput
              type="text"
              label="First Name"
              placeholder="First Name"
              name="fname"
              id="First Name"
              boxclass="sm:w-6/12 sm:me-6 sm:mb-0 xs:mb-6"
              onChangeProp={handleChange}
              onBlurProp={handleBlur}
              error={touched.fname && errors.fname}
            />
            <CommonInput
              type="text"
              label="Last Name"
              placeholder="Last Name"
              name="lname"
              id="Last Name"
              boxclass="sm:w-6/12"
              onChangeProp={handleChange}
              onBlurProp={handleBlur}
              error={touched.lname && errors.lname}
            />
          </div>
          <CommonInput
            type="email"
            label="Email Address"
            placeholder="e.g. you@company.com"
            name="email"
            id="email"
            boxclass="w-full mb-6"
            onChangeProp={handleChange}
            onBlurProp={handleBlur}
            error={touched.email && errors.email}
          />
          {formname === 'Grow your private practice' && (
            <>
              <CommonInput
                type="selectbox"
                label="Phone Number"
                placeholder="000-000-0000"
                name="phone"
                boxclass="w-full mb-6"
                id="phone"
                onChangeProp={handleChange}
                onBlurProp={handleBlur}
                error={touched.phone && errors.phone}
                onCountrySelect={handleCountrySelect}
              />
              <CommonInput
                type="text"
                label="Facility Name"
                placeholder="e.g. Carbon"
                name="facility"
                boxclass="w-full mb-6"
                id="facility"
                onChangeProp={handleChange}
                onBlurProp={handleBlur}
                error={touched.facility && errors.facility}
              />
              <CommonInput
                type="textarea"
                label="Facility Address"
                placeholder=""
                name="faddress"
                boxclass="w-full mb-6"
                classNameprops="min-h-[72px]"
                helptext="(if you have multiple facilities, please list each one below)"
                id="faddress"
                onChangeProp={handleChange}
                onBlurProp={handleBlur}
                error={touched.faddress && errors.faddress}
              />
            </>
          )}
          {formname === 'Contact us' && (
            <CommonInput
              type="textarea"
              label="Message"
              name="message"
              placeholder="Write us something here..."
              id="message"
              boxclass="w-full mb-10"
              onChangeProp={handleChange}
              onBlurProp={handleBlur}
              error={touched.message && errors.message}
            />
          )}
          <CommonButton typeProp="submit" classNameProp="w-full">
            More About Us
          </CommonButton>
        </form>
      </div>
    </>
  );
};

export default Form;
