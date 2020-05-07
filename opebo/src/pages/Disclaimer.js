import React from "react";
import { Link } from "react-router-dom";
import Footer from "../modules/components/Footer";

const logo = require("../assets/images/logo.png");

function Disclaimer() {
  return (
    <>
      <div className='flex pt-10 mb-2 justify-center items-center'>
        <img src={logo} alt='opebo logo' className='h-20 fill-light' />
      </div>
      <div className='flex flex-col justify-center p-10 text-xl font-sans md:px-32 mb-20'>
        <button className='flex start py-2 text-black font-bold'>
          <Link to='/' key='Home' className='text-black hover:text-orange-500'>
            Back
          </Link>
        </button>
        <hr className='bg-orange-500 h-2' />
        <div className='mt-8 justify-center md:text-justify items-center'>
          <h1 className='font-bold text-5xl'>
            Disclaimer for{" "}
            <span className='text-orange-500'>Opebo Industries Pvt. Ltd.</span>
          </h1>

          <p className='text-2xl'>
            If you require any more information or have any questions about our
            site's disclaimer, please feel free to contact us by email at
            <span className='text-black font-bold'>
              {" "}
              support@opeboindustries.com
            </span>
          </p>
          <hr />

          <h2 className='mt-4 font-bold text-3xl'>
            Disclaimers for{" "}
            <span className='text-orange-500'>
              <Link
                to='/'
                key='Home'
                className='text-orange-500 hover:text-orange-400 active:text-gray-600 font-bold cursor-pointer'
              >
                opeboindustries.com
              </Link>
            </span>
          </h2>

          <p>
            All the information on this website -{" "}
            <Link
              to='/'
              key='Home'
              href='https://opeboindustries.com'
              className='text-black font-bold cursor-pointer'
            >
              https://opeboindustries.com
            </Link>{" "}
            - is published in good faith and for general information purpose
            only. opeboindustries.com does not make any warranties about the
            completeness, reliability and accuracy of this information. Any
            action you take upon the information you find on this website
            (opeboindustries.com), is strictly at your own risk.
            opeboindustries.com will not be liable for any losses and/or damages
            in connection with the use of our website. Our Disclaimer was
            generated with the help of the{" "}
            <a
              href='https://www.disclaimergenerator.net/'
              className='text-black font-bold'
            >
              Disclaimer Generator
            </a>{" "}
            and the{" "}
            <a
              href='https://www.disclaimer-generator.com.com'
              className='text-black font-bold'
            >
              Disclaimer Generator
            </a>
            .
          </p>

          <p>
            From our website, you can visit other websites by following
            hyperlinks to such external sites. While we strive to provide only
            quality links to useful and ethical websites, we have no control
            over the content and nature of these sites. These links to other
            websites do not imply a recommendation for all the content found on
            these sites. Site owners and content may change without notice and
            may occur before we have the opportunity to remove a link which may
            have gone 'bad'.
          </p>

          <p>
            Please be also aware that when you leave our website, other sites
            may have different privacy policies and terms which are beyond our
            control. Please be sure to check the Privacy Policies of these sites
            as well as their "Terms of Service" before engaging in any business
            or uploading any information.
          </p>

          <h2 className='font-bold text-2xl'>Consent</h2>

          <p>
            By using our website, you hereby consent to our disclaimer and agree
            to its terms.
          </p>

          <h2 className='font-bold text-2xl'>Update</h2>

          <p>
            Should we update, amend or make any changes to this document, those
            changes will be prominently posted here.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Disclaimer;
