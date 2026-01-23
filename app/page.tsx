import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-20 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Practice management built for mental health providers
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Focus on what matters most—your patients. Thryve removes the administrative burden so you can deliver quality care without the back-office headaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#get-started" 
                  className="inline-flex items-center justify-center text-white font-medium hover:opacity-90 text-center"
                  style={{ backgroundColor: 'rgb(11, 102, 61)', padding: '15px 24px', borderRadius: '4px', fontSize: '21px' }}
                >
                  Join the waitlist
                </Link>
                <Link 
                  href="#get-started" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 text-center"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/platform-preview.jpg"
                  alt="Thryve Mental Health Platform Preview"
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 lg:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to run your practice
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamline scheduling, documentation, billing, and outcomes tracking—all in one secure platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                Automated appointment booking with patient preferences and provider availability.
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clinical Documentation</h3>
              <p className="text-gray-600">
                HIPAA-compliant notes and forms that adapt to your workflow.
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Billing</h3>
              <p className="text-gray-600">
                Streamlined claims processing and payment collection.
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Outcomes Tracking</h3>
              <p className="text-gray-600">
                Measure and improve patient outcomes with built-in analytics.
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
              <p className="text-gray-600">
                Enterprise-grade security with encryption at rest and in transit.
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Native</h3>
              <p className="text-gray-600">
                Built on AWS for reliability, scalability, and global performance.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50 rounded-2xl mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get up and running in minutes, not weeks.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ backgroundColor: 'rgb(11, 102, 61)' }}>1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sign up</h3>
              <p className="text-gray-600">
                Create your account and complete your practice profile in minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ backgroundColor: 'rgb(11, 102, 61)' }}>2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Configure</h3>
              <p className="text-gray-600">
                Set up your schedules, billing, and documentation templates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ backgroundColor: 'rgb(11, 102, 61)' }}>3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start practicing</h3>
              <p className="text-gray-600">
                Begin seeing patients with all your administrative tasks automated.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="get-started" className="py-16 lg:py-24">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Get notified when we launch
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Thryve is currently in development. Join our waitlist to be notified when we're ready to help streamline your practice.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
