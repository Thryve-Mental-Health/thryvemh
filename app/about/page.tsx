import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Thryve Mental Health</h1>
        </div>

        <div className="space-y-12 lg:space-y-16">
          <section>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              Thryve Mental Health was created to support the clinicians who deliver care every day. We believe mental health providers do their best work when administrative burden is reduced and systems are designed to serve clinical outcomes rather than workflows.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              Thryve is a software platform built to simplify the delivery of psychotherapy and medication management. Our goal is to remove friction from running a modern mental health practice by bringing scheduling, documentation, billing, and clinic operations into a single, intuitive system. By reducing time spent on non-clinical tasks, Thryve allows practitioners to focus on what matters most: providing high-quality care and supporting patient progress.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              We take a practitioner-first approach to product design. Every feature is built with the realities of clinical practice in mind, prioritizing clarity, efficiency, and reliability. Thryve is designed to support independent providers and growing practices alike, offering the flexibility to manage care delivery while maintaining control over clinical decision-making.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              As a fully remote, technology-driven company, Thryve is committed to building secure, scalable tools that align with industry best practices and evolving care models. Our mission is to empower mental health professionals with software that works quietly in the background so they can focus on outcomes, not overhead.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
