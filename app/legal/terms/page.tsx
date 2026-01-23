import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Thryve Mental Health ("Company," "we," "us," or "our") regarding your use of our practice management platform and services (the "Service").
            </p>
            <p className="text-gray-700">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Thryve Mental Health provides a cloud-based Software-as-a-Service (SaaS) platform designed for licensed mental health providers to manage their practice operations, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Patient scheduling and appointment management</li>
              <li>Clinical documentation and note-taking</li>
              <li>Billing and claims processing</li>
              <li>Outcomes tracking and reporting</li>
              <li>Practice administration tools</li>
            </ul>
            <p className="text-gray-700">
              The Service is intended for use by licensed healthcare professionals and their authorized staff members only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Account Creation</h3>
            <p className="text-gray-700 mb-4">
              To use the Service, you must create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Eligibility</h3>
            <p className="text-gray-700 mb-4">
              You must be at least 18 years old and a licensed healthcare professional (or authorized staff member) to use the Service. By creating an account, you represent and warrant that you meet these eligibility requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Account Security</h3>
            <p className="text-gray-700 mb-4">
              You are responsible for maintaining the security of your account and password. You agree to notify us immediately of any unauthorized access or use of your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-700 mb-4">
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Violate any applicable federal, state, or local laws or regulations</li>
              <li>Infringe upon the rights of others, including intellectual property rights</li>
              <li>Transmit any malicious code, viruses, or harmful data</li>
              <li>Attempt to gain unauthorized access to the Service or related systems</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use the Service to store or transmit illegal content</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
              <li>Use automated systems to access the Service without authorization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Protected Health Information (PHI) and HIPAA Compliance</h2>
            <p className="text-gray-700 mb-4">
              As a Business Associate under HIPAA, we are committed to protecting PHI. By using the Service, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Use the Service in compliance with HIPAA and other applicable healthcare privacy laws</li>
              <li>Enter into a Business Associate Agreement (BAA) with us before using the Service to store or process PHI</li>
              <li>Maintain appropriate safeguards for PHI in your possession</li>
              <li>Notify us immediately of any security incidents or breaches</li>
              <li>Obtain necessary patient authorizations and consents</li>
            </ul>
            <p className="text-gray-700">
              We implement administrative, physical, and technical safeguards to protect PHI, but you remain responsible for compliance with all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Our Intellectual Property</h3>
            <p className="text-gray-700 mb-4">
              The Service, including its original content, features, functionality, and design, is owned by Thryve Mental Health and is protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Your Content</h3>
            <p className="text-gray-700 mb-4">
              You retain ownership of any data, information, or content you submit to the Service ("User Content"). By submitting User Content, you grant us a limited, non-exclusive, worldwide, royalty-free license to use, store, and process your User Content solely to provide and improve the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Payment Terms</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Subscription Fees</h3>
            <p className="text-gray-700 mb-4">
              Access to the Service requires payment of subscription fees as specified in your subscription plan. Fees are billed in advance on a monthly or annual basis, as applicable.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Payment Processing</h3>
            <p className="text-gray-700 mb-4">
              Payments are processed through third-party payment processors. You agree to provide accurate payment information and authorize us to charge your payment method for all fees.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Refunds</h3>
            <p className="text-gray-700 mb-4">
              Subscription fees are generally non-refundable. Refunds, if any, will be at our sole discretion and in accordance with applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Service Availability and Modifications</h2>
            <p className="text-gray-700 mb-4">
              We strive to maintain high availability of the Service but do not guarantee uninterrupted or error-free operation. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Modify, suspend, or discontinue the Service at any time</li>
              <li>Perform scheduled maintenance and updates</li>
              <li>Make changes to features and functionality</li>
            </ul>
            <p className="text-gray-700">
              We will provide reasonable notice of material changes that may affect your use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Data Backup and Retention</h2>
            <p className="text-gray-700 mb-4">
              We maintain regular backups of data stored on the Service. However, you are responsible for maintaining your own backups of critical data. We are not liable for any loss of data.
            </p>
            <p className="text-gray-700">
              Upon termination of your account, we will retain your data for a reasonable period as required by law or our Business Associate Agreement, after which it may be permanently deleted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.1 Termination by You</h3>
            <p className="text-gray-700 mb-4">
              You may terminate your account at any time by contacting us or using the account termination features in the Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.2 Termination by Us</h3>
            <p className="text-gray-700 mb-4">
              We may suspend or terminate your account immediately if you violate these Terms, engage in fraudulent or illegal activity, or fail to pay required fees.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">10.3 Effect of Termination</h3>
            <p className="text-gray-700 mb-4">
              Upon termination, your right to use the Service will cease immediately. We will provide you with a reasonable opportunity to export your data, subject to applicable legal and contractual obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Disclaimers and Limitation of Liability</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">11.1 Service Provided "As Is"</h3>
            <p className="text-gray-700 mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">11.2 Limitation of Liability</h3>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
            </p>
            <p className="text-gray-700">
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify, defend, and hold harmless Thryve Mental Health and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of or related to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-700">
              Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization], except where prohibited by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of the Service after such changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Thryve Mental Health, Inc</strong></p>
              <p className="text-gray-700 mb-2">Email: support@thryvementalhealth.com</p>
              <p className="text-gray-700">2909 Wayzata Blvd STE 92272</p>
              <p className="text-gray-700">Minneapolis, MN 55405</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
