import * as React from "react";
import { useEffect } from "react";
import { useThemeMode } from "../theme/themeContext";

export default function PrivacyPolicy() {
  const { setPage } = useThemeMode();

  useEffect(() => {
    setPage("privacy-policy");
  }, [setPage]);

  return (
    <main
      id="top"
      className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 sm:py-16 lg:px-8 py-16 sm:py-12 lg:py-16">
        <article className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
          <div className="p-6 sm:p-8 lg:p-12">
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              Our website address is:{" "}
              <a
                href="https://itsdaniyal.github.io/portfolio"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-emerald-500/40 underline-offset-4 hover:decoration-emerald-500"
              >
                https://itsdaniyal.github.io/portfolio
              </a>
              . by Daniyal Ahmad Rizwan.
            </p>

            <p className="mt-6 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              This Privacy Policy describes our policies and procedures on the
              collection, use, and disclosure of your information when you use
              the Service—plus your privacy rights and how the law protects you.
            </p>

            <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
              We use your personal data to provide and improve the Service. By
              using the Service, you agree to the collection and use of
              information in accordance with this Privacy Policy. This Privacy
              Policy was created with the help of the{" "}
              <a
                href="https://www.termsfeed.com/privacy-policy-generator/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-emerald-500/40 underline-offset-4 hover:decoration-emerald-500"
              >
                Privacy Policy Generator
              </a>
              .
            </p>

            {/* Sections */}
            <Section id="who-we-are" title="Who we are">
              <p>
                Daniyal Ahmad Rizwan operates the Website and the Application.
              </p>
            </Section>

            <Section
              id="interpretation-and-definitions"
              title="Interpretation and Definitions"
            >
              <Subheading>Interpretation</Subheading>
              <p>
                The words with initial capital letters have meanings defined
                under the following conditions. The definitions shall have the
                same meaning regardless of whether they appear in singular or
                plural.
              </p>

              <Subheading>Definitions</Subheading>
              <p>For the purposes of this Privacy Policy:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Account</strong> means a unique account created for
                  you to access our Service or parts of our Service.
                </li>
                <li>
                  <strong>Affiliate</strong> means an entity that controls, is
                  controlled by, or is under common control with a party, where
                  “control” means ownership of 50% or more of the shares, equity
                  interest, or other securities entitled to vote for election of
                  directors or other managing authority.
                </li>
                <li>
                  <strong>Application</strong> refers to applications developed
                  by Daniyal Ahmad Rizwan, the software program provided by the
                  Company.
                </li>
                <li>
                  <strong>Company</strong> (referred to as either “the Company”,
                  “We”, “Us” or “Our” in this Agreement) refers to Daniyal Ahmad
                  Rizwan.
                </li>
                <li>
                  <strong>Cookies</strong> are small files placed on your device
                  by a website, containing the details of your browsing history
                  on that website among its many uses.
                </li>
                <li>
                  <strong>Country</strong> refers to: Pakistan.
                </li>
                <li>
                  <strong>Device</strong> means any device that can access the
                  Service such as a computer, a cellphone, or a tablet.
                </li>
                <li>
                  <strong>Personal Data</strong> is any information that relates
                  to an identified or identifiable individual.
                </li>
                <li>
                  <strong>Service</strong> refers to the Application or the
                  Website or both.
                </li>
                <li>
                  <strong>Service Provider</strong> means any natural or legal
                  person who processes the data on behalf of the Company.
                </li>
                <li>
                  <strong>Third-party Social Media Service</strong> refers to
                  any website or social network through which a User can log in
                  or create an account to use the Service.
                </li>
                <li>
                  <strong>Usage Data</strong> refers to data collected
                  automatically, either generated by the use of the Service or
                  from the Service infrastructure itself (for example, the
                  duration of a page visit).
                </li>
                <li>
                  <strong>Website</strong> refers to Daniyal Ahmad Rizwan,
                  accessible from{" "}
                  <a
                    href="https://itsdaniyal.github.io/portfolio"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline decoration-emerald-500/40 underline-offset-4 hover:decoration-emerald-500"
                  >
                    https://itsdaniyal.github.io/portfolio
                  </a>
                  .
                </li>
                <li>
                  <strong>You</strong> means the individual accessing or using
                  the Service, or the company, or other legal entity on behalf
                  of which such individual is accessing or using the Service, as
                  applicable.
                </li>
              </ul>
            </Section>

            <Section
              id="collecting-and-using-data"
              title="Collecting and Using Your Personal Data"
            >
              <Subheading>Types of Data Collected</Subheading>
              <h4 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Personal Data
              </h4>
              <p>
                While using our Service, we may ask you to provide certain
                personally identifiable information that can be used to contact
                or identify you. This may include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Usage Data</li>
              </ul>

              <h4 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Usage Data
              </h4>
              <p>
                Usage Data is collected automatically when using the Service and
                may include your IP address, browser type/version, pages
                visited, time/date of visits, time spent on pages, unique device
                identifiers, and other diagnostic data. On mobile, collection
                may include device type, unique ID, IP, OS, browser type, and
                identifiers.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Information from Third-Party Social Media Services
              </h4>
              <p>
                The Company allows you to create an account and log in using the
                following services:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Google</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
              <p>
                If you register through or grant us access to a Third-Party
                Social Media Service, we may collect Personal Data associated
                with that account (e.g., name, email, activities, contact list).
                If you voluntarily share additional information, you allow the
                Company to use, share, and store it consistent with this Privacy
                Policy.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Information Collected while Using the Application
              </h4>
              <p>
                With your prior permission, we may collect information regarding
                your location to provide features, improve, and customize the
                Service. Data may be uploaded to Company or Service Provider
                servers, or stored on your device. You can enable/disable access
                anytime via device settings.
              </p>

              <h4 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Tracking Technologies and Cookies
              </h4>
              <p>
                We use cookies and similar technologies (beacons, tags, scripts)
                to track activity and store information to improve and analyze
                our Service.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Cookies/Browser Cookies:</strong> Small files placed
                  on your device. You can refuse cookies via browser settings;
                  some features may not work without them.
                </li>
                <li>
                  <strong>Web Beacons:</strong> Small electronic files in
                  pages/emails to count visits/opens and for related statistics.
                </li>
              </ul>
              <p>
                Cookies may be “Persistent” or “Session.” Learn more at{" "}
                <a
                  href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline decoration-emerald-500/40 underline-offset-4 hover:decoration-emerald-500"
                >
                  TermsFeed
                </a>
                .
              </p>
              <p className="mt-4">
                We use both Session and Persistent Cookies for purposes such as:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Necessary/Essential Cookies</strong> – authenticate
                  users and prevent fraudulent use of accounts.
                </li>
                <li>
                  <strong>Policy/Notice Acceptance Cookies</strong> – record
                  cookie consent.
                </li>
                <li>
                  <strong>Functionality Cookies</strong> – remember choices like
                  login details or language preferences.
                </li>
              </ul>
            </Section>

            <Section
              id="use-of-personal-data"
              title="Use of Your Personal Data"
            >
              <p>The Company may use Personal Data to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Provide and maintain our Service (including usage monitoring).
                </li>
                <li>Manage your account and user registration.</li>
                <li>Perform contracts related to purchases or services.</li>
                <li>
                  Contact you via email, phone, SMS, or push notifications for
                  updates and information.
                </li>
                <li>
                  Provide news, offers, and similar information unless you opt
                  out.
                </li>
                <li>Manage your requests.</li>
                <li>
                  Evaluate business transfers (mergers, acquisitions, asset
                  sales).
                </li>
                <li>
                  Other purposes: analysis, trends, campaign effectiveness, and
                  Service improvement.
                </li>
              </ul>
              <p className="mt-4">
                We may share personal information with Service Providers, in
                business transfers, with affiliates, partners, other users
                (where applicable), or with your consent.
              </p>
            </Section>

            <Section id="retention" title="Retention of Your Personal Data">
              <p>
                The Company retains Personal Data only as long as necessary for
                the purposes set out in this Policy and to comply with legal
                obligations, resolve disputes, and enforce agreements. Usage
                Data is generally retained for a shorter period unless needed
                for security, functionality, or legal obligations.
              </p>
            </Section>

            <Section id="transfer" title="Transfer of Your Personal Data">
              <p>
                Your information may be processed at Company offices and
                elsewhere. It may be transferred to computers outside your
                jurisdiction where data protection laws may differ. We take
                reasonable steps to ensure secure treatment and transfers only
                where adequate controls exist.
              </p>
            </Section>

            <Section id="delete" title="Delete Your Personal Data">
              <p>
                You may delete certain information from within the Service. You
                can update, amend, or delete your information via account
                settings (if applicable) or by contacting us. We may retain some
                information where we have a legal obligation or lawful basis.
              </p>
            </Section>

            <Section id="disclosure" title="Disclosure of Your Personal Data">
              <h4 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Business Transactions
              </h4>
              <p>
                If the Company is involved in a merger, acquisition, or asset
                sale, your Personal Data may be transferred with notice provided
                beforehand.
              </p>
              <h4 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Law Enforcement
              </h4>
              <p>
                We may disclose Personal Data when required by law or in
                response to valid requests by public authorities.
              </p>
              <h4 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Other Legal Requirements
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comply with a legal obligation.</li>
                <li>
                  Protect and defend the rights or property of the Company.
                </li>
                <li>Prevent or investigate possible wrongdoing.</li>
                <li>Protect the personal safety of users or the public.</li>
                <li>Protect against legal liability.</li>
              </ul>
            </Section>

            <Section id="security" title="Security of Your Personal Data">
              <p>
                No method of transmission or storage is 100% secure. We strive
                to use commercially acceptable means to protect Personal Data
                but cannot guarantee absolute security.
              </p>
            </Section>

            <Section id="children" title="Children’s Privacy">
              <p>
                Our Service does not address anyone under 13. We do not
                knowingly collect personal information from children under 13.
                If a child has provided Personal Data, contact us so we can
                remove it. Where consent is the legal basis and your country
                requires parental consent, we may require a parent’s consent.
              </p>
            </Section>

            <Section id="links" title="Links to Other Websites">
              <p>
                Our Service may contain links to external websites not operated
                by us. We strongly advise you to review the privacy policy of
                every site you visit. We have no control over and assume no
                responsibility for third-party content, privacy policies, or
                practices.
              </p>
            </Section>

            <Section id="changes" title="Changes to this Privacy Policy">
              <p>
                We may update this Policy from time to time. We will post the
                new Policy on this page and update the “Last updated” date
                above. We may also notify you via email and/or a prominent
                notice prior to the change becoming effective.
              </p>
            </Section>

            <Section id="contact" title="Contact Us">
              <p>
                If you have questions about this Privacy Policy, contact us:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  By visiting this page:{" "}
                  <a
                    href="https://itsdaniyal.github.io/portfolio/#/contact"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline decoration-emerald-500/40 underline-offset-4 hover:decoration-emerald-500"
                  >
                    https://itsdaniyal.github.io/portfolio/#/contact
                  </a>
                </li>
                <li>
                  By email:{" "}
                  <a
                    href="mailto:daniyal.ahmad.rizwan@hotmail.com"
                    className="underline decoration-emerald-500/40 underline-offset-4 hover:decoration-emerald-500"
                  >
                    daniyal.ahmad.rizwan@hotmail.com
                  </a>
                </li>
              </ul>
            </Section>
          </div>
        </article>
      </div>
    </main>
  );
}

// Reusable section wrappers
function Section({
  id,
  title,
  children,
}: React.PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section id={id} className="scroll-mt-28 pt-10 sm:pt-12">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}

function Subheading({ children }: React.PropsWithChildren) {
  return (
    <h3 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
      {children}
    </h3>
  );
}
