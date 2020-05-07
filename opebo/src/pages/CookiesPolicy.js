import React from "react";
import { Link } from "react-router-dom";
import Footer from "../modules/components/Footer";

const logo = require("../assets/images/logo.png");

function CookiesPolicy() {
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
          <h1 className='font-bold text-5xl'>Cookies Policy</h1>

          <p className='text-green-500 text-sm'>Last updated: April 13, 2020</p>

          <p>
            This Cookies Policy explains what Cookies are and how We use them.
            You should read this policy so You can understand what type of
            cookies We use, or the information We collect using Cookies and how
            that information is used. This Cookies Policy has been created with
            the help of{" "}
            <a href='https://www.termsfeed.com/cookies-policy-generator/'>
              Cookies Policy Generator
            </a>
            .
          </p>

          <p>
            Cookies do not typically contain any information that personally
            identifies a user, but personal information that we store about You
            may be linked to the information stored in and obtained from
            Cookies. For further information on how We use, store and keep your
            personal data secure, see our Privacy Policy.
          </p>

          <p>
            We do not store sensitive personal information, such as mailing
            addresses, account passwords, etc. in the Cookies We use.
          </p>
          <hr className='bg-orange-500 h-2' />

          <h1 className='mt-10 font-bold text-4xl'>
            Interpretation and Definitions
          </h1>
          <h2 className='mt-5 font-bold text-2xl'>Interpretation</h2>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions.
          </p>
          <p>
            The following definitions shall have the same meaning regardless of
            whether they appear in singular or in plural.
          </p>

          <h2 className='mt-5 font-bold text-2xl'>Definitions</h2>
          <p>For the purposes of this Cookies Policy:</p>

          <ul className='list-disc ml-10'>
            <li>
              <strong>Company</strong> (referred to as either "the Company",
              "We", "Us" or "Our" in this Cookies Policy) refers to Opebo
              Industries Pvt. Ltd., Patna.
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Website, or a company, or any legal entity on behalf of which such
              individual is accessing or using the Website, as applicable.
            </li>
            <li>
              <strong>Cookies</strong> means small files that are placed on Your
              computer, mobile device or any other device by a website,
              containing details of your browsing history on that website among
              its many uses.
            </li>
            <li>
              <strong>Website</strong> refers to opeboindustries.com, accessible
              from https://opeboindustries.com.
            </li>
          </ul>
          <hr className='bg-orange-500 h-2' />

          <h1 className='mt-10 font-bold text-4xl'>The use of the Cookies</h1>
          <h2 className='mt-5 font-bold text-2xl'>Type of Cookies We Use</h2>
          <p>
            Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies
            remain on your personal computer or mobile device when You go
            offline, while Session Cookies are deleted as soon as You close your
            web browser.
          </p>
          <p>
            We use both session and persistent Cookies for the purposes set out
            below:
          </p>

          <ul className='list-disc ml-10'>
            <li>
              <p>
                <strong>Functionality Cookies</strong>
              </p>
              <p>Type: Persistent Cookies</p>
              <p>Administered by: Us</p>
              <p>
                Purpose: These Cookies allow us to remember choices You make
                when You use the Website, such as remembering your login details
                or language preference. The purpose of these Cookies is to
                provide You with a more personal experience and to avoid You
                having to re-enter your preferences every time You use the
                Website.
              </p>
            </li>
          </ul>

          <h2 className='mt-5 font-bold text-2xl'>
            Your Choices Regarding Cookies
          </h2>
          <p>
            If You prefer to avoid the use of Cookies on the Website, first You
            must disable the use of Cookies in your browser and then delete the
            Cookies saved in your browser associated with this website. You may
            use this option for preventing the use of Cookies at any time.
          </p>
          <p>
            If You do not accept Our Cookies, You may experience some
            inconvenience in your use of the Website and some features may not
            function properly.
          </p>
          <p>
            If You'd like to delete Cookies or instruct your web browser to
            delete or refuse Cookies, please visit the help pages of your web
            browser.
          </p>

          <ul className='list-disc ml-10'>
            <li>
              For the Chrome web browser, please visit this page from Google:
              https://support.google.com/accounts/answer/32050
            </li>
            <li>
              For the Internet Explorer web browser, please visit this page from
              Microsoft: http://support.microsoft.com/kb/278835
            </li>
            <li>
              For the Firefox web browser, please visit this page from Mozilla:
              https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
            </li>
            <li>
              For the Safari web browser, please visit this page from Apple:
              https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
            </li>
          </ul>

          <p>
            For any other web browser, please visit your web browser's official
            web pages.
          </p>

          <h2 className='mt-5 font-bold text-2xl'>
            More Information about Cookies
          </h2>
          <p>
            You can learn more about cookies:{" "}
            <a href='https://www.termsfeed.com/blog/cookies/'>
              All About Cookies
            </a>{" "}
            article.
          </p>

          <h2 className='mt-5 font-bold text-2xl'>Contact Us</h2>
          <p>
            If you have any questions about this Cookies Policy, You can contact
            us:
          </p>

          <ul className='ml-10 list-disc'>
            <li>
              <b>
                By email:{" "}
                <span className='text-orange-500'>
                  support@opeboindustries.com
                </span>
              </b>
            </li>
            <li>
              <b>
                By visiting this page on our website:{" "}
                <span className='text-orange-500'>
                  https://opeboindustries.com
                </span>
              </b>
            </li>
            <li>
              <b>
                By phone number:{" "}
                <span className='text-orange-500'>1112223330</span>
              </b>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CookiesPolicy;
