import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Insights on practice management, technology, and mental health care
          </p>
        </div>

        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">
            Check back soon for updates and insights.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
