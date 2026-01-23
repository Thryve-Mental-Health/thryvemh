'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Submit to Netlify
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        form.reset();
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        alert('Something went wrong. Please try again.');
      });
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-green-600 text-lg font-semibold mb-2">
          Thank you for your interest!
        </div>
        <p className="text-green-700">
          We've received your information and will reach out when Thryve is ready.
        </p>
      </div>
    );
  }

  return (
    <form
      name="thryve-waitlist"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-gray-50 rounded-lg p-8 space-y-6"
    >
      <input type="hidden" name="form-name" value="thryve-waitlist" />
      
      {/* Netlify bot field */}
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
          placeholder="your.email@example.com"
        />
      </div>
      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
          Organization (Optional)
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none"
          placeholder="Your practice or organization"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none resize-none"
          placeholder="Tell us about your practice or what you're looking for..."
        />
      </div>
      <button
        type="submit"
        className="w-full text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity"
        style={{ backgroundColor: 'rgb(11, 102, 61)' }}
      >
        Join the waitlist
      </button>
      <p className="text-sm text-gray-500 text-center">
        We'll reach out when Thryve is ready. No spam, unsubscribe anytime.
      </p>
    </form>
  );
}
