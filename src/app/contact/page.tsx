'use client';

import PageHeader from '@/components/PageHeader';
import { SCHOOL } from '@/data/content';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with Sainik School Tilaiya — we're here to help with admissions, queries, and more."
        breadcrumbs={[{ label: 'Contact' }]}
        accentText="Get In Touch"
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact Information
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: 'Address',
                    content: [SCHOOL.address],
                    subContent: 'Tilaiya Dam: 1 km · Koderma Rly: 18 km · Birsa Munda Airport: 150 km',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    content: [SCHOOL.phone, SCHOOL.phoneMobile],
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    content: [SCHOOL.email],
                  },
                  {
                    icon: Clock,
                    label: 'Office Hours',
                    content: ['Monday – Saturday: 9:00 AM – 5:00 PM'],
                    subContent: 'Closed on national & gazetted holidays',
                  },
                ].map(({ icon: Icon, label, content, subContent }) => (
                  <div key={label} className="flex gap-4 p-4 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#C8A84B]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#C8A84B] uppercase tracking-wider mb-1">{label}</div>
                      {content.map((line) => (
                        <div key={line} className="text-sm text-[#0D1B2A] font-medium">{line}</div>
                      ))}
                      {subContent && <div className="text-xs text-[#4A5568] mt-1">{subContent}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp quick contact */}
            <a
              href="https://wa.me/919470962052"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#20b858] transition-colors"
            >
              <MessageCircle size={20} />
              Chat with us on WhatsApp
            </a>

            {/* Map embed placeholder */}
            <div className="rounded-xl overflow-hidden border border-gray-200 h-56 bg-gray-100 flex items-center justify-center">
              <div className="text-center text-[#4A5568]">
                <MapPin size={28} className="mx-auto mb-2 text-[#C8A84B]" />
                <div className="text-sm font-semibold">Tilaiya Dam, Koderma</div>
                <div className="text-xs mt-1">Interactive map coming soon</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Send a Message
            </h2>
            {submitted ? (
              <div className="text-center py-16 border border-gray-100 rounded-xl">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-bold text-[#0D1B2A] text-xl mb-2">Message Sent!</h3>
                <p className="text-[#4A5568] text-sm">We'll get back to you within 1–2 working days.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text' },
                    { id: 'phone', label: 'Phone Number', type: 'tel' },
                  ].map(({ id, label, type }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-semibold text-[#0D1B2A] mb-1.5">{label} <span className="text-[#C0392B]">*</span></label>
                      <input id={id} type={type} required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors" />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0D1B2A] mb-1.5">Email <span className="text-[#C0392B]">*</span></label>
                  <input id="email" type="email" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#0D1B2A] mb-1.5">Subject</label>
                  <select id="subject" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors bg-white">
                    <option>Admission Enquiry</option>
                    <option>General Information</option>
                    <option>Alumni Query</option>
                    <option>Media / Press</option>
                    <option>RTI Query</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#0D1B2A] mb-1.5">Message <span className="text-[#C0392B]">*</span></label>
                  <textarea id="message" rows={5} required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#C8A84B] focus:ring-1 focus:ring-[#C8A84B] transition-colors resize-none" placeholder="Type your message here..." />
                </div>
                <button type="submit" className="w-full bg-[#0D1B2A] hover:bg-[#1a2e45] text-white font-bold py-3 rounded-lg transition-colors text-sm uppercase tracking-wide">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
