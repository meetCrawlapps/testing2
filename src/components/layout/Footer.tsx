'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Textsize } from '@/types/footertext/textsize';
import { debounce } from '@/utils/debounce';
import { FooterContent } from '@/types/dynamicDataTypes/FooterContent';

const getFontSize = (width: number): Textsize => {
  const baseWidth = 1959;
  const baseFontSize = 164;
  const baselineHeight = 197;
  const decrementStep = 11;
  const decrementFontSize = 1;

  if (width > baseWidth) {
    return { width: baseFontSize, lineheight: baselineHeight };
  }

  let adjustedWidth = baseWidth;
  let fontSize = baseFontSize;
  let LineHeight = baselineHeight;

  while (adjustedWidth - decrementStep > width) {
    adjustedWidth -= decrementStep;
    fontSize -= decrementFontSize;
    LineHeight -= decrementFontSize;
  }

  return { width: fontSize, lineheight: LineHeight };
};

const Footer:React.FC<FooterContent> = ({LightLogo,FooterText,CopyrightString,SocialMediaLinks}) => {
  const [fontSize, setFontSize] = useState({ width: 164, lineheight: 197 });
  useEffect(() => {
    const handleResize = debounce(() => {
      setFontSize(getFontSize(window.innerWidth));
    }, 1000);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <footer className="bg-primaryMain overflow-hidden lg::max-h-[479px] ">
      <div className="3xl:px-[120px] px-4 pt-20 md:pb-10 pb-5">
        <div className="lg:flex items-center lg:justify-between lg:gap-0 grid gap-6 justify-center border-b border-white20 pb-10 text-center lg:text-left">
          <div className="lg:order-2 flex justify-center">
            <Image src={LightLogo?.url} alt="health-care" width={80} height={80} />
          </div>
          <div className="lg:order-1">
            <ul className="font-inter flex  lg:flex-row gap-8">
              <li className="text-base text-white font-medium hover:text-white60 transition ease-in duration-150">
                <Link href="/">Home</Link>
              </li>
              <li className="text-base text-white font-medium hover:text-white60 transition ease-in duration-150">
                <Link href="/aboutus">About Us</Link>
              </li>
              <li className="text-base text-white font-medium hover:text-white60 transition ease-in duration-150">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="lg:order-3 flex items-center justify-center gap-10">
            {
              SocialMediaLinks[0]?.platform == "facebook" &&
              (<Link href={SocialMediaLinks[0].url}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  className="text-white hover:text-primary600 transition ease-in duration-150"
                >
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z" />
                </svg>
              </Link>)
            }
            {
              SocialMediaLinks[1]?.platform==="twitter"&&
              (<Link href={SocialMediaLinks[1].url}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  className="text-white hover:text-primary600 transition ease-in duration-150"
                >
                  <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
                </svg>
            </Link>)
            }
            {
              SocialMediaLinks[2]?.platform==="instagram"&&
              (<Link href={SocialMediaLinks[2].url}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                    className="text-white hover:text-primary600 transition ease-in duration-150"
                  >
                    <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                  </svg>
                </Link>)
            }
            {
              SocialMediaLinks[3]?.platform==="call"&&
              (<Link href={`tel:${SocialMediaLinks[3]?.url}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  className="text-white hover:text-primary600 transition ease-in duration-150"
                >
                  <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                </svg>
            </Link>)
            }
            {
              SocialMediaLinks[4]?.platform==="mail"&&
              (<Link href={`mailto:${SocialMediaLinks[4]?.url}}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  className="text-white hover:text-primary600 transition ease-in duration-150"
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                </svg>
            </Link>)
            }
          </div>
        </div>
        <div className="w-full "></div>
        <div className="flex flex-col lg:flex-row items-center justify-between text-footerTitle pt-10 lg:gap-0 gap-3">
          <h5 className="text-white80">
            {CopyrightString}
          </h5>
          <div className="flex items-center lg:gap-[49px] gap-5">
            <Link
              href="/privacy-policy"
              className="text-white80 hover:text-white transition ease-in duration-150"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-white80 hover:text-white transition ease-in duration-150"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className="relative text-center 3xl:bottom-[-43px] 2xl:bottom-[-49px]  xl:bottom-[-42px] lg:bottom-[-40px] md:bottom-[-37px] sm:bottom-[-30px] xs:bottom-[-24px] left-0">
        <span
          className="text-footer text-white"
          style={{
            fontSize: `${fontSize.width}px`,
            lineHeight: `${fontSize.lineheight}px`,
            whiteSpace: 'nowrap',
          }}
        >
          {FooterText}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
