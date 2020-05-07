import React from "react";
import { Link } from "react-router-dom";
import Footer from "../modules/components/Footer";

const logo = require("../assets/images/logo.png");

function EndUserLicense() {
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
            End-User License Agreement <u>("Agreement")</u>
          </h1>

          <p className='text-orange-500'>Last updated: April 13, 2020</p>
          <p className='text-2xl'>
            Please read this End-User License Agreement carefully before
            clicking the <b>"I Agree"</b> button, downloading or using OpeBo.
          </p>

          <h1 className='mt-10 text-3xl font-bold'>
            Interpretation and Definitions
          </h1>
          <h2 className='text-2xl font-bold'>Interpretation</h2>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions.{" "}
          </p>
          <p>
            The following definitions shall have the same meaning regardless of
            whether they appear in singular or in plural.
          </p>

          <h2 className='pt-5 text-2xl font-bold'>Definitions</h2>
          <p>
            <i>For the purposes of this End-User License Agreement:</i>
          </p>

          <ul className='list-disc ml-5 '>
            <li>
              <strong>Agreement</strong> means this End-User License Agreement
              that forms the entire agreement between You and the Company
              regarding the use of the Application. This Agreement has been
              created with the help of{" "}
              <a href='https://www.termsfeed.com/eula-generator/'>
                EULA Generator
              </a>
              .
            </li>
            <li>
              <strong>Application</strong> means the software program provided
              by the Company downloaded by You to a Device, named OpeBo
            </li>
            <li>
              <strong>Company</strong> (referred to as either "the Company",
              "We", "Us" or "Our" in this Agreement) refers to Opebo Industries
              Pvt. Ltd., Patna.
            </li>
            <li>
              <strong>Content</strong> refers to content such as text, images,
              or other information that can be posted, uploaded, linked to or
              otherwise made available by You, regardless of the form of that
              content.
            </li>
            <li>
              <strong>Country</strong> refers to: Bihar, India
            </li>
            <li>
              <strong>Device</strong> means any device that can access the
              Application such as a computer, a cellphone or a digital tablet.
            </li>
            <li>
              <strong>Third-Party Services</strong> means any services or
              content (including data, information, applications and other
              products services) provided by a third-party that may be
              displayed, included or made available by the Application.
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Application or the company, or other legal entity on behalf of
              which such individual is accessing or using the Application, as
              applicable.
            </li>
          </ul>

          <h1 className='mt-10 text-3xl font-bold'>Acknowledgement</h1>
          <p>
            By clicking the <b>"I Agree"</b> button, downloading or using the
            Application, You are agreeing to be bound by the terms and
            conditions of this Agreement. If You do not agree to the terms of
            this Agreement, do not click on the <b>"I Agree"</b> button, do not
            download or do not use the Application.
          </p>
          <p>
            This Agreement is a legal document between You and the Company and
            it governs your use of the Application made available to You by the
            Company.
          </p>
          <p>
            The Application is licensed, not sold, to You by the Company for use
            strictly in accordance with the terms of this Agreement.
          </p>
          <p>
            You represent that you are over the age of <b>18</b>. The Company
            does not target its Content to children or teenagers <b>under 18</b>
            , and the Company does not permit any user <b>under 18</b> for using
            the Application.
          </p>

          <h1 className='mt-20 text-4xl font-bold'>License</h1>
          <h2 className='text-2xl font-bold'>Scope of License</h2>
          <p>
            The Company grants You a revocable, non-exclusive, non-transferable,
            limited license to download, install and use the Application
            strictly in accordance with the terms of this Agreement.
          </p>
          <p>
            The license that is granted to You by the Company is solely for your
            personal, non-commercial purposes strictly in accordance with the
            terms of this Agreement.
          </p>

          <h2 className='pt-5 text-2xl font-bold text-red-600'>
            License Restrictions
          </h2>
          <p>
            <b>You agree not to, and You will not permit others to:</b>
          </p>
          <ul>
            <li>
              Remove, alter or obscure any proprietary notice (including any
              notice of copyright or trademark) of the Company or its
              affiliates, partners, suppliers or the licensors of the
              Application.
            </li>
          </ul>

          <h1 className='pt-5 text-2xl font-bold'>Third-Party Services</h1>
          <p>
            The Application may display, include or make available third-party
            content (including data, information, applications and other
            products services) or provide links to third-party websites or
            services.
          </p>
          <p>
            You acknowledge and agree that the Company shall not be responsible
            for any Third-party Services, including their accuracy,
            completeness, timeliness, validity, copyright compliance, legality,
            decency, quality or any other aspect thereof. The Company does not
            assume and shall not have any liability or responsibility to You or
            any other person or entity for any Third-party Services.
          </p>
          <p>
            You must comply with applicable Third parties' Terms of agreement
            when using the Application. Third-party Services and links thereto
            are provided solely as a convenience to You and You access and use
            them entirely at your own risk and subject to such third parties'
            Terms and conditions.
          </p>

          <h1 className='pt-5 text-2xl font-bold'>Term and Termination</h1>
          <p>
            This Agreement shall remain in effect until terminated by You or the
            Company.
          </p>
          <p>
            The Company may, in its sole discretion, at any time and for any or
            no reason, suspend or terminate this Agreement with or without prior
            notice.
          </p>
          <p>
            This Agreement will terminate immediately, without prior notice from
            the Company, in the event that you fail to comply with any provision
            of this Agreement. You may also terminate this Agreement by deleting
            the Application and all copies thereof from your Device or from your
            computer.
          </p>
          <p>
            Upon termination of this Agreement, You shall cease all use of the
            Application and delete all copies of the Application from your
            Device.
          </p>
          <p>
            Termination of this Agreement will not limit any of the Company's
            rights or remedies at law or in equity in case of breach by You
            (during the term of this Agreement) of any of your obligations under
            the present Agreement.
          </p>

          <h1 className='pt-5 text-2xl font-bold'>Indemnification</h1>
          <p>
            You agree to indemnify and hold the Company and its parents,
            subsidiaries, affiliates, officers, employees, agents, partners and
            licensors (if any) harmless from any claim or demand, including
            reasonable attorneys' fees, due to or arising out of your: (a) use
            of the Application; (b) violation of this Agreement or any law or
            regulation; or (c) violation of any right of a third party.
          </p>

          <h1 className='pt-5 text-2xl font-bold'>No Warranties</h1>
          <p>
            The Application is provided to You "AS IS" and "AS AVAILABLE" and
            with all faults and defects without warranty of any kind. To the
            maximum extent permitted under applicable law, the Company, on its
            own behalf and on behalf of its affiliates and its and their
            respective licensors and service providers, expressly disclaims all
            warranties, whether express, implied, statutory or otherwise, with
            respect to the Application, including all implied warranties of
            merchantability, fitness for a particular purpose, title and
            non-infringement, and warranties that may arise out of course of
            dealing, course of performance, usage or trade practice. Without
            limitation to the foregoing, the Company provides no warranty or
            undertaking, and makes no representation of any kind that the
            Application will meet your requirements, achieve any intended
            results, be compatible or work with any other software,
            applications, systems or services, operate without interruption,
            meet any performance or reliability standards or be error free or
            that any errors or defects can or will be corrected.
          </p>
          <p>
            Without limiting the foregoing, neither the Company nor any of the
            company's provider makes any representation or warranty of any kind,
            express or implied: (i) as to the operation or availability of the
            Application, or the information, content, and materials or products
            included thereon; (ii) that the Application will be uninterrupted or
            error-free; (iii) as to the accuracy, reliability, or currency of
            any information or content provided through the Application; or (iv)
            that the Application, its servers, the content, or e-mails sent from
            or on behalf of the Company are free of viruses, scripts, trojan
            horses, worms, malware, timebombs or other harmful components.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain types of
            warranties or limitations on applicable statutory rights of a
            consumer, so some or all of the above exclusions and limitations may
            not apply to You. But in such a case the exclusions and limitations
            set forth in this section 11 shall be applied to the greatest extent
            enforceable under applicable law. To the extent any warranty exists
            under law that cannot be disclaimed, the Company shall be solely
            responsible for such warranty.
          </p>

          <h1 className='pt-5 text-2xl font-bold'>Limitation of Liability</h1>
          <p>
            Notwithstanding any damages that You might incur, the entire
            liability of the Company and any of its suppliers under any
            provision of this Agreement and your exclusive remedy for all of the
            foregoing shall be limited to the amount actually paid by You for
            the Application or through the Application.
          </p>
          <p>
            To the maximum extent permitted by applicable law, in no event shall
            the Company or its suppliers be liable for any special, incidental,
            indirect, or consequential damages whatsoever (including, but not
            limited to, damages for loss of profits, loss of data or other
            information, for business interruption, for personal injury, loss of
            privacy arising out of or in any way related to the use of or
            inability to use the Application, third-party software and/or
            third-party hardware used with the Application, or otherwise in
            connection with any provision of this Agreement), even if the
            Company or any supplier has been advised of the possibility of such
            damages and even if the remedy fails of its essential purpose.
          </p>
          <p>
            Some states/jurisdictions do not allow the exclusion or limitation
            of incidental or consequential damages, so the above limitation or
            exclusion may not apply to You.
          </p>

          <h1 className='mt-16 text-4xl font-bold'>Severability and Waiver</h1>
          <h2 className='pt-5 text-2xl font-bold'>Severability</h2>
          <p>
            If any provision of this Agreement is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law and the remaining provisions will
            continue in full force and effect.
          </p>

          <h2 className='pt-5 text-2xl font-bold'>Waiver</h2>
          <p>
            Except as provided herein, the failure to exercise a right or to
            require performance of an obligation under this Agreement shall not
            effect a party's ability to exercise such right or require such
            performance at any time thereafter nor shall be the waiver of a
            breach constitute a waiver of any subsequent breach.
          </p>

          <h1 className='mt-10 text-4xl font-bold'>Product Claims</h1>
          <p>
            The Company does not make any warranties concerning the Application.{" "}
          </p>

          <h2 className='pt-5 text-3xl font-bold'>Indian Legal Compliance</h2>
          <p>
            You represent and warrant that (i) You are not located in a country
            that is subject to the Indian government embargo, or that has been
            designated by the Indian government as a "terrorist supporting"
            country, and (ii) You are not listed on any United States government
            list of prohibited or restricted parties.
          </p>

          <h1 className='mt-16 text-4xl font-bold'>
            Changes to this Agreement
          </h1>
          <p>
            The Company reserves the right, at its sole discretion, to modify or
            replace this Agreement at any time. If a revision is material we
            will provide at least 30 days' notice prior to any new terms taking
            effect. What constitutes a material change will be determined at the
            sole discretion of the Company.
          </p>
          <p>
            By continuing to access or use the Application after any revisions
            become effective, You agree to be bound by the revised terms. If You
            do not agree to the new terms, You are no longer authorized to use
            the Application.
          </p>

          <h1 className='pt-5 text-3xl font-bold'>Governing Law</h1>
          <p>
            The laws of the Country, excluding its conflicts of law rules, shall
            govern this Agreement and your use of the Application. Your use of
            the Application may also be subject to other local, state, national,
            or international laws.
          </p>

          <h1 className='pt-5 text-3xl font-bold'>Entire Agreement</h1>
          <p>
            The Agreement constitutes the entire agreement between You and the
            Company regarding your use of the Application and supersedes all
            prior and contemporaneous written or oral agreements between You and
            the Company.
          </p>
          <p>
            You may be subject to additional terms and conditions that apply
            when You use or purchase other Company's services, which the Company
            will provide to You at the time of such use or purchase.
          </p>

          <h1 className='pt-5 text-3xl font-bold'>Contact Us</h1>
          <p>
            If you have any questions about this Agreement, You can contact Us:
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

export default EndUserLicense;
