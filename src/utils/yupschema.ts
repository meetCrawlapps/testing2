'use client';
import { Formname } from '@/types/form/formTypes';
import * as Yup from 'yup';

const getValidationSchema = (formname: Formname['formname']) => {
  return Yup.object().shape({
    fname: Yup.string()
      .required('First Name is required')
      .test(
        'valid-fname',
        'First Name should not contain numbers or special characters and should contain more than 2 letters',
        (value) =>
          !value || (/^[a-zA-Z\s]+$/.test(value) && value.trim().length > 2),
      ),
    lname: Yup.string()
      .required('Last Name is required')
      .test(
        'valid-lname',
        'Last Name should not contain numbers or special characters and should contain more than 2 letters',
        (value) =>
          !value || (/^[a-zA-Z\s]+$/.test(value) && value.trim().length > 2),
      ),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    facility:
      formname === 'Grow your private practice'
        ? Yup.string().required('Facility Name is required')
        : Yup.string(),
    faddress:
      formname === 'Grow your private practice'
        ? Yup.string().required('Facility Address is required')
        : Yup.string(),
    phone:
      formname === 'Grow your private practice'
        ? Yup.string()
            .required('Phone Number is required')
            .test(
              'valid-phone',
              'Phone Number should not contain letters',
              (value) => !value || /^\d+$/.test(value),
            )
        : Yup.string(),
    message:
      formname === 'Contact us'
        ? Yup.string().required('Message is required')
        : Yup.string(),
  });
};

export default getValidationSchema;
