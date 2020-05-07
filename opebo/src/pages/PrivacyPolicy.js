import React from "react";
import { Link } from "react-router-dom";
import Footer from "../modules/components/Footer";

const logo = require("../assets/images/logo.png");

function PrivacyPolicy() {
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
            Privacy Policy for{" "}
            <span className='text-orange-500'>Opebo Industries Pvt. Ltd.</span>
          </h1>

          <p>
            At opeboindustries.com, accessible from{" "}
            <Link
              to='/'
              key='Home'
              className='text-black hover:text-orange-400 active:text-gray-600 font-bold cursor-pointer'
            >
              https://opeboindustries.com,
            </Link>{" "}
            one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by opeboindustries.com and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>

          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in{" "}
            <span className='text-black font-bold'>opeboindustries.com.</span>{" "}
            This policy is not applicable to any information collected offline
            or via channels other than this website.
          </p>

          <h2 className='mt-10 font-bold text-2xl'>Consent</h2>

          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>

          <h2 className='mt-10 font-bold text-2xl'>Information we collect</h2>

          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </p>
          <p>
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </p>
          <hr className='bg-orange-500 h-2' />

          <h2 className='mt-10 font-bold text-2xl'>
            How we use your information
          </h2>

          <p className='font-bold'>
            We use the information we collect in various ways, including to:
          </p>

          <ul className='list-disc ml-10'>
            <li className='mt-2'>Provide, operate, and maintain our webste</li>
            <li className='mt-2'>
              Improve, personalize, and expand our webste
            </li>
            <li className='mt-2'>
              Understand and analyze how you use our webste
            </li>
            <li className='mt-2'>
              Develop new products, services, features, and functionality
            </li>
            <li className='mt-2'>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the webste, and for
              marketing and promotional purposes
            </li>
            <li className='mt-2'>Send you emails</li>
            <li className='mt-2'>Find and prevent fraud</li>
          </ul>

          <h2 className='mt-10 font-bold text-2xl'>Log Files</h2>

          <p>
            opeboindustries.com follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services' analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users' movement on the
            website, and gathering demographic information. Our Privacy Policy
            was created with the help of the{" "}
            <a href='https://www.privacypolicygenerator.info'>
              Privacy Policy Generator
            </a>{" "}
            and the{" "}
            <a href='https://www.privacypolicytemplate.net/'>
              Privacy Policy Template
            </a>
            .
          </p>

          <h2 className='mt-10 font-bold text-2xl'>Cookies and Web Beacons</h2>

          <p>
            Like any other website, opeboindustries.com uses 'cookies'. These
            cookies are used to store information including visitors'
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users'
            experience by customizing our web page content based on visitors'
            browser type and/or other information.
          </p>

          <p>
            For more general information on cookies, please read{" "}
            <a href='https://www.cookieconsent.com/what-are-cookies/'>
              "What Are Cookies"
            </a>
            .
          </p>

          <h2 className='mt-10 font-bold text-2xl'>Our Advertising Partners</h2>

          <p>
            Some of advertisers on our site may use cookies and web beacons. Our
            advertising partners are listed below. Each of our advertising
            partners has their own Privacy Policy for their policies on user
            data. For easier access, we hyperlinked to their Privacy Policies
            below.
          </p>

          <ul>
            <li>
              <p className='font-bold text-black'>Google</p>
              <p>
                <a href='https://policies.google.com/technologies/ads'>
                  https://policies.google.com/technologies/ads
                </a>
              </p>
            </li>
          </ul>
          <hr className='bg-orange-500 h-2' />

          <h2 className='mt-10 font-bold text-2xl'>
            Advertising Partners Privacy Policies
          </h2>

          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of opeboindustries.com.
          </p>

          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on
            opeboindustries.com, which are sent directly to users' browser. They
            automatically receive your IP address when this occurs. These
            technologies are used to measure the effectiveness of their
            advertising campaigns and/or to personalize the advertising content
            that you see on websites that you visit.
          </p>

          <p>
            Note that opeboindustries.com has no access to or control over these
            cookies that are used by third-party advertisers.
          </p>

          <h2 className='mt-10 font-bold text-2xl'>
            Third Party Privacy Policies
          </h2>

          <p>
            opeboindustries.com's Privacy Policy does not apply to other
            advertisers or websites. Thus, we are advising you to consult the
            respective Privacy Policies of these third-party ad servers for more
            detailed information. It may include their practices and
            instructions about how to opt-out of certain options. You may find a
            complete list of these Privacy Policies and their links here:
            Privacy Policy Links.
          </p>

          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites. What Are Cookies?
          </p>

          <h2 className='mt-10 font-bold text-2xl'>
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </h2>

          <p>
            Under the CCPA, among other rights, California consumers have the
            right to:
          </p>
          <p>
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </p>
          <p>
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </p>
          <p>
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
          <hr className='bg-orange-500 h-2' />

          <h2 className='pt-10 font-bold text-4xl'>
            GDPR Data Protection Rights
          </h2>

          <p className='font-bold text-green-700'>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <p>
            <b>The right to access – </b>You have the right to request copies of
            your personal data. We may charge you a small fee for this service.
          </p>
          <p>
            <b>The right to rectification – </b>You have the right to request
            that we correct any information you believe is inaccurate. You also
            have the right to request that we complete the information you
            believe is incomplete.
          </p>
          <p>
            <b>The right to erasure – </b>You have the right to request that we
            erase your personal data, under certain conditions.
          </p>
          <p>
            <b>The right to restrict processing – </b>You have the right to
            request that we restrict the processing of your personal data, under
            certain conditions.
          </p>
          <p>
            <b>The right to object to processing – </b>You have the right to
            object to our processing of your personal data, under certain
            conditions.
          </p>
          <p>
            <b>The right to data portability – </b>You have the right to request
            that we transfer the data that we have collected to another
            organization, or directly to you, under certain conditions.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>

          <h2 className='mt-10 font-bold text-2xl'>Children's Information</h2>

          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p>
            opeboindustries.com does not knowingly collect any Personal
            Identifiable Information from children under the age of 13. If you
            think that your child provided this kind of information on our
            website, we strongly encourage you to contact us immediately and we
            will do our best efforts to promptly remove such information from
            our records.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
