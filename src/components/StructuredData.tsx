export default function StructuredData() {
  const schoolSchema = {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: 'Sainik School Tilaiya',
    alternateName: ['SST', 'सैनिक स्कूल तिलैया'],
    url: 'https://sainikschooltilaiya.org',
    logo: 'https://sainikschooltilaiya.org/images/logo.png',
    image: 'https://sainikschooltilaiya.org/images/campus.jpg',
    description:
      'Sainik School Tilaiya is a prestigious defence preparatory boarding school established in 1963 at Tilaiya Dam, Koderma, Jharkhand. Managed by Sainik Schools Society, Ministry of Defence, Government of India.',
    foundingDate: '1963-09-16',
    telephone: '+916534235048',
    email: 'sainikschooltilaiya@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'P.O. Tilaiya Dam',
      addressLocality: 'Koderma',
      addressRegion: 'Jharkhand',
      postalCode: '825413',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.165',
      longitude: '85.565',
    },
    sameAs: [
      'https://en.wikipedia.org/wiki/Sainik_School,_Tilaiya',
      'https://sainikschool.ncog.gov.in',
    ],
    numberOfStudents: 841,
    keywords: 'Sainik School, NDA, Military School, CBSE, Jharkhand, Koderma, AISSEE',
    parentOrganization: {
      '@type': 'GovernmentOrganization',
      name: 'Sainik Schools Society',
      url: 'https://sainikschool.ncog.gov.in',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://sainikschooltilaiya.org',
    name: 'Sainik School Tilaiya',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://sainikschooltilaiya.org/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
