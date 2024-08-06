'use client';
import { inputtypes } from '@/types/common/inputtypes';
import { Country } from '@/types/country/Countrydata';
import Image from 'next/image';
import {  useState } from 'react';

const CommonInput = ({
  label,
  type,
  id,
  placeholder,
  requiredinput,
  classNameprops,
  boxclass,
  helptext,
  name,
  onChangeProp,
  onBlurProp,
  error,
  onCountrySelect
}: inputtypes) => {
  const data: Array<Country> = [
    {
      id: 1,
      img: '/Images/flag/us.svg',
      name: 'United States',
      code: '+1',
    },
    {
      id: 2,
      img: '/Images/flag/bosana.svg',
      name: 'Bosnia and Herzegovina',
      code: '+387',
    },
    {
      id: 3,
      img: '/Images/flag/United.svg',
      name: 'United Arab Emirates',
      code: '+971',
    },
    {
      id: 4,
      img: '/Images/flag/Democratic.svg',
      name: 'Democratic Republic of the Congo',
      code: '+243',
    },
    {
      id: 5,
      img: '/Images/flag/French.svg',
      name: 'French Southern and Antarctic Lands',
      code: '+33',
    },
    {
      id: 6,
      img: '/Images/flag/Papua.svg',
      name: 'Papua New Guinea',
      code: '+675',
    },
  ];

  const [active, setActive] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(data[0]);

  // select country handler
  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setActive(false);
    if (onCountrySelect) {
      onCountrySelect(country);
    }
  };
  return (
    <div className={`flex flex-col ${boxclass}`}>
      {/* Label */}
      <label htmlFor={id} className="mb-2">
        {label}
        <span className="text-gray-500 ml-1">{helptext}</span>
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          placeholder={placeholder}
          required={requiredinput}
          className={`rounded-lg p-3 border border-gray-300 w-full min-h-[120px] placeholder:text-gray-500 ${classNameprops}`}
          name={name}
          onChange={onChangeProp}
          onBlur={onBlurProp}
        ></textarea>
      ) : type === 'selectbox' ? (
        <>
          {/* Selectbox for country with phone number */}
          <div className="flex items-center border border-gray-300 rounded-lg relative">
            <button
              id="dropdown-phone-button"
              className="selectbutton flex-shrink-0 z-10 inline-flex items-center py-[14.5px] px-3 text-center text-gray-950 rounded-s-lg"
              type="button"
              onClick={() => setActive(!active)}
            >
              <Image
                src={selectedCountry.img}
                width={26}
                height={20}
                alt={label}
              />
              &nbsp;&nbsp;{selectedCountry.code}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div className="relative w-full">
              <input
                type="number"
                id={id}
                className="p-3 border-l border-gray-300 w-full placeholder:text-gray-500 z-20 rounded-e-lg"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder={placeholder}
                required={requiredinput}
                name={name}
                onChange={onChangeProp}
                onBlur={onBlurProp}
              />
            </div>
            {active && (
              <div className="absolute top-full mt-1 p-3 md:min-w-[420px] bg-white rounded-lg shadow-md z-20">
                <input
                  type="search"
                  id="search"
                  placeholder="Search country by name or code..."
                  className="rounded px-3 py-[7px] border border-gray-300 w-full mb-2"
                />
                {data?.map((country) => (
                  <div
                    key={country?.id}
                    onClick={() => handleCountrySelect(country)}
                    className={`options flex rounded-lg p-2 w-full mb-[2px] cursor-pointer ${country?.id === selectedCountry?.id ? 'text-blue-500' : 'text-gray-900'}`}
                  >
                    <Image
                      src={country?.img}
                      width={26}
                      height={20}
                      alt={label}
                      className="mr-2"
                    />
                    <div
                      className={`flex items-center gap-2  ${country?.id === selectedCountry.id ? 'text-primary600' : 'text-gray-900'}`}
                    >
                      <h3>{country?.name}</h3>
                      <span
                        className={`text-gray-500 ${country?.id === selectedCountry.id ? 'text-primary600' : 'text-gray500'}`}
                      >
                        {country?.code}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        // Normal input field according to type
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required={requiredinput}
          onChange={onChangeProp}
          onBlur={onBlurProp}
          className={`rounded-lg p-3 border border-gray-300 w-full placeholder:text-gray-500 ${classNameprops}`}
        />
      )}
      {helptext && <p className="text-sm text-gray-500">{helptext}</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default CommonInput;
