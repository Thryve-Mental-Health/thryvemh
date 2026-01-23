import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Careers() {

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Careers at Thryve</h1>
          <p className="text-xl text-gray-600 mb-6">
            Join us in building the future of mental health practice management
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Thryve Mental Health, we're building technology that empowers mental health providers to focus on what matters most: patient care. We're a small, mission-driven team working to remove administrative friction from running a practice. If you're passionate about healthcare technology and want to make a real impact, we'd love to hear from you.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Work at Thryve?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mission-Driven Work</h3>
              <p className="text-gray-700">
                Every feature we build directly impacts mental health providers and their ability to care for patients.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Remote-First</h3>
              <p className="text-gray-700">
                Work from anywhere. We're a distributed team that values flexibility and work-life balance.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Excellence</h3>
              <p className="text-gray-700">
                Build on modern AWS infrastructure with best practices for security, scalability, and reliability.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
              <p className="text-gray-700">
                As an early-stage company, you'll have significant impact and opportunities to shape the product.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Don't see a role that fits?</h2>
          <p className="text-gray-700 mb-6">
            We're always interested in hearing from talented people who share our mission. Send us your resume and let us know how you'd like to contribute.
          </p>
          <Link 
            href="mailto:careers@thryvemh.com"
            className="inline-flex items-center px-6 py-3 text-white font-medium hover:opacity-90"
            style={{ backgroundColor: 'rgb(11, 102, 61)', borderRadius: '4px' }}
          >
            Get in touch
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
