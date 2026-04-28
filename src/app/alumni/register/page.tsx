'use client';

import PageHeader from '@/components/PageHeader';
import { useState } from 'react';

export default function AlumniRegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        title="Alumni Registration"
        subtitle="Register with the Sainik School Tilaiya alumni network and stay connected with your alma mater."
        breadcrumbs={[{ label: 'Alumni', href: '/alumni' }, { label: 'Register' }]}
        accentText="Join The Network"
      />
      <section className="py-16 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🎖️</div>
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Registration Received!</h2>
            <p className="text-[#4A5568]">Thank you for registering. The alumni office will get in touch with you shortly. Forward Ever!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { id: 'name', label: 'Full Name', type: 'text', required: true },
              { id: 'batch', label: 'Batch Year (e.g., 1985–90)', type: 'text', required: true },
              { id: 'house', label: 'House Name', type: 'text', required: false },
              { id: 'phone', label: 'Phone Number', type: 'tel', required: true },
              { id: 'email', label: 'Email Address', type: 'email', required: true },
              { id: 'profession', label: 'Current Profession / Designation', type: 'text', required: false },
              { id: 'city', label: 'Current City / Country', type: 'text', required: false },
            ].map(({ id, label, type, required }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-semibold text-[#0D1B2A] mb-1.5">
                  {label}{required && <span className="text-[#C0392B] ml-0.5">*</span>}
                </label>
                <input
                  id={id}
                  type={type}
                  required={required}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-[#0D1B2A] mb-1.5">Message (Optional)</label>
              <textarea rows={3}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors resize-none"
                placeholder="Any message for the school or alumni network..."
              />
            </div>
            <button type="submit"
              className="w-full bg-[#0D1B2A] hover:bg-[#1a2e45] text-white font-bold py-3 rounded-lg transition-colors text-sm uppercase tracking-wide">
              Register as Alumni
            </button>
          </form>
        )}
      </section>
    </>
  );
}
