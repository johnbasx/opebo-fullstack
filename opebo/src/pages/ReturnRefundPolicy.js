import React from "react";
import { Link } from "react-router-dom";
import Footer from "../modules/components/Footer";

const logo = require("../assets/images/logo.png");

function ReturnRefundPolicy() {
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
          <h1 className='font-bold text-5xl'>Return and Refund Policy</h1>

          <p className='text-green-500 text-sm'>Last updated: April 13, 2020</p>

          <p className='font-medium text-2xl'>
            Thank you for choosing opeboindustries.com operated by Opebo
            Industries Pvt. Ltd..
          </p>

          <p>
            If, for any reason, You are not completely satisfied with a purchase
            or service, we invite you to review our policy on refunds and
            returns. This Return and Refund Policy has been created with the
            help of{" "}
            <a href='https://www.termsfeed.com/return-refund-policy-generator/'>
              Return and Refund Policy Generator
            </a>
            .
          </p>

          <p>
            The following terms are applicable for any products or service that
            you purchased with or from Us.
          </p>

          <h1 className='mt-10 text-4xl font-bold'>
            Interpretation and Definitions
          </h1>
          <h2 className='mt-5 text-2xl font-bold'>Interpretation</h2>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions.
          </p>
          <p>
            The following definitions shall have the same meaning regardless of
            whether they appear in singular or in plural.
          </p>

          <h2 className='mt-5 text-2xl font-bold'>Definitions</h2>
          <p>For the purposes of this Return and Refund Policy:</p>
          <ul className='list-disc ml-10'>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </li>
            <li>
              <strong>Company</strong> (referred to as either "the Company",
              "We", "Us" or "Our" in this Agreement) refers to Opebo Industries
              Pvt. Ltd., Patna.
            </li>
            <li>
              <strong>Service</strong> refers to the Website.
            </li>
            <li>
              <strong>Website</strong> refers to opeboindustries.com, accessible
              from https://opeboindustries.com
            </li>{" "}
            <li>
              <strong>Goods</strong> refer to the items offered for sale on the
              Service.
            </li>
            <li>
              <strong>Orders</strong> mean a request by You to purchase Goods
              from Us.
            </li>
          </ul>

          <hr className='bg-orange-500 h-2' />

          <h1 className='mt-10 text-4xl font-bold'>
            Your Order Cancellation Rights
          </h1>
          <p>
            You are entitled to cancel Your Order within 4 hours by giving a
            reason for doing so.
          </p>
          <p>
            The deadline for cancelling an Order is 4 hours from the date on
            which You received the Goods or on which a third party you have
            appointed, who is not the carrier, takes possession of the product
            or service delivered.
          </p>
          <p>
            In order to exercise Your right of cancellation, You must inform Us
            of your decision by means of a clear statement. You can inform us of
            your decision by:
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
          <p>
            We will reimburse You no later than 4 hours from the time on which
            We receive the returned Goods. We will use the same means of payment
            as You used for the Order, and You will not incur any fees for such
            reimbursement.
          </p>

          <hr className='bg-orange-500 h-2' />

          <h1 className='mt-10 text-4xl font-bold'>Conditions for Returns</h1>
          <p>
            In order for the Goods to be eligible for a return, please make sure
            that:
          </p>
          <ul className='list-disc ml-10'>
            <li>The Goods/Service were purchased in the last 4 hours</li>
            <li>The Goods/Service are in the original packaging</li>{" "}
          </ul>
          <p>The following Goods cannot be returned:</p>
          <ul className='list-disc ml-10'>
            <li>
              The supply of Goods/Services made to Your specifications or
              clearly personalized.
            </li>
            <li>
              The supply of Goods/Services which according to their nature are
              not suitable to be returned, deteriorate rapidly or where the date
              of expiry is over.
            </li>
            <li>
              The supply of Goods/Services which are not suitable for return due
              to health protection or hygiene reasons and were unsealed after
              delivery.
            </li>
            <li>
              The supply of Goods/Services which are, after delivery, according
              to their nature, inseparably mixed with other items.
            </li>
          </ul>
          <p>
            We reserve the right to refuse returns of any merchandise that does
            not meet the above return conditions in our sole discretion.
          </p>

          <p>
            Only regular priced Goods may be refunded. Unfortunately, Goods on
            sale cannot be refunded. This exclusion may not apply to You if it
            is not permitted by applicable law.
          </p>

          <hr className='bg-orange-500 h-2' />

          <h1 className='mt-10 text-4xl font-bold'>Returning Goods</h1>
          <p>
            You are responsible for the cost and risk of returning the Goods to
            Us. You should send the Goods at the following address:
          </p>
          <p></p>
          <p>
            We cannot be held responsible for Goods damaged or lost in return
            shipment. Therefore, We recommend an insured and trackable mail
            service. We are unable to issue a refund without actual receipt of
            the Goods or proof of received return delivery.
          </p>

          <hr className='bg-orange-500 h-2' />

          <h1 className='mt-10 text-4xl font-bold'>Gifts</h1>
          <p>
            If the Goods or Services were marked as a gift when purchased and
            then shipped directly to you, You'll receive a gift credit for the
            value of your return. Once the returned product is received, a gift
            certificate will be mailed to You.
          </p>
          <p>
            If the Goods or Services weren't marked as a gift when purchased, or
            the gift giver had the Order shipped to themselves to give it to You
            later, We will send the refund to the gift giver.
          </p>

          <h2 className='mt-5 text-3xl font-bold'>Contact us</h2>
          <p>
            If you have any questions about our Returns and Refunds Policy,
            please contact us:
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

export default ReturnRefundPolicy;
